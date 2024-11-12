# Setting up camunda enviroment for test

App uses node js [@camunda8/sdk](https://camunda.github.io/camunda-8-js-sdk/) library to call camunda api. 

The enviroment values are loaded from ***.env*** file you can find more details about dotenv [here](https://www.npmjs.com/package/dotenv)

If you use default docker setup provided by the camuda then the ***.env*** file in the repo works fine.

If you are using camunda cloud env refer ***saas.env*** for the values.


# Set up local zeebe (without docker)

Download latest version of zeebe from github [https://github.com/camunda/camunda/releases](https://github.com/camunda/camunda/releases)

Checkout the **README.md** file how to install elastic search locally

Run **.bat** files under **bin** folder to start server locally

