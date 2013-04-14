
### Create your own Stem Application

#### [Chapter One] Introduce
<p>Create a folder named Mandicelogic, and make sure you have following files or folders:</p>
 - Run
 - node_modules folder
 - Mandicelogic-${PROJECT_NAME}.conf
 - package.json

Use zip to compress Mandicelogic folder. Please rename this compress file as Mandicelogic-${PROJECT_NAME}.zip.

#### [Chapter Two] Core Component
##### 1) Run
A script file to describe how to execute your app.

Example with node.js:

	#!/bin/bash 
	node app.js 
	
Example with node-webkit:

	#!/bin/bash 
	nw .

##### 2) node_modules folder
Please put all node_module you need into this folder.
##### 3) Mandicelogic-${PROJECT_NAME}.conf
You will have a developer ID if you register from our website, and plesae put your develop ID into this file.
##### 4) package.json
Create a new field called Middleware in package.json, the stem OS will check at least foure flags to determine how to run the stem application.
#####[Note] a picture to show the relationship of aufs and rootfs.
 - arch: x86 or ARM.
 - signature: Program ID. Please ask The Mandice contributors for your program ID.
 - portable: Determine how to run the stem application.
   - false: Run the Stem application in the AUFS mode.
   - true: Install this Stem application into Stem OS and the application will not disappear. (Coming soon!)
 - Install: Install the debian package file into system. (Coming soon!)

