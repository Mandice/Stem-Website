
### 開發屬於你自己的Stem Application

#### [第一章節] 介紹
<p>建立一個資料夾Mandicelogic, 並且確定有以下的資料夾或檔案:</p>
 - Run
 - program 資料夾
 - Mandicelogic-${PROJECT_NAME}.conf

進入到Mandicelogic的資料夾中並把所有檔案壓縮成Mandicelogic-${PROJECT_NAME}.zip檔。

#### [第二章節] 主要元件介紹
##### 1) Run
用來執行你開發的nodeJS應用軟體。

範例一: 使用node.js:

	#!/bin/bash 
	node program/app.js 
	
範例二: 使用node-webkit:

	#!/bin/bash 
	nw program

##### 2) program 資料夾
把你所開發的nodeJS的程式碼全都放到這資料夾底下。<p></p>
備註: 由於Stem OS不允許執行"npm install", 所以請把你所有的nodeJS moduule預先放到program/node_modules資料夾中。
##### 3) Mandicelogic-${PROJECT_NAME}.conf
Stem OS會檢查此檔案中的設定來決定該怎麼執行Stem Application。
#####[Note] a picture to show the relationship of aufs and rootfs。
 - arch: x86 或 ARM。
 - signature: Stem application的程式執行ID. 如果沒有請向Mandice團隊建立屬於你的program ID。 <p></p>
   如果你沒有Signature, 請使用DevOnly的設定, 並且不要把Signature設定寫到Mandicelogic-${PROJECT_NAME}.conf檔案中。 <p></p>
 - portable: 用來判斷該如何執行Stem Application。
   - true: 在AUFS模式執行Stem Application。
   - false: 安裝Stem application到Stem OS中, 並且Stem Application不會因為USB隨身碟plug out而移除。 <p></p>
 - DevOnly: 是否在開發者模式執行Stem Application。
   - true: Stem OS會產生一組暫時的signature來執行Stem Application。
   - false: Stem OS不會使用開發者模式。
