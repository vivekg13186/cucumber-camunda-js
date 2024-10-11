Feature: Testing hello world process
    This is a example to show how to use cucumber camunda testing 

    Background: Check camunda is up and process in deployed
        Given  connect to camunda server
        """
        env=self
        ajsd=ajsdasd
        """
        Given deploy bpmn process "asd.bpmn"
       
    Rule: Happy path for hello world process flow

        Example: Process with auto approval step
            Given connected to camunda server
            Given start new process with name "" and version ""
            Then assign task with subject {string} to user {string}
            Then assign task with subject {string} to group {string}
            Then check task with subject {string} is assigned to user {string}
            Then check task with subject {string} is assigned to group {string}
            Then update task with subject {string} and data {string}
            Then close task with subject "review approval"
            Then check the status of instance with subject "asdsad" is "Closed"


        Example: Process with manual approval step
            Given connected to camunda server
            Given start new process with name "" and version ""
            Then update task with subject {string} and data {string}
            Then update task with subject {string} and data {string}
            Then close task with subject "review approval"
            Then check the status of instance with subject "asdsad" is "Closed"
