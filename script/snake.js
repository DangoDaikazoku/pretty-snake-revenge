
// snake.js

var m=0;
var j=-1;
var cursorx;
var cursory;
var soldx,soldy;
var patchlist=[];
var supereffectsarr=[];
var global_size="offline";
var global_length="offline";
var length=0;
var maxlength=0;
var maxsize=0;
var dce=0;
var combo=1;
var inarow=1;
var list = [];
var splashlist = [];
var starlist=[];
var foodlist = [];
var backticker=0;
var commentarr=[];
var pseudocombo=1;
var texty=300;
var see=1;
var score;
var taberumono;
var limitanime=100;
var lastLoop = new Date;
var fps=0;
var music_playing=1;
var mortal=1;
var remake=[];
var flag=0; 
var game_running=0;
var settings_visible=0;
var snake_head_color1='rgba(255,255,255,0.5)';
var snake_head_color2='rgba(204, 153, 0,0.4)';
var play_turn=1;
var left;
var tutorial=0;
var tut_tag;
var tut_tag2;
var animation_count=0;
var stopbackground=0;
var highscore;
var stored_length;

function positiongame(){
canvas.style.left=refrence.offsetLeft+"px";
canvas2.style.left=canvas.offsetLeft+"px";
canvas3.style.left=canvas.offsetLeft+"px";
canvas4.style.left=canvas.offsetLeft+"px";
score.style.left=(canvas.offsetLeft+10)+"px";

foodlist[0].animation();
			
}
////////////////////////// scoreboard  ////////////////////////////


function scoreboard(){
	
	if(size>25)
	var show_size=size;
	else var show_size='negligible';
		
		
		
		
	if(!highscore||size>highscore)
	{
		localStorage["High"]=size;
		highscore=size;
	}
	
	if(!stored_length||stored_length<maxlength)
	{
		localStorage["leng"]=maxlength;
		stored_length=maxlength;
		}
		 
		if(size>maxsize)
		maxsize=size;
		
		score.innerHTML="Size : <strong>"+show_size+ "</strong>&nbsp;&nbsp;&nbsp;|  "+"MaxSize : <strong>"+maxsize+"</strong>  &nbsp;&nbsp;&nbsp;|  Longest : <strong>"+maxlength+" </strong>&nbsp;&nbsp;&nbsp;|  Global Max Size : <strong>"+global_size+"</strong>&nbsp;&nbsp;&nbsp; |  Global Longest : <strong>"+global_length+"</strong>";
		
			
	}


///////////////////////////////////////////////////////////////////


//////////////////////////     length coments   ///////////////////////
function length_comment()
{
	
	if(size>50&&!commentarr[0])
{
	trumpet.play();
	
	commentarr[0]=1;
	static_comment.innerHTML='50 mark breached<br><br> "Not the longest I have seen but then agian its just the begining"';
	static_comment.style.opacity='0.8';
	
	var natalie_portman=window.setTimeout(	function(){
		static_comment.style.opacity='0';
		},5000);
	}
		else if(size>100&&!commentarr[1])
{
	trumpet.play();
	
	commentarr[1]=1;
	static_comment.innerHTML='100 mark breached<br><br>"He must be pretty pissed to smack his head on every dang thing he sees"' ;
	static_comment.style.opacity='0.8';
	
	var natalie_portman=window.setTimeout(	function(){
		static_comment.style.opacity='0';
		},5000);
	}
	
	else if(size>150&&!commentarr[2])
{
	trumpet.play();
	
	commentarr[2]=1;
	static_comment.innerHTML='150 mark breached<br><br>"Woah ! will you look at the size of that thing" - Kylie';
	static_comment.style.opacity='0.8';
	
	var natalie_portman=window.setTimeout(	function(){
		static_comment.style.opacity='0';
		},5000);
	}
	
	else if(size>200&&!commentarr[3])
{
	trumpet.play();
	
	commentarr[3]=1;
	static_comment.innerHTML='200 mark breached<br><br>"If he keeps eating like this one day he will burst his stomach out" - Anonymous ';
	static_comment.style.opacity='0.8';
	
	var natalie_portman=window.setTimeout(	function(){
		static_comment.style.opacity='0';
		},5000);
	}
	

	else if(size>300&&!commentarr[4])
{
	trumpet.play();
	
	commentarr[4]=1;
	static_comment.innerHTML='300 mark breached<br><br>"Is that thing still a snake ?<br>Man that is helluva long for a snake" they said';
	static_comment.style.opacity='0.8';
	
	var natalie_portman=window.setTimeout(	function(){
		static_comment.style.opacity='0';
		},5000);
	}
	

		
	else if(size>400&&!commentarr[5])
{
	trumpet.play();
	
	commentarr[5]=1;
	static_comment.innerHTML='400 mark breached<br><br>" I once thought he was psychologically troubled, <br>now I know he is just friggin crazy" - Dr Snake paul';
	static_comment.style.opacity='0.8';
	
	var natalie_portman=window.setTimeout(	function(){
		static_comment.style.opacity='0';
		},5000);
	}
	
	
	else if(size>500&&!commentarr[6])
{
	trumpet.play();
	
	commentarr[6]=1;
	static_comment.innerHTML='500 mark breached<br><br>" Not many brave snakes have ventured out this far<br><br> Is this the begining of the End" ';
	static_comment.style.opacity='0.8';
	
	var natalie_portman=window.setTimeout(	function(){
		static_comment.style.opacity='0';
		},5000);
	}
	}

