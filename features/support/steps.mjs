
import { config } from 'dotenv'
config()
import { Camunda8 } from '@camunda8/sdk'
import { expect, should } from 'chai'
 import {setDefaultTimeout}  from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);
const c8 = new Camunda8()
const zeebe = c8.getZeebeGrpcApiClient()
const zeebeRest = c8.getZeebeRestClient()
const operate = c8.getOperateApiClient()
const optimize = c8.getOptimizeApiClient()
const tasklist = c8.getTasklistApiClient()
const modeler = c8.getModelerApiClient()
//const admin = c8.getAdminApiClient()

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

import { When, Then, Given } from '@cucumber/cucumber';


async function searchTaskBySubject(processInstanceKey, taskSubject) {
	for (var i = 0; i < 20; i++) {
		var tasks = await tasklist.searchTasks({
			processInstanceKey: processInstanceKey,
			includeVariables: [{ name: "taskSubject", alwaysReturnFullValue: true }],
			taskVariables: [{
				name: "taskSubject",
				operator: "eq",
				value: `"${taskSubject}"`
			}]
		});
		if (tasks&& tasks.length > 0) {
			return tasks[0]
		} else {
			await sleep(1000);
		}
	}
}
Given("start process with input {string} using process id {string}", async function (inputJSON, processId) {
	var response = await zeebe.createProcessInstance({
		bpmnProcessId: processId,
		variables: JSON.parse(inputJSON)
	});
	console.log('RESPONSE:', "createProcessInstance", response);
	expect(response).to.have.property('processInstanceKey')
	this.processInstanceKey = response.processInstanceKey;

});

Given("deploy bpmn file {string}", async function (filepath) {
	var result = await zeebe.deployResource({ processFilename: filepath });
	var d = result.deployments[0].process;
	console.log("DEPLOYED:", d.bpmnProcessId, d.version);
})
Given("start process using process id {string}", async function (processId) {
	await zeebe.createProcessInstance({
		bpmnProcessId: processId
	})
});
Then("wait {float} sec", { timeout: 600 * 1000 }, async function (delay) {
	await sleep(delay * 1000);
});


Then("find task with subject {string} and assign to user {string}", async function (taskSubject, assignee) {

	var task = await searchTaskBySubject(this.processInstanceKey, taskSubject);
	console.log('RESPONSE:', "searchTaskBySubject", task)
	expect(task).to.be.a('object');
	var resp = await tasklist.assignTask({
		taskId: task.id,
		assignee
	});
	console.log('RESPONSE:', "assignTask", resp)
	task = await searchTaskBySubject(this.processInstanceKey, taskSubject);
	console.log('RESPONSE:', "searchTaskBySubject", task)
	expect(task.assignee).to.equal(assignee);
});

Then("find task with subject {string} and complete task with {string}", async function (taskSubject, data) {
	var task = await searchTaskBySubject(this.processInstanceKey, taskSubject);
	console.log('RESPONSE:', "searchTaskBySubject", task)
	expect(task).to.be.a('object');
	var resp = await tasklist.completeTask(task.id, JSON.parse(data));
	console.log('RESPONSE:', "completeTask", resp);
	expect(resp.taskState).to.equal('COMPLETED');

})

Then("verify is process status is {string}", async function (status) {
   var process ={};
	for(var i=0;i<20;i++){
		var process = await operate.getProcessInstance(this.processInstanceKey);
		console.log('RESPONSE:', "getProcessInstance", process);
		if(process.state == status){
			break;
		}else{
			await sleep(1000);
		}
	}
	
	expect(process.state).to.equal(status);

})


Given("delete all process instances with status {string}", { timeout: 600 * 1000 }, async function (status) {
	var instances = await operate.searchProcessInstances({
		filter: {
			state: status
		},
		size: 1000
	});
	if (instances.items.length > 0) {
		for (var i = 0; i < instances.items.length; i++) {
			var id = instances.items[i].key;
			await operate.deleteProcessInstance(id);
			console.log("DELETED:", id);
		}
	}

});

Given("cancel all active instances", async function name() {
	var instances = await operate.searchProcessInstances({
		filter: {
			state: 'ACTIVE'
		},
		size: 1000
	});
	if (instances.items.length > 0) {
		for (var i = 0; i < instances.items.length; i++) {
			var id = instances.items[i].key;
			await zeebe.cancelProcessInstance(id);
			console.log("CANCELLED:", id);
		}
	}
});

Given("get process instance details {string}", async function (processInstanceKey) {
	var instances = await operate.searchProcessInstances({
		filter: {
			key: processInstanceKey
		},
		size: 1000
	});
	console.log(instances);
})