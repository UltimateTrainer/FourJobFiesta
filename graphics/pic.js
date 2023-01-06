window.onload = init;
var wind="";
var water="";
var fire="";
var earth="";

var firstName="Bartz";
var secondName="Lenna";
var thirdName="Faris";
var fourthName="Krile";

var firstJob="";
var secondJob="";
var thirdJob="";
var fourthJob="";

var startup = true; //flag for if looping functions are on their first pass or not
const JSONReplicant = nodecg.Replicant('useJSON');
var useJSON=false;
JSONReplicant.on('change', (newValue, oldValue) => {
		useJSON=JSONReplicant.value.useJSON;
});
function findJSON(){
	$.getJSON("RAM/FJF.json", function(json) {
		firstName=json.first.name;
		secondName=json.second.name;
		thirdName=json.third.name;
		fourthName=json.fourth.name;
		windJobReplicant.value=json.first.job;
		waterJobReplicant.value=json.second.job;
		fireJobReplicant.value=json.third.job;
		earthJobReplicant.value=json.fourth.job;
	});
}
function init()
{
	var windName = $('#windJob');
	var waterName = $('#waterJob');
	var fireName = $('#fireJob');
	var earthName = $('#earthJob');
	
	var windClass = $('#windIMG');
	var waterClass = $('#waterIMG');
	var fireClass = $('#fireIMG');
	var earthClass = $('#earthIMG');
	
	setInterval(function(){picture();},50);
	
	function characterPic(job, elementClass, name)
	{
		switch(job)
			{
				case "":
					elementClass.css('opacity', 0);
					break;
				//wind jobs
				case "freelancer":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Wind/'+name+'/freelancer.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "knight":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Wind/'+name+'/knight.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "monk":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Wind/'+name+'/monk.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "thief":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Wind/'+name+'/thief.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "black mage":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Wind/'+name+'/blackmage.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "white mage":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Wind/'+name+'/whitemage.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Water jobs
				case "berserker":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Water/'+name+'/berserker.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mystic knight":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Water/'+name+'/mysticknight.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "time mage":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Water/'+name+'/timemage.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "summoner":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Water/'+name+'/summoner.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mimic":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Water/'+name+'/mimic.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "red mage":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Water/'+name+'/redmage.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Fire jobs
				case "bard":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Fire/'+name+'/bard.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "geomancer":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Fire/'+name+'/geomancer.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "hunter":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Fire/'+name+'/hunter.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "ninja":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Fire/'+name+'/ninja.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "beast master":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Fire/'+name+'/beastmaster.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Earth jobs
				case "chemist":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Earth/'+name+'/chemist.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "dancer":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Earth/'+name+'/dancer.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "dragoon":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Earth/'+name+'/dragoon.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "samurai":
					TweenMax.to(elementClass,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:1,onComplete:function(){
					elementClass.attr('src','img/Earth/'+name+'/samurai.png');
					TweenMax.to(elementClass,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				
			}
	}
	windJobReplicant.on('change', (newValue, oldValue) => {
		// The value of the Replicant has changed somewhere in NodeCG,
		// this could be another dashboard panel, a server initiated change,
		// or the doing of another user accessing your dashboard panel.
		
		windJob.innerText = `${newValue}`;
		});
	
	waterJobReplicant.on('change', (newValue, oldValue) => {
		waterJob.innerText = `${newValue}`;
		});

	fireJobReplicant.on('change', (newValue, oldValue) => {
		fireJob.innerText = `${newValue}`;
		});
		
	earthJobReplicant.on('change', (newValue, oldValue) => {
		earthJob.innerText = `${newValue}`;
		
		});
		function picture()
	{
		if(useJSON)
		{
			findJSON();
		}
		if($('#windJob').text()!=wind)
		{
			
			TweenMax.to(windName,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
			
			
			windName.each(function(i, windName)
			{
				$('#windJob').css('font-size', '20px');
				while(windName.scrollWidth > windName.offsetWidth || windName.scrollHeight > windName.offsetHeight)
				{
					var newFontSize = (parseFloat($(windName).css('font-size').slice(0,-2)) * .95) + 'px';
					$('#windJob').css('font-size', newFontSize);
				}
			});
			wind=$('#windJob').text();
			characterPic(wind, windClass,firstName);
			TweenMax.to(windName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			
			
			
		}
		
		if($('#waterJob').text()!=water)
		{
			
			TweenMax.to(waterName,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
			
			
			waterName.each(function(i, waterName)
			{
				$('#waterJob').css('font-size', '20px');
				while(waterName.scrollWidth > waterName.offsetWidth || waterName.scrollHeight > waterName.offsetHeight)
				{
					var newFontSize = (parseFloat($(waterName).css('font-size').slice(0,-2)) * .95) + 'px';
					$('#waterJob').css('font-size', newFontSize);
				}
			});
			water=$('#waterJob').text();
			characterPic(water, waterClass,secondName);
			TweenMax.to(waterName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			
		}
		
		if($('#fireJob').text()!=fire)
		{
			
			TweenMax.to(fireName,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
			
			
			fireName.each(function(i, fireName)
			{
				$('#fireJob').css('font-size', '20px');
				while(fireName.scrollWidth > fireName.offsetWidth || fireName.scrollHeight > fireName.offsetHeight)
				{
					var newFontSize = (parseFloat($(fireName).css('font-size').slice(0,-2)) * .95) + 'px';
					$('#fireJob').css('font-size', newFontSize);
				}
			});
			fire=$('#fireJob').text();
			characterPic(fire, fireClass,thirdName);
			TweenMax.to(fireName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			
		}
		
		if($('#earthJob').text()!=earth)
		{
			
			TweenMax.to(earthName,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
			
			
			earthName.each(function(i, earthName)
			{
				$('#earthJob').css('font-size', '20px');
				while(earthName.scrollWidth > earthName.offsetWidth || earthName.scrollHeight > earthName.offsetHeight)
				{
					var newFontSize = (parseFloat($(earthName).css('font-size').slice(0,-2)) * .95) + 'px';
					$('#earthJob').css('font-size', newFontSize);
				}
			});
			earth=$('#earthJob').text();
			characterPic(earth, earthClass,fourthName);
			TweenMax.to(earthName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			
		}
		
	}
	setTimeout(picture, 1000);
	
}