///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////

		  ////////////////////////

var star_vely=0;

function star(_x,_y,_velx,_size)
{
	
	
this.x=_x;
this.y=_y;
this.velx=_velx;
this.size=_size;
	}

		  ////////////////////////


function backgroundmove(){
	
var limit=Math.random()*4;
	
	for(var o=0;o<limit;o++){
		
	var newstar=new star(1,Math.random()*768,Math.random()*2+2,Math.random());
	starlist.push(newstar);
		
		}

back_ctx.save();
back_ctx.globalCompositeOperation = "clear";


for(var t=0;t<starlist.length;t++){

back_ctx.beginPath();

back_ctx.arc(starlist[t].x,starlist[t].y,starlist[t].size+1, 0, Math.PI*2, true);
back_ctx.fill();
back_ctx.closePath();
	

if(!mortal)
{
	starlist[t].x+=(starlist[t].velx)/2;
	}
else starlist[t].x+=starlist[t].velx;
starlist[t].y+=star_vely;


	}
	
back_ctx.restore();



var r=0;

while(starlist[r].x>800)
{
	starlist.shift();
	r++;
}

for( t=0;t<starlist.length;t++){

 back_ctx.beginPath();
 back_ctx.arc(starlist[t].x,starlist[t].y,starlist[t].size, 0, Math.PI*2, true);
 back_ctx.fill();
 back_ctx.closePath();
	
	}
	




	}

////////////////////////////  hotkeys /////////////////////////////

function checkkey(evt){
	
	if(evt.keyCode==77)
	{
		if(music_playing==1)
		{
			music_playing=0;
			backmusic.pause();
		}
		else
		{
			backmusic.play();
			music_playing=1;
		}
	}


}


////////////////////////////  Comments ///////////////////////////

function comments(){
	
	if(limitanime<60){
		
			comment.innerHTML=((pseudocombo-1)*4)+" IN A ROW";
		
		comment.style.top=texty+"px";
		texty--;
		limitanime++;
		}
	else if(see){
		
		comment.style.top=-35+"px";
		see=0;
		} 
	
	}

///////////////////////////////////////////////////////////////////

////////////////////////////// CURSOr ////////////////////////////////////



function updatepos(evnt) {
  cursorx = evnt.pageX-canvas.offsetLeft;
  cursory = evnt.pageY-canvas.offsetTop;
  
}

/////////////////////////////////////////////////



///////////////////// FIND ANGLE /////////////////

function findangle(x1,y1,x2,y2){
	
	var angle=Math.atan((y2-y1)/(x2-x1))*180/Math.PI;
	
	if(y1>y2&&x1<x2)
	return -1*angle;
	else if(y1<y2&&x1<x2)
	return -1*angle;
	else if(y1<y2&&x1>x2)
	return -1*((angle+90)+90);
	else if(y1>y2&&x1>x2)
	return 90+(90-angle);
	else if(x1==x2&&y1<y2)
	return -90;
	else if(x1==x2&&y1>y2)
	return 90;
	else if(y1==y2&&x1<x2)
	return 0;
	else return 180;
	
	}

////////////////////////////////////////////////////////////



////////////////////// act on COLLISON /////////////////////

