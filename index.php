<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Snake Revenge</title>

<link rel="stylesheet" href="style.css">

<script type="text/javascript" src="script/snake.js"></script>
<script type="text/javascript" src="script/customize.js"></script>
<script type="text/javascript" src="script/setup.js"></script> 
	
</head>

<body onLoad="story_play()"  >

<div id="settings"  style="visibility:hidden">
</div>

<div id="panel" style="color:#003; opacity:0; visibility:hidden">

<center><em>
: Settings :
</em></center>
<hr>
<br>
<div class="buton" id="skin_but_1" style="width:auto; left:40%; background:rgba(255, 255, 0,0.6)"> &nbsp;&nbsp;1 &nbsp;&nbsp;</div>
<div class="buton" id="skin_but_2" style="width:auto; left:50%; background:rgba(0, 153, 204,0.6)"> &nbsp;&nbsp;2 &nbsp;&nbsp;</div>
<div class="buton" id="skin_but_3" style="width:auto; left:60%; background:rgba(204, 51, 0,0.6)"> &nbsp;&nbsp;3 &nbsp;&nbsp;</div>
<div class="buton" id="skin_but_4" style="width:auto; left:70%; background:rgba(51, 153, 51,0.6)"> &nbsp;&nbsp;4 &nbsp;&nbsp;</div>
<div class="buton" id="skin_but_5" style="width:auto; left:80%"> &nbsp;&nbsp;C &nbsp;&nbsp;</div>
 

&nbsp;&nbsp;&nbsp;Change Snake Skin
<br><br>
&nbsp;&nbsp;&nbsp;Change Snake Thickness &nbsp;:&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <input type="text" id="thickness_new" placeholder="   Enter between 2-11" style="position:relative; top:-5px; text-align:center" ></input>

<div class="buton"  id="food_but_1"  style=" width:auto; left:62%"><img src="images/red.bmp"></div>
<div class="buton"  id="food_but_2" style=" width:auto; left:40%"><img src="images/food.gif"></div>
<div class="buton"  id="food_but_3" style=" width:auto; left:50%"><img src="images/food-2.gif"></div>

<br><br>
&nbsp;&nbsp;&nbsp;Change Food Graphics &nbsp;:


<div class="buton" style="left:40%; width:30px; top:70%; height:30px; background:#000"></div>
<div class="buton" style="left:50%; width:30px; top:70%; height:30px; background:#fff"></div>
<div class="buton" style="left:60%; width:30px; top:70%; height:30px; background:green"></div>

<br>
<br>
&nbsp;&nbsp;&nbsp;Change Theme
<br><br>

<div id="close" class="buton" style="z-index:inherit; left:40%; text-align:center">close</div>
</div>

<center>

<div id="box" style="overflow:hidden;position:absolute; left:0px; top:0px; width:100%; height:100%; z-index:1 " >

<div id="story_div">  

<canvas id="story">Sorry dude you need to upgrade your browser to play the game</canvas>
<div id="titletext" class="storytext" style="opacity:1; top:-500px; font-size:26px; font-weight:bold"> PRETTY SNAKE - 'THE STORY SO FAR' </div>
<div id="titletext" class="storytext" style="opacity:1; top:-400px; font-size:20px; font-weight:bold"> Scene : 64th anual beautiful snake contest </div>


<div id="story_text_1" class="storytext"> "I will surely win the 64th anual beautiful snake contest and get the prize of making an appearance in the new Dance Video by MTV.<br>
 These punks don't stand a chance against me. <br>
I am the prettiest Snake afterall." </div>
<div id="story_text_2" class="storytext"> Announcement : "And the 64th Anual beautiful snake contest winner and <br>
the one to make an appearance in the new Music Video by MTV is BLAH BLAH" </div>
<div id="story_text_3" class="storytext"> What !! are they friggin crazy, I am supposed to be the winner, this act of stupidity will not be tolerated. <br><br>
Vengence will be mine ( Evil laughter ) </div>

