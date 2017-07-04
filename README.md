###Breif information about myCreighton project###

This project provides enterprise life cycle communication in between profiles(student,faculty and staff) and 
creighton university.

Streamline the amount of time students spend completing administrative tasks.

 Improve the overall student experience by:-
 
	1. eliminating unnecessary travel between administrative offices
	2. providing faster service for routine student actions
	3. providing expanded services 24/7

myCreighton project Goals:-

1. Remove barriers to Student success
2. Reduce process "friction"
3. Provide reminders/notifications,
4. automated assistance when possible
5. Enhance the student experience
6. Build a culture of “self-sevice” as an option
7. Build confident, independent men and women


###Getting Started project setup in your local machine###

There are two methods for getting started with myCreighton repository.

#### Incase you are Familiar with Git follow given below steps? #####
Checkout myCreighton repository, install dependencies and start the npm process with given below following steps:

```
	Step1:- Clone myCreighton repository code using following below commamd in git bash.

	> git clone -b Sprint-number gitolite@git.creighton.edu:myCreighton_app 
	  example: Sprint-7, Sprint-8 etc...

	Step2:- After succeesfully cloned myCreighton repository change directrory in myCreighton following below commamd.

	> cd myCreighton_app/

	Step3:- Open commamd prompt and change directory into cloned myCreighton project. Then run npm install for getting all 
			dependencies related to myCreighton project.

	> npm install

	Step4:- Wait until getting all dependencies,  Then run npm run OS_star_env for runing myCreighton application in local machine with dev environment and npm run starttest for running application with test environment. where we set NODE_ENV variable to test and dev respectively.

      #### For windows #####

	> npm run w_start_dev (For development environment)
	> npm run w_start_test (For test environment)
	> npm run w_start_prod (For production environment)

	 #### For Mac or linux #####

	> npm run m_start_dev (For development environment)
	> npm run m_start_test (For test environment)
	> npm run m_start_prod (For production environment)

	Step5: After server open any client browser and Click on below link.

	> Click myCreighton URL [here](http://localhost:8000/#/)

```

#### Run Unit Test Scripts #####

	Run unit test Scripts using npm test commamd. it is same to all eveironments.
    
    > npm test	

#### Build myCreighton project #####

	Build myCreighton project using below build script commamds to different operating systems like (windows, Mac, Linux) environment.
	After ran the below commands. it creates build folder in your myCreighton project folder with minified code after that we can copy the build folder into any  webservers like apache, nginx etc.

#### For windows #####

	> npm run w_build_dev (For development environment)
	> npm run w_build_test (For test environment)
	> npm run w_build_prod (For production environment)

 #### For Mac or linux #####

	> npm run build_dev (For development environment)
	> npm run build_test (For test environment)
	> npm run build_prod (For production environment)
    
	Then consume hosted appliucation url from client browsers like (chrome, IE, Mozilla Firfox). 
	Example:- Actully we have hosted project build folder in below dv1 and dev2 serers.

	>Click Here for dev1 server myCreighton URL [here](http://mycu-rundev1.creighton.edu/)
	>Click Here for dev2 server myCreighton URL [here](http://mycu-rundev2.creighton.edu/)