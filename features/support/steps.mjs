import { Camunda8 } from "@camunda8/sdk";

import { When, Then, Given } from ('@cucumber/cucumber');

const c8 = new Camunda8()
const zeebe = c8.getZeebeGrpcApiClient()
const zeebeRest = c8.getZeebeRestClient()
const operate = c8.getOperateApiClient()
const optimize = c8.getOptimizeApiClient()
const tasklist = c8.getTasklistApiClient()
const modeler = c8.getModelerApiClient()
const admin = c8.getAdminApiClient()

Given("connect to camunda server {string}", async function () {
	
});

Given("deploy bpmn process {string}", function () {
	zeebe.
});

Given("connected to camunda server", function () {

});

Given("start new process with name {string} and version {string}", function (processName,input) {
	var self = this;
	zbc.createProcessInstanceWithResult({
		bpmnProcessId: processName,
		variables: JSON.parse(input)
	})
		.then(function (data) {
			console.log(data)
		})
});

Then("update task with subject {string} and data {string}", function () {

});

Then("check the status of instance with subject {string} is {string}", function () {

});

When('setup up camunda self managed', function () {
	this.c8 = new Camunda8({
		ZEEBE_GRPC_ADDRESS: 'localhost:26500',
		ZEEBE_REST_ADDRESS: 'http://localhost:8080',
		ZEEBE_CLIENT_ID: 'zeebe',
		ZEEBE_CLIENT_SECRET: 'zecret',
		CAMUNDA_OAUTH_STRATEGY: 'OAUTH',
		CAMUNDA_OAUTH_URL:
			'http://localhost:18080/auth/realms/camunda-platform/protocol/openid-connect/token',
		CAMUNDA_TASKLIST_BASE_URL: 'http://localhost:8082',
		CAMUNDA_OPERATE_BASE_URL: 'http://localhost:8081',
		CAMUNDA_OPTIMIZE_BASE_URL: 'http://localhost:8083',
		CAMUNDA_MODELER_BASE_URL: 'http://localhost:8070/api',
		CAMUNDA_TENANT_ID: '', // We can override values in the env by passing an empty string value
		CAMUNDA_SECURE_CONNECTION: false,
	});

});

When('setup camunda SaaS', function () {
	this.c8 = new Camunda8({
		ZEEBE_GRPC_ADDRESS: '5c34c0a7-7f29-4424-8414-125615f7a9b9.syd-1.zeebe.camunda.io:443',
		ZEEBE_REST_ADDRESS: 'https://syd-1.zeebe.camunda.io/5c34c0a7-7f29-4424-8414-125615f7a9b9',
		ZEEBE_CLIENT_ID: 'yvvURO9TmBnP3zx4Xd8Ho6apgeiZTjn6',
		ZEEBE_CLIENT_SECRET: 'iJJu-SHgUtuJTTAMnMLdcb8WGF8s2mHfXhXutEwe8eSbLXn98vUpoxtuLk5uG0en',
		CAMUNDA_CREDENTIALS_SCOPES: 'Zeebe,Tasklist,Operate,Optimize',
		CAMUNDA_TASKLIST_BASE_URL: 'https://syd-1.tasklist.camunda.io/5c34c0a7-7f29-4424-8414-125615f7a9b9',
		CAMUNDA_OPTIMIZE_BASE_URL: 'https://syd-1.optimize.camunda.io/5c34c0a7-7f29-4424-8414-125615f7a9b9',
		CAMUNDA_OPERATE_BASE_URL: 'https://syd-1.operate.camunda.io/5c34c0a7-7f29-4424-8414-125615f7a9b9',
		CAMUNDA_OAUTH_URL: 'https://login.cloud.camunda.io/oauth/token',
		CAMUNDA_AUTH_STRATEGY: 'OAUTH',
		CAMUNDA_SECURE_CONNECTION: true,
		CAMUNDA_CONSOLE_CLIENT_ID: 'e-JdgKfJy9hHSXzi',
		CAMUNDA_CONSOLE_CLIENT_SECRET: 'DT8Pe-ANC6e3Je_ptLyzZvBNS0aFwaIV',
		CAMUNDA_CONSOLE_BASE_URL: 'https://api.cloud.camunda.io',
		CAMUNDA_CONSOLE_OAUTH_AUDIENCE: 'api.cloud.camunda.io',
	})
})

When('say hello', function () {
	console.log('say hello');
})