function act(j){
if(mortal)
{

if(j>size/2){
	while(j<size&&size>minimum){
		
		
///////////////////////// clear tail ///////////////////////////

	 
ctx.save();

ctx.lineWidth = thickness+1;
ctx.globalCompositeOperation = "clear";
ctx.beginPath();  
ctx.moveTo(list[size-1].x,list[size-1].y);
ctx.lineTo(list[size-2].x,list[size-2].y);
	
ctx.arc(list[size-1].x,list[size-1].y,3, 0, Math.PI*2, true);
ctx.stroke();	
ctx.fill;
ctx.restore();
	  
///////////////////////////////////////////////////////////

		
		list.pop();
		size--;
		}
		
	}
else {
	
	j++;
	
	while(j>=0&&size>minimum){
		
	
/////////////////// clear tail ///////////////////////////

	 
ctx.save();

ctx.lineWidth = thickness+2;
ctx.globalCompositeOperation = "clear";
ctx.beginPath();
ctx.moveTo(list[off].x,list[off].y);
ctx.lineTo(list[off+1].x,list[off+1].y);
ctx.arc(list[off].x,list[off].y,3, 0, Math.PI*2, true);
ctx.stroke();	
ctx.fill();
ctx.restore();


ctx4.save();
ctx4.globalCompositeOperation = "clear";
ctx4.beginPath();
ctx4.lineWidth = thickness+4;
ctx4.moveTo(list[off].x,list[off].y);
ctx4.lineTo(list[off+1].x,list[off+1].y);  
ctx4.arc(list[off].x,list[off].y,8, 0, Math.PI*2, true);
ctx4.fill();
ctx4.stroke();
ctx4.restore();
	 
///////////////////////////////////////////////////////////
		
		
		list.shift();
		size--;
		j--;
	}
	}
}
else 
{

///////////////////////////////  immortal tail repair ///////////////////

ctx.beginPath();  


ctx.moveTo(list[j].x,list[j].y);
ctx.lineTo(list[j-1].x,list[j-1].y);

ctx.moveTo(list[j].x,list[j].y);
ctx.lineTo(list[j+1].x,list[j+1].y);

ctx.moveTo(list[j+1].x,list[j+1].y);
ctx.lineTo(list[j+2].x,list[j+2].y);

ctx.moveTo(list[j+2].x,list[j+2].y);
ctx.lineTo(list[j+3].x,list[j+3].y);


ctx.moveTo(list[j+4].x,list[j+4].y);
ctx.lineTo(list[j+3].x,list[j+3].y);



ctx.stroke();	

ctx.closePath();
	
	}	

scoreboard();
	
	}


//////////////////////////// Splash prototpE //////////////////////////////


function splash(_x,_y,_velx,_vely){
	
this.x=_x;
this.y=_y;
this.velx=_velx;
this.vely=_vely;
this.life=0;

}

///////////////////////////////////////////////////////////////////////////

//////////////////////////  Draw splash explosion /////////////////////////

function splashdraw(){

if(mortal)
length_comment();

if(!splashlist[0])
return;

ctx3.save();
ctx3.globalCompositeOperation = "clear";

for(var t=0;t<splashlist.length;t++){

ctx3.beginPath();
ctx3.arc(splashlist[t].x,splashlist[t].y,3, 0, Math.PI*2, true);
ctx3.fill();
ctx3.closePath();
	
	}
	
ctx3.restore();

	
if(splashlist[0].life>lifetime)
{
		splashlist.shift();		
		
	}
	


for(var t=0;t<splashlist.length;t++){


	splashlist[t].x+=splashlist[t].velx;
	splashlist[t].y+=splashlist[t].vely;
	splashlist[t].life++;

ctx3.beginPath();

ctx3.arc(splashlist[t].x,splashlist[t].y,2, 0, Math.PI*2, true);
ctx3.fill();
ctx3.closePath();

}


}

///////////////////////////////////////////////////////////////////////

////////////////////// Effects prototypE ///////////////////////

function supereffect(_x,_y){
	
	this.x=_x;
	this.y=_y;
	}
////////////////////////// Gochisosama ////////////////////////

	
function superdraw(clear){

var ax,ay;

 
ctx2.lineWidth =1;

ctx2.save();
ctx2.lineWidth =3;
ctx2.globalCompositeOperation = "clear";

for(var p=0;p<supereffectsarr.length;p++)
{
	ax=supereffectsarr[p].x
	ay=supereffectsarr[p].y

ctx2.beginPath();
	
 ctx2.moveTo(ax,ay);
 ctx2.lineTo(soldx,soldy);
  
ctx2.arc(ax,ay,4, 0, Math.PI*2, true);
  
ctx2.stroke();
ctx2.closePath(); 
	}
	

  soldx=list[off].x;
  soldy=list[off].y;
  
ctx2.restore();
  

 if(clear)
 return;
 
  
for(var p=0;p<supereffectsarr.length;p++)
{
	ax=supereffectsarr[p].x
	ay=supereffectsarr[p].y

  ctx2.beginPath();
	
  ctx2.moveTo(ax,ay);
  ctx2.lineTo(list[off].x,list[off].y);

  ctx2.arc(ax,ay,4, 0, Math.PI*2, true);
  ctx2.stroke();
  ctx2.closePath();

  
}

}
	
