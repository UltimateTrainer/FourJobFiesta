local firstName=""
local firstJob=""
local secondName=""
local secondJob=""
local thirdName=" "
local thirdJob=""
local fourthName=""
local fourthJob=""
local file
local temp=" "
local fileBuffer=""
local firstNameByte=0x7E0500
local secondNameByte=0x7E0550
local thirdNameByte=0x7E05A0
local fourthNameByte=0x7E05F0
local firstJobByte=0x7E0501
local secondJobByte=0x7E0551
local thirdJobByte=0x7E05A1
local fourthJobByte=0x7E05F1
local lunajson = require "lunajson"

--name jump table
name = {
  [0] = "Bartz",
  [128] = "Bartz" ,
  [9] = "Lenna" ,
  [137] = "Lenna" ,
  [2] = "Galuf" ,
  [130] = "Galuf" ,
  [11] = "Faris" ,
  [139] = "Faris" ,
  [12] = "Krile" ,
  [140] = "Krile" ,
  [64] = "Null" ,
  [66] = "Null" ,
  [73] = "Null" ,
  [75] = "Null" ,
  [76] = "Null" ,
  
}

--job jump table
job = {
  [0] = "knight",
  [1] = "monk",
  [2] = "thief",
  [3] = "dragoon",
  [4] = "ninja",
  [5] = "samurai",
  [6] = "berserker",
  [7] = "hunter",
  [8] = "mystic knight",
  [9] = "white mage",
  [10] = "black mage",
  [11] = "time mage",
  [12] = "summoner",
  [13] = "blue mage",
  [14] = "red mage",
  [15] = "beast master",
  [16] = "chemist",
  [17] = "geomancer",
  [18] = "bard",
  [19] = "dancer",
  [20] = "mimic",
  [21] = "freelancer",
}

function readJSON()
	file =io.open("FJF.json", "r")
	io.input(file)
	temp=lunajson.decode(io.read())
	io.close(file)
end

function writeJSON()
	file =io.open("FJF.json", "w")
	fileBuffer=lunajson.encode(temp)
	print(fileBuffer)
	file:write(fileBuffer)
	io.close(file)
end

function checkChange(position, varType, n, b)
	if varType=="name" then
		if n~=name[memory.readbyte(b)] then
			n=name[memory.readbyte(b)]
			readJSON()
			temp[position][varType]=n
			writeJSON()
		end
	end
	if varType=="job" then
		if n~=job[memory.readbyte(b)]then
			n=job[memory.readbyte(b)]
			readJSON()
			temp[position][varType]=n
			writeJSON()
		end
	end
	return n
end
while true do
	--read from memory and sets name variables and writes to file if its properties are changed
	firstName=checkChange("first", "name", firstName, firstNameByte)
	secondName=checkChange("second", "name", secondName, secondNameByte)
	thirdName=checkChange("third", "name", thirdName, thirdNameByte)
	fourthName=checkChange("fourth", "name", fourthName, fourthNameByte)
	
	
	--read from memory and sets job variables and writes to file if its properties are changed
	firstJob=checkChange("first", "job", firstJob, firstJobByte)
	secondJob=checkChange("second", "job", secondJob, secondJobByte)
	thirdJob=checkChange("third", "job", thirdJob, thirdJobByte)
	fourthJob=checkChange("fourth", "job", fourthJob, fourthJobByte)
	emu.frameadvance()
end