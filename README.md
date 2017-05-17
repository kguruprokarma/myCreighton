###Breif information about myCreighton project###
automation ---

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

	> git clone -b Development https://github.com/ProKarma-Inc/myCreighton.git 

	Step2:- After succeesfully cloned myCreighton repository change directrory in myCreighton following below commamd.

	> cd myCreighton/

	Step3:- Open commamd prompt and change directory into cloned myCreighton project. Then run npm install for getting all 
			dependencies related to myCreighton project.

	> npm install

	Step4:- Wait until getting all dependencies, Then run npm start for runing myCreighton application in local machine.

	> npm start

	Step5: After server open any client browser and Click on below link.

	>Click myCreighton URL [here](http://localhost:8000/#/)

```

#### Incase your Not Familiar with Git? #####
Click [here](http://github.com/ProKarma-Inc/myCreighton/archive/Development.zip):

	Click on above link it will download myCreighton project zip file and unzip, 
	then enter into myCreighton folder and follow given below steps.
```
	Step1:- Open commamd prompt and change directory into cloned myCreighton project. Then run npm install for getting all 
			dependencies related to myCreighton project.

	> npm install

	Step2:- Wait until getting all dependencies, Then run npm start for runing myCreighton application in local machine.

	> npm start

	Step3: After server open any client browser and Click on below link.

			Click myCreighton URL [here](http://localhost:8000/)
	
```

#### Run Unit Test Scripts #####

	Run unit test Scripts using npm test commamd.

    > npm test	

#### Build myCreighton project #####

	Build myCreighton project using npm run build commamd. Finally it creates build folder in myCreighton later 
	we will copy this folder into apache webserver.

	> npm run build