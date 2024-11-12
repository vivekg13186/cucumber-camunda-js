## Camunda Cucumber

A testing framework for Camunda.  

## Features

- Deploy **.bpmn** files
- Start BPMN process with process id
- Assign task to users
- Complete user task
- Check process status
- Delete all instances
- Cancel all task
- Veriy instance details
- Deploy **.dmn** files
- Evaluate decision tables
- Evaluate descision tables with excel file inputs
- Support cloud installations
- Support local docker installations
- Support local installations without docker


## Quick start

Start camunda docker 

Clone the repo
 ```bash
 git  clone --depth 1  https://github.com/vivekg13186/cucumber-camunda-js.git
 ```
Install project
```bash
npm install
```
Run test
 ```bash
npm run test-bpmn
npm run test-dmn
```

## Documentations
- [BPMN process setup](/wiki/ProcessSetup.md)
- [Enviroment setup](/wiki/Enviroment.md)
- [BPMN Steps documentation](/wiki/BPMSteps.md)
- [DMN Steps documentation](/wiki/DMNSteps.md)
- [VS code setup](/wiki/Vscode.md)

 
## Acknowledgements

Libraries  used in this projects.
 - [camunda 8 node js sdk](https://github.com/camunda/camunda-8-js-sdk)
 - [cucumber js github](https://github.com/cucumber/cucumber-js/tree/main)
 - [cucumber js docs](https://cucumber.io/)
 - [camunda api doc](https://camunda.github.io/camunda-8-js-sdk/)
 - [dotenv library](https://www.npmjs.com/package/dotenv)
 - [chai js](https://www.chaijs.com/) 