////////////////////////////////////////////////////////////////



//////////////// CHECK COLLISON /////////////////

function checkcollison(
x1,y1,
x2,y2,
xx1,yy1,
xx2,yy2)
{
	
	if(!x1||!x2||!xx1||!xx2||!y1||!y2||!yy1||!yy2)
	return 0;
	
	
var side1;
var side2;	
var ang1;
var ang2;
var ang3;
var collison;


	side1=(yy2-y1)*(x2-x1)-(y2-y1)*(xx2-x1);
	side2=(yy1-y1)*(x2-x1)-(y2-y1)*(xx1-x1);
	
	
	 
	 ang1=findangle(xx2,yy2,xx1,yy1);
	 ang2=findangle(xx2,yy2,x1,y1);
	 ang3=findangle(xx2,yy2,x2,y2);
	// anglex.value=ang3-ang2;
	 
	
	if(ang2-ang3>180||ang2-ang3<-180){
	 ang2=findangle(xx1,yy1,x1,y1);
	 ang3=findangle(xx1,yy1,x2,y2);
	 ang1=findangle(xx1,yy1,xx2,yy2);
			}
	
	if(ang1==ang3&&ang1==ang2)
	return 0;
	
	 if(side1>0&&side2>0)
	return 0;
	else if(side1<0&&side2<0)
	return 0;
	
	 if(ang1>=ang2&&ang1<=ang3)
	 return 1;
	 else if(ang1<=ang2&&ang1>=ang3)
	 return 1;
	 else  return 0;
	
	}

/////////////////////////////////////////////////////////////





/////////////////// COUNTER + MOVE SNAKE /////////////////////

