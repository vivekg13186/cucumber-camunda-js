Feature: Demo
    Feature Description

    Background: Before start
        Given deploy bpmn file "./bpmn/SimpleApproval.bpmn"
        Given cancel all active instances
        Given delete all process instances with status 'COMPLETED'
        Given delete all process instances with status 'CANCELED'
     

    Example:  STP path
        Given start process with input '{"amount" :3000 }' using process id 'SimpleApprovalProcess'
        Then  wait 10 sec 
        Then  find task with subject "Review Task" and assign to user "vivek"
        Then  find task with subject "Review Task" and complete task with '{"status" : "approved"}'
        Then  wait 10 sec
        Then  verify is process status is "COMPLETED"
    
    Example:  Non STP path
        Given start process with input '{"amount" :35000 }' using process id 'SimpleApprovalProcess'
        Then  wait 10 sec 
        Then  find task with subject "Review Task" and assign to user "vivek"
        Then  find task with subject "Review Task" and complete task with '{"status" : "approved"}'
        Then  wait 10 sec 
        Then  find task with subject "Approval Task" and assign to user "vivek2"
        Then  find task with subject "Approval Task" and complete task with '{"status" : "approved"}'
        Then  wait 10 sec
        Then  verify is process status is "COMPLETED"