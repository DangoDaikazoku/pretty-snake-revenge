// JavaScript Document

var highscore;

var ctx;
var canvas;

var ctx2;
var canvas2;

var ctx3;
var canvas3;

var ctx4;
var canvas4;

var back_canvas;
var foreground;
var refrence;
var foodtag;
var comment;
var container1;
var container2;
var spark1;
var spark2;
var spark3;
var trumpet;

var intervalId;
var intervalId2;
var intervalId3;
var intervalId4;
var angi;
var onna_1;
var onna_2;
var onna_3;
var story;
var static_comment;

/////////////////////////////////////////////////////

var thickness=7;
var size =40;
var off=5 ;
var minimum=20;
var counter=0;
var ticker=0;
var combobreaker=340;
var foodsize=20;
var backmusic;
var lifetime=30;

/*
function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]
 if (window.ActiveXObject){ 
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
   }
  }
 }
 else if (window.XMLHttpRequest) 
  return new XMLHttpRequest()
 else
  return false
}

*/

function submitScore(){
/*
var xhr=new ajaxRequest();
		
xhr.onreadystatechange=function(){
 if (xhr.readyState==4){
 
  if (xhr.status==200 ){
	 
		var response=xhr.responseText;
	 	
		alett(response);
		
	 }
  else{
   alert("An error has occured in registration process. "+xhr.status)
  }
 }
}


xhr.open("POST", "localhost/ssedtu/save.php?name="+name+"&sex="+Sex+"&age="+age+"&email="+email+"&InterestedIn="+interestedIn+"&password="+password+"&fileName="+fileName, true);
xhr.send(null);

*/
	}



function story_play(){

	window.addEventListener('keydown',function(){checkkey(event)},false);
	
	backmusic=document.getElementById("backmusic");	
	backmusic.volume=0.2
				
		
	story=document.getElementById('story');
	var story_ctx=story.getContext('2d');
	
document.getElementById('story_div').addEventListener('click',beginshow,false);
			
	
for(var i=1;i<5;i++)
{	
		if(i==1)
			story_ctx.strokeStyle='rgba(0, 153, 204,0.4)';
		else if(i==2)
			story_ctx.strokeStyle='rgba(204, 51, 0,0.4)';
		else if(i==3)
			story_ctx.strokeStyle='rgba(51, 153, 51,0.4)';	
		else if(i==4)
			story_ctx.strokeStyle='rgba(255, 255, 0,0.4)';
		
		story_ctx.lineWidth = 3;
	
	with(story_ctx){
		
	
		  beginPath();
		  moveTo(60*i,10);
		  lineTo(60*i,70);
	      stroke();	
		  closePath();

		
	for(var z=1;z<5;z++){
		
		 beginPath();
		 arc(60*i,15*z,0.5, 0, Math.PI*2, true);
		 stroke();	
		 closePath();
	
		}
	
	  beginPath();
	  
	  lineWidth = 3;
		
		strokeStyle=snake_head_color2;
		  arc(60*i,10,3, 0, Math.PI*2, true);
		  stroke();
	  closePath();
		
		strokeStyle='rgba(0,0,0,0.5)';
		  beginPath();
		  arc(60*i-4,10,1, 0, Math.PI*2, true);
		  arc(60*i+4,10,1, 0, Math.PI*2, true);
		  stroke();	
		  closePath();
	
	
	
	}
}
	
	
document.getElementById('story_text_1').style.opacity=1;
onna_1=window.setTimeout(function(){
document.getElementById('story_text_1').style.opacity=0;
document.getElementById('story_text_2').style.opacity=1;

onna_2=window.setTimeout(function(){
document.getElementById('story_text_2').style.opacity=0;
document.getElementById('story_text_3').style.opacity=1;

onna_3=window.setTimeout(function(){
story_div.style.visibility="hidden";
beginshow();
},7000);


},7000);

},7000);


	}