<div id="skip" class="storytext" style="opacity:1; "><br><br>
[ Click anywhere to skip ]</div>
</div>

<div id="topbar" style="position:absolute; width:100%; height:40px; z-index:6;  text-align:left; vertical-align:middle; font-size:24px; font-weight:bold">

<div id="mazebut" title="Mazes are currently being developed" class="buton" style="width:40px; right:50px; height:34px; font-size:16px; opacity:0.5; text-align:center"><a href="#" style="width:inherit; height:inherit"> <img src="images/maze.gif" style=" height:inherit;"></a></div>

<div id="settingsbut" title="click to open settings panel" class="buton" style="width:40px; right:0px; height:34px; font-size:16px; opacity:0.5"> <img src="images/system_settings.gif" style=" height:inherit;"></div>

<span style="color:#666; background:#003; border-radius:5px; opacity:0.6;">&nbsp; Offline Version &nbsp;</span>

</div>


<div id="container" style="position:absolute; left:0px; top:0px; width:105%; height:100%;">

<canvas id="back_canvas" style=" z-index:0; left:0px; width:100%; height:100%; top:0px; background:#141414; visibility:visible; ">
</canvas>

</div>


<div id="intro" style=" position:sbsolute; z-index:10; opacity:0; left:0px; height:530px;"  >

<br>
<br>

<div id="banner" >&nbsp;PRETTY SNAKE "REVENGE"&nbsp;</div>

<div id="high_score"> High Score : 0000  &nbsp; &nbsp;| &nbsp; &nbsp; Longest : 0000</div>

<div id="tutorial" class="buton" style="z-index:inherit;" >Snake Tutorial</div>

<div id="start" class="buton" style=" z-index:inherit"   >Quick Snake</div>

<div id="multi" class="buton" style=" z-index:inherit"   >Multi Snake</div>

<div id="immortal" class="buton" style="z-index:inherit" >Immortal Snake</div>

<div id="submit" class="buton" style="z-index:inherit" onClick="submitScore()" >Submit Score</div>

<div id="hint_div" style="z-index:11; color:#C90; opacity:0.8; top:350px;  position:relative">Tip : Press 'M' to toggle background music </div>
</div>



<div id="reference" >

</div>


<div id="high_score"></div>

<div id="tut_tag" ></div> 
<div id="tut_tag2" ></div>


<div id="food" style="position:fixed;  left: -41px; top: 399px; opacity:0.5 "><img id="foodtag" ></div>

<div id="comment" style="position:fixed; width:auto; height:auto; left:500px; top:400px; font-family:'Comic Sans MS'; font-size:22px; color:#CCC"> </div>

<div id="scoreboard" style="position:absolute; width:auto; height:auto; left:180px; top:94px; font-size:16px; color:#939300; font-style:italic;"  >V 1.1</div>

<div id="static_comment"> </div>


<canvas height="530" width="1007" id="canvas" style="  z-index:2;  " >
sorry it looks like your browser does not support HTML 5 :(
</canvas>
<canvas height="540" width="1007" id="canvas2" style=" z-index:3;" >
</canvas>
<canvas height="540" width="1007" id="canvas3" style=" z-index:1; " >
</canvas>
<canvas height="540" width="1007" id="canvas4" style=" z-index:4;">
</canvas>

<audio src="loop.mp3" id="backmusic" loop autoplay="" ></audio> 
<audio src="Glass Break.mp3" id="musicbox1" ></audio>
<audio src="Glass Break.mp3" id="musicbox2" ></audio>
<audio src="Glass Break.mp3" id="musicbox3" ></audio>
<audio src="trumpet.mp3" id="trumpet"></audio>

</div>

<br>
<input type="text" id="in"  value=" x " style="width:300px;visibility:hidden">
<input type="text" id="numb"  value=" x " style="width:700px; visibility:hidden">
</center>
</body>
</html>