function mobilize(){
	
	try{

 stopbackground=0;



if(counter)
{
	if(ticker<combobreaker)
	{
		ticker++;	
			
		comments();
				
		if(inarow>4){
			inarow=1;
		
			pseudocombo++;
			
			comment.style.left=list[off].x+canvas.offsetLeft+"px";
			texty=list[off].y+canvas.offsetTop;
			see=1;	
			limitanime=0;
		
			if(combobreaker>100)
				{	
			
					if(mortal)
					combo++;
					combobreaker-=60;
					
							switch(combo)
							{
								case 1:break;
								case 2:ctx2.strokeStyle='rgba(146, 47, 10,0.7)';
									break;
								case 3:ctx2.strokeStyle='rgba(146, 67, 10,0.6)'; 
									break;
								case 4:ctx2.strokeStyle='rgba(204, 153, 0,0.4)'; 
									break; 
								case 5:ctx2.strokeStyle='rgba(255, 255, 0,0.4)'; 
									break;
								default : alert('max combo');
							}
							
				}
			}
	}
	else {
		
		counter=0;
		
		ticker=0;
		combo=1;
		pseudocombo=1;
		inarow=1;
		
		combobreaker=340;

		superdraw(1);
		supereffectsarr=[];
		
		}
}

var str='';
var k=off+1;	
var k;
flag=0;
	

///////////////////////////////// Itadakimasu ////////////////////////

if(tutorial==3&&size>40)
{
	tutorialfunc(5);
	tutorial=-1;
	}

if(dce>15)
{
dce=0;
}
dce++;
if(!foodlist[0])
{}
else if(foodlist[0].checkcoll()){
	
	
	switch(play_turn)
	{
	case 1:spark1.play();
	play_turn++;
	break;
	
	case 2:spark2.play();
	play_turn++;
	break;
	
	default: spark3.play();
	play_turn=1;
	
	}
	
for( var np=0;np<10;np++)
{
	var newsplash=new splash(foodlist[0].x,foodlist[0].y,Math.random()*4-2,Math.random()*4-2);
	splashlist.push(newsplash);
	}
	
	if(tutorial==1)
	{
		tutorialfunc(3);
		tutorial=2;		

	
	foodlist.pop();
	taberumono.style.opacity="0";
	
	var tsundre=window.setTimeout(
	function(){
		taberumono.style.opacity="0.6";
		createcell(list[size-1].x,list[size-1].y);
		++size;
		t++;
		var newfood= new food(Math.random()*880+20,Math.random()*470+30,foodsize);
		foodlist.push(newfood);
		foodlist[0].animation();
		
	},2000);
	return;
		}
		
	var t=0;
	
	while(t<combo)
	{
	createcell(list[size-1].x,list[size-1].y);
	++size;
	t++;
	}
	
	if(combobreaker>100)
	{
	if(inarow==4){
		
		if(tutorial==2)
		{
			tutorialfunc(4);
			tutorial=3;
			
			}
		
		
	//var newsupereffect=new supereffect(foodlist[0].x,foodlist[0].y);
	//supereffectsarr.push(newsupereffect);			
	}
	
	}
	
	

	
	var newfood= new food(Math.random()*880+20,Math.random()*470+30,foodsize);
	foodlist.pop();
	foodlist.push(newfood);
	foodlist[0].animation();
	
	
	
	counter=1;
	ticker=0;
	
	inarow++;
	
}

/////////////////////////////////////////////////////////



/////////////////// clear tail ///////////////////////////

ctx.save();

ctx.lineWidth = thickness+1;

ctx.globalCompositeOperation = "clear";
ctx.beginPath();  
ctx.moveTo(list[size-1].x,list[size-1].y);
ctx.lineTo(list[size-2].x,list[size-2].y);
	
ctx.arc(list[size-2].x,list[size-2].y,3, 0, Math.PI*2, true);
ctx.stroke();	
ctx.restore();

	
///////////////////////////////////////////////////////////
	  



if(cursory<5||cursory>520||cursorx<5||cursorx>1007)
{	
flag=1;
}


//////////////// chek the limit till stop snake check  /////////////////


if(mortal)
	{
		k=off;
		
while(list[k].x==list[k+1].x&&list[k].y==list[k+1].y&&k<size-2)
	{
		k++;	
	}
	
}
else	{
	k=size-7;
while(list[k].x==list[k-1].x&&list[k].y==list[k-1].y&&k>off)
	{
		k--;	
	}
}

/////////////////////////////////////////////////////////////////


////////////////////// Cheking for poop /////////////////////

if(size>minimum&&mortal)
{
	if(flag)
{
	if(list[0].x==list[1].x&&list[0].y==list[1].y)
	{
		
		list.shift();
		size--;
				
		scoreboard();
		backticker=1;
	}


}
else if(dce>15)
{
	if(list[size-1].x==list[size-5].x&&list[size-1].y==list[size-5].y)
	{
	
		list.pop();
		size--;		
		
		scoreboard();
	}
	
}

}


//////////////////////////////////////////////////////////////////////////

if(length>maxlength&&size>50)
{
	maxlength=Math.round(length);

}

length=0;

//////////////////////////  immortal tail damage //////////////////////////

var s=0;

if(!mortal&&j!=-1)
{
	m=j+4;
	while(patchlist[s])
	s++;
	
	patchlist.push(m);
	
	remake.push(1);
	}

s=0;

while(remake[s])
{
remake[s]++;
s++;
}

	if(remake[0]>5)
	{
		act(patchlist[0]);
		
		patchlist.shift();
		remake.shift();
		
	}


j=-1;		
		
/////////////////////  one loop for stack shift and collison chek //////////////////////

for(var i=size-1; i >0 ; i--)

{
	length+=Math.sqrt(Math.pow(list[i-1].x-list[i].x,2)+Math.pow(list[i-1].y-list[i].y,2));
	
	list[i].x=list[i-1].x;
	list[i].y=list[i-1].y;
	
//////  calling for collison check /////

str+=list[i-1].x+","+list[i-1].y+"  ";

if(!flag&&mortal)
{
if(i-2>k)
{
if(checkcollison(
list[i-2].x,list[i-2].y,
list[i-1].x,list[i-1].y,
list[off-1].x,list[off-1].y,
list[off].x,list[off].y
))
{	
j=i-2;
}//chek coll ends
}//limit to coll chek ends
}//flag chek for boundary ends
else if(!mortal){
	
	if(i-1<k&&i-2>off)
	{
		if(checkcollison(
		list[i-2].x,list[i-2].y,
		list[i-1].x,list[i-1].y,
		list[size-1].x,list[size-1].y,
		list[size-2].x,list[size-2].y
	))
	{	
j=i-2;

}//chek coll ends
}//limit to coll chek ends
	
	
	}


////////////////////////////////////////

	
}

////////////////////////////////////////////////////////////////////////////


if(j!=-1&&mortal)
{
	
act(j)		
backticker=1;

}

if(backticker==1&&!settings_visible)
refrence.style. background="#F00";	

if(backticker)
backticker++;

if(backticker>30){
	refrence.style. background=foreground;	
	bacticker=0;
	}

///////////////////////////////////   head /////////////////////////////////

if(inarow>1)
{
ctx4.strokeStyle=snake_head_color1;

}
else if(inarow==1&&combo==1)
{

ctx4.strokeStyle=snake_head_color2;

}
 
ctx4.save();
ctx4.beginPath();  
ctx4.lineWidth=thickness+4;

ctx4.globalCompositeOperation = "clear";

ctx4.arc(list[off+11].x,list[off+11].y,4, 0, Math.PI*2, true);
ctx4.fill();  
ctx4.moveTo(list[off+10].x,list[off+10].y);
ctx4.lineTo(list[off+11].x,list[off+11].y);
ctx4.stroke(); 

ctx4.closePath();
ctx4.restore();

var headsize=2;

ctx4.lineWidth=thickness+3;

ctx4.beginPath();  
ctx4.arc(list[off].x,list[off].y,headsize, 0, Math.PI*2, true);


ctx4.moveTo(list[off].x,list[off].y);
ctx4.lineTo(list[off+1].x,list[off+1].y);
ctx4.stroke(); 

ctx4.closePath();


//////////////////////////////////   Create Snake front ////////////////////////////////


ctx.beginPath();  
//ctx.lineWidth = thickness-dist;

ctx.moveTo(list[off].x,list[off].y);
ctx.lineTo(list[off+1].x,list[off+1].y);

ctx.stroke();	

ctx.arc(list[off+1].x,list[off+1].y,3, 0, Math.PI*2, true);
ctx.fill();
ctx.closePath();


//////////////////////////////////////////////////////////////////////////////////////////

///////// chek fps  ////////////////

  var thisLoop = new Date;
   	fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;


////////////////////////////////////



if(flag)
return;

list[0].x=cursorx-5;
list[0].y=cursory+5;


stopbackground=0;	
	}
	catch(err){
		alert(err);
		}
///////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////



/////////////////////// CELL PROTOTYPe ////////////////////////////

function cell(_x,_y)
{
	
	this.x=_x;
	this.y=_y;
	}
	
//////////////////////////////////////////////



//////////////// FOOD PROTOTYPe////////////////////

function food(_x,_y,siz)
{
	
	this.x=_x;
	this.y=_y;
	this._size=siz;
	}
	
	
	
food.prototype.checkcoll=function(){
	
if(checkcollison(
this.x+this._size,this.y,
this.x-this._size,this.y,
list[off].x,list[off].y,
list[off+1].x,list[off+1].y
)){
	return true;
	}

else if(checkcollison(
this.x,this.y+this._size,
this.x,this.y-this._size,
list[off].x,list[off].y,
list[off+1].x,list[off+1].y
)){
	return true;
	}
	
return false;

}



////////////////////// open ur wings and fly ////////////////////////

food.prototype.animation=function(){
	

taberumono.style.left=(refrence.offsetLeft+this.x-18)+"px";
taberumono.style.top=(refrence.offsetTop+this.y-15)+"px";



	}
	
/////////////////////////////////////////////////////////////////////



////////////////// INITIALIZE ////////////////

function initialize(){


ctx.lineWidth = thickness;

ctx3.lineWidth=1;
ctx3.fillStyle="rgba(255,255,255,0.8)";

var i = 0;
	
for(i=0; i < size; i++){
createcell(cursorx,cursory);
}
	

if(tutorial)
{
tut_tag.style.opacity='0.7'	;
var shouja=setTimeout(function(){tutorialfunc(2)},10000);
	}
	
else {
	
	
var nfood= new food(Math.random()*650+170,Math.random()*400+40,foodsize);
foodlist.push(nfood);
foodlist[0].animation();
 
	}
	
}

//////////////////////////////////////////////


///////////////// NEW CELL ///////////////////
	
function createcell(_x,_y)
{
	var celli= new cell(_x,_y);
	list.push(celli);
	
scoreboard();

	}
	
////////////////////////////////////////////