function beginshow(){
	
intervalId3 = setInterval(backgroundmove,25);	
	
	document.getElementById('story_div').style.visibility="hidden";
	story.style.visibility="hidden";
	window.clearTimeout(onna_1);
	window.clearTimeout(onna_2);
	window.clearTimeout(onna_3);
	
	
	
	window.addEventListener('resize',positiongame,false);
		
	container1=document.getElementById("container");
	container2=document.getElementById("container2");

	back_canvas=document.getElementById('back_canvas');		
	static_comment=document.getElementById('static_comment');

	highscore=localStorage["High"]*1;
	stored_length=localStorage["leng"]*1;
	 
	 if(highscore)
	{
		document.getElementById('high_score').innerHTML="High Score : "+highscore;
		}
	if(stored_length)
	{
		document.getElementById('high_score').innerHTML+=" &nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; &nbsp; Longest : "+stored_length;
		}
		
		
	back_ctx=back_canvas.getContext('2d');
	back_ctx.fillStyle="white";
	
	tut_tag=document.getElementById('tut_tag');
	tut_tag2=document.getElementById('tut_tag2');
				
	document.getElementById('start').addEventListener('click',begingame,false);

	document.getElementById('tutorial').addEventListener('click',function(){tutorialfunc(1)},false);
	document.getElementById('multi').addEventListener('click',function(){alert('multiplayer is not available in this version')},false);
	document.getElementById('immortal').addEventListener('click',immortalgame,false);
	document.getElementById('intro').style.opacity=1.0;
	document.getElementById('settingsbut').addEventListener('click',showsettings,false);	
	document.getElementById('close').addEventListener('click',hidesettings,false);
	document.getElementById('thickness_new').addEventListener('keyup',function(){modifysnake(document.getElementById('thickness_new').value)},false);
	
	document.getElementById('food_but_1').addEventListener('click',function(){changefood(1)},false);
	document.getElementById('food_but_2').addEventListener('click',function(){changefood(2)},false);
	document.getElementById('food_but_3').addEventListener('click',function(){changefood(3)},false);
		
	
	document.getElementById('skin_but_1').addEventListener('click',function(){modifysnakeskin(1)},false);
	document.getElementById('skin_but_2').addEventListener('click',function(){modifysnakeskin(2)},false);
	document.getElementById('skin_but_3').addEventListener('click',function(){modifysnakeskin(3)},false);
	document.getElementById('skin_but_4').addEventListener('click',function(){modifysnakeskin(4)},false);
	document.getElementById('skin_but_5').addEventListener('click',function(){modifysnakeskin(5)},false);
	
	
	spark1=document.getElementById("musicbox1");	
	spark2=document.getElementById("musicbox2");	
	spark3=document.getElementById("musicbox3");	
	trumpet=document.getElementById('trumpet');
	
	trumpet.volume=0.2;
	spark1.volume=0.05;
	spark2.volume=0.05;
	spark3.volume=0.05;
;
	
	
	}
	
