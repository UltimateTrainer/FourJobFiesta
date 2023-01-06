# FourJobFiesta
A tracker/overlay bundle for NodeCG to use in Four Job Fiesta or regularly streaming Final Fantasy V to show your current party and their jobs

## Installation
- Run the nodecg.bat and when its fully loaded go on localhost:9090 and you can adjust the classes manually via the dashboard or turn on the autotracker. 
- On the top right bar is the graphics section that gives multiple layouts to use in livestreaming software. 
- Copy the url to a browser source and adjust the resolution listed with each layout.

## Autotracker
For use with the Snes9x rerecording version in order to use lua scripting to grab the memory addresses in RAM where the game stores characters and jobs and displays it with the NodeCG framework.

### Usage
- Download the Snes9x rerecording version [here](https://github.com/gocha/snes9x-rr/releases/tag/1.60).
- On the localhost:9090 dashboard click the "Use Autotracker" checkbox and submit.
- Open the exe and load Final Fantasy V.
- Once it is loaded, head to File>Lua Scripting>New Lua Script Window...
- Browse to the extracted folder\nodecg\bundles\FourJobFiesta\graphics\RAM\RAMreader.lua
- Click run.

## Credits
Grabbed the sprites from Final Fantasy Kingdom
