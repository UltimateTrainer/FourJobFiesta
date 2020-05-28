window.onload = init;
var wind="";
var water="";
var fire="";
var earth="";

var startup = true; //flag for if looping functions are on their first pass or not
function init()
{
	var windName = $('#windJob');
	var waterName = $('#waterJob');
	var fireName = $('#fireJob');
	var earthName = $('#earthJob');
	setInterval(function(){picture();},50);
	function picture()
	{
		
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
			
			TweenMax.to(windName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			wind=$('#windJob').text();
			console.log(wind);
			switch(wind)
			{
				case "":
					$('#windIMG').css('opacity', 0);
					break;
				//wind jobs
				case "knight":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Wind/Bartz/knight.png');
					
					}});
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					break;
				case "monk":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Wind/Bartz/monk.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "thief":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Wind/Bartz/thief.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "black mage":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Wind/Bartz/blackmage.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "white mage":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Wind/Bartz/whitemage.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Water jobs
				case "berserker":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Water/Bartz/berserker.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mystic knight":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Water/Bartz/mysticknight.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "time mage":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Water/Bartz/timemage.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "summoner":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Water/Bartz/summoner.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mimic":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Water/Bartz/mimic.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "red mage":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Water/Bartz/redmage.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Fire jobs
				case "bard":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Fire/Bartz/bard.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "geomancer":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Fire/Bartz/geomancer.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "hunter":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Fire/Bartz/hunter.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "ninja":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Fire/Bartz/ninja.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "trainer":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Fire/Bartz/trainer.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Earth jobs
				case "chemist":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Earth/Bartz/chemist.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "dancer":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Earth/Bartz/dancer.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "lancer":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Earth/Bartz/lancer.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "samurai":
					TweenMax.to($('#windIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#windIMG').attr('src','img/Earth/Bartz/samurai.png');
					TweenMax.to('#windIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				
			}
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
			
			TweenMax.to(waterName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			water=$('#waterJob').text();
			console.log(water);
			switch(water)
			{
				case "":
					$('#waterIMG').css('opacity', 0);
					break;
				//wind jobs
				case "knight":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Wind/Lenna/knight.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "monk":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Wind/Lenna/monk.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "thief":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Wind/Lenna/thief.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "black mage":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Wind/Lenna/blackmage.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "white mage":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Wind/Lenna/whitemage.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Water jobs
				case "berserker":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Water/Lenna/berserker.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mystic knight":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Water/Lenna/mysticknight.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "time mage":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Water/Lenna/timemage.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "summoner":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Water/Lenna/summoner.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mimic":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Water/Lenna/mimic.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "red mage":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Water/Lenna/redmage.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Fire jobs
				case "bard":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Fire/Lenna/bard.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "geomancer":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Fire/Lenna/geomancer.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "hunter":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Fire/Lenna/hunter.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "ninja":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Fire/Lenna/ninja.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "trainer":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Fire/Lenna/trainer.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Earth jobs
				case "chemist":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Earth/Lenna/chemist.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "dancer":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Earth/Lenna/dancer.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "lancer":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Earth/Lenna/lancer.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "samurai":
					TweenMax.to($('#waterIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#waterIMG').attr('src','img/Earth/Lenna/samurai.png');
					TweenMax.to('#waterIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
			}
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
			
			TweenMax.to(fireName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			fire=$('#fireJob').text();
			console.log(fire);
			switch(fire)
			{
				case "":
					$('#fireIMG').css('opacity', 0);
					break;
				case "knight":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Wind/Faris/knight.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "monk":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Wind/Faris/monk.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "thief":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Wind/Faris/thief.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "black mage":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Wind/Faris/blackmage.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "white mage":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Wind/Faris/whitemage.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Water jobs
				case "berserker":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Water/Faris/berserker.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mystic knight":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Water/Faris/mysticknight.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "time mage":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Water/Faris/timemage.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "summoner":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Water/Faris/summoner.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mimic":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Water/Faris/mimic.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "red mage":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Water/Bartz/redmage.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Fire jobs
				case "bard":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Fire/Faris/bard.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "geomancer":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Fire/Faris/geomancer.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "hunter":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Fire/Faris/hunter.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "ninja":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Fire/Faris/ninja.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "trainer":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Fire/Faris/trainer.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Earth jobs
				case "chemist":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Earth/Faris/chemist.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "dancer":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Earth/Faris/dancer.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "lancer":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Earth/Faris/lancer.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "samurai":
					TweenMax.to($('#fireIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#fireIMG').attr('src','img/Earth/Faris/samurai.png');
					TweenMax.to('#fireIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
			}
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
			
			TweenMax.to(earthName,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
			}})
			earth=$('#earthJob').text();
			console.log(earth);
			switch(earth)
			{
				case "":
					$('#earthIMG').css('opacity', 0);
					break;
				case "knight":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Wind/Krile/knight.png');
					
					}});
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					break;
				case "monk":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Wind/Krile/monk.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "thief":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Wind/Krile/thief.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "black mage":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Wind/Krile/blackmage.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "white mage":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Wind/Krile/whitemage.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Water jobs
				case "berserker":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Water/Krile/berserker.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mystic knight":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Water/Krile/mysticknight.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "time mage":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Water/Krile/timemage.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "summoner":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Water/Krile/summoner.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "mimic":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Water/Krile/mimic.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "red mage":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Water/Krile/redmage.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Fire jobs
				case "bard":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Fire/Krile/bard.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "geomancer":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Fire/Krile/geomancer.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "hunter":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Fire/Krile/hunter.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "ninja":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Fire/Krile/ninja.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "trainer":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Fire/Krile/trainer.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				//Earth jobs
				case "chemist":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Earth/Krile/chemist.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "dancer":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Earth/Krile/dancer.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "lancer":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Earth/Krile/lancer.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
				case "samurai":
					TweenMax.to($('#earthIMG'),.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$('#earthIMG').attr('src','img/Earth/Krile/samurai.png');
					TweenMax.to('#earthIMG',.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
					}});
					break;
			}
		}
		
	}
	setTimeout(picture, 1000);
	
}