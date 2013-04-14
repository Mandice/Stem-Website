
### Create your own Stem Application

#### [Chapter One] Introduce
<p>Create a folder named Mandicelogic, and make sure you have following files or folders:</p>
 - Run
 - program folder
 - Mandicelogic-${PROJECT_NAME}.conf

Use zip to compress all files in Mandicelogic folder. Please rename this compress file as Mandicelogic-${PROJECT_NAME}.zip.

#### [Chapter Two] Core Component
##### 1) Run
A script file to describe how to execute your app.

Example with node.js:

	#!/bin/bash 
	node program/app.js 
	
Example with node-webkit:

	#!/bin/bash 
	nw program

##### 2) program folder
Please put your source code of nodeJS into this folder.<p></p>
Note: Becuase The Stem OS doesn't allow "npm install", so please put all your nodeJS module in program/node_modules folder in advance.
##### 3) Mandicelogic-${PROJECT_NAME}.conf
The Stem OS will check at least four flags to determine how to run the Stem application.
#####[Note] a picture to show the relationship of aufs and rootfs.
 - arch: x86 or ARM.
 - signature: program ID of Stem application. Please ask The Mandice contributors for your program ID. <p></p>
              If don't have signature, please use flag of DevOnly, and don't write the flag into Mandicelogic-${PROJECT_NAME}.conf file. <p></p>
 - portable: Determine how to run the Stem application.
   - true: Run the Stem application in the AUFS mode.
   - false: Install this Stem application into Stem OS and the application will not disappear. <p></p>
 - DevOnly: Tell Stem OS is run in develop mode or not.
   - true: The Stem OS will create a temporary signature for your program.
   - false: The Stem OS wouldn't run in develop mode.