function tutorialfunc(step){

switch(step*1)
{
case 1:
tut_tag.innerHTML=" Try moving the mouse(cursor/pointer) arround. The snake will follow the mouse . . . (obviously) <br><br> If you stay put for a while your size will decrease gradually so 'resting' is not an option :) "
	tutorial=1;
	begingame();
break;


case 2:
tut_tag.innerHTML="OK ! Now we need to learn to take revenge on those who dare doubt the real beauty.<br> <br>These thingies are favourite toys of those doubting Thomases. Hit 'em to shatter them into oblivion.";

window.setTimeout(function(){
var nfood= new food(Math.random()*650+170,Math.random()*400+40,foodsize);
foodlist.push(nfood);
foodlist[0].animation();},3000);

break;

case 3:tut_tag.innerHTML="Good ! breaking these small thingies increase your size (don't ask why). Now we need to learn how to build up a combo. <br><br>Take down Four toys in quick succession to build up a combo multiplier.";
break;

case 4:
	tut_tag.innerHTML="Nice ! The beam from the hit point will continue till u have your combo multiplier so you can chain combos if you are fast enuf.<br> <br>Now u look all set, remember to not crash into your self  or the side walls, which will shorten your length. Try and increase ur size above 40"
	tut_tag2.innerHTML="Oh! and the size and other stuff are displayed here. ";

	tut_tag2.style.left=(canvas.offsetLeft+15)+"px";
	tut_tag2.style.top=(canvas.offsetTop+20)+"px";
	
	angi=window.setTimeout(function(){tut_tag2.style.opacity="0.8"},7000);
	break;
	
case 5: 
	clearTimeout(angi);
	tut_tag2.style.opacity="0"
	tut_tag.innerHTML="Combo multipliers help increase the size super quick<br><br>Alrite ! Now go and show those r-tards who is the 'SNAKE'";
	angi=window.setTimeout(function(){tut_tag.style.opacity="0"},5000);
	
	break;
defalt: alert	('tutorial expired');
}

}
function immortalgame(){
	
	mortal=0;
	begingame();
	}

function hidesettings()
{
	document.getElementById('settings').style.visibility='hidden';
	document.getElementById('panel').style.opacity=0;
	document.getElementById('panel').style.visibility='hidden';
	
	settings_visible=0;
	
	if(game_running)
	{
	canvas.style.visibility="visible";
	canvas3.style.visibility="visible";
	canvas2.style.visibility="visible";
	canvas4.style.visibility="visible";
	taberumono.style.visibility="visible";
	}
			
			
}

function showsettings(){
	document.getElementById('settings').style.visibility='visible'
	document.getElementById('panel').style.visibility='visible'
	document.getElementById('panel').style.opacity=0.8;
	
	settings_visible=1;
	
	if(game_running)
	{
	canvas.style.visibility="hidden";
	canvas3.style.visibility="hidden";
	canvas2.style.visibility="hidden";
	canvas4.style.visibility="hidden";
	taberumono.style.visibility="hidden";
	}
	
	
	
	}

function begingame() {
	
			refrence=document.getElementById("reference");
		 	comment=document.getElementById("comment");
			score=document.getElementById("scoreboard");
			taberumono=document.getElementById("food");
			foodtag=document.getElementById("foodtag");
			
			canvas = document.getElementById("canvas");
			ctx = canvas.getContext('2d');
			
			canvas2 = document.getElementById("canvas2");
			ctx2 = canvas2.getContext('2d');
			
			canvas3 = document.getElementById("canvas3");
			ctx3 = canvas3.getContext('2d');
			
			canvas4 = document.getElementById("canvas4");
			ctx4 = canvas4.getContext('2d');
			
			
			
			canvas.style.visibility="visible";
			canvas3.style.visibility="visible";
			canvas2.style.visibility="visible";
			canvas4.style.visibility="visible";
			reference.style.visibility="visible";
			
			refrence.style.opacity=0.8;
			
			document.getElementById('intro').style.opacity=0;
			
			taberumono.style.opacity="0.6";
			canvas4.style.cursor='crosshair';
			
			window.addEventListener('mousemove',updatepos,false);
			
			
			
			canvas.style.left=refrence.offsetLeft+"px";
			canvas2.style.left=canvas.offsetLeft+"px";
			canvas3.style.left=canvas.offsetLeft+"px";
			canvas4.style.left=canvas.offsetLeft+"px";
			score.style.left=(canvas.offsetLeft+10)+"px";
			score.style.top=(canvas.offsetTop)+"px";
			
			
			initialize();
			
			changetheme(1);
	
			game_running=1;
			
			
			clearInterval(intervalId3);
			
			
			intervalId = setInterval(mobilize, 7);
			intervalID4= setInterval(splashdraw,5);
			
			if(mortal)
			{
				intervalId2 = setInterval(superdraw,29);
				
				
			}
			//if(!mortal)
			//intervalId3 = setInterval(backgroundmove,371);
};	
	