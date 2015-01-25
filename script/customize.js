// JavaScript Document

function changefood(f_type){


switch(f_type)
{
case 1:foodtag.src="images/red.bmp";
	break;
case 2:foodtag.src="images/food.gif";
	break;
case 3:foodtag.src="images/food-2.gif";
	break;
default:foodtag.src="images/food.gif";
}


}

function modifysnake(new_thickness){
	
	if(new_thickness>1&&new_thickness<12)
	{
		thickness=new_thickness*1;
		
		if(ctx)
		ctx.lineWidth = thickness;

		
	}
	
	
	}
	
function modifysnakeskin(skin_type){
	
	if(!ctx)
	{
		alert('this setting can only be modified after starting a game')
		return;
	}
	switch(skin_type*1)
	{
	case 1:	
	{
		ctx.strokeStyle="rgba(255, 255, 0,0.4)";
		ctx.fillStyle="rgba(255, 255, 0,0.4)";
	}
	break;
	
	case 2:
	ctx.strokeStyle="rgba(0, 153, 204,0.4)";
	ctx.fillStyle="rgba(0, 153, 204,0.4)";
	break;
	
	case 3:
	ctx.strokeStyle="rgba(204, 51, 0,0.4)";
	ctx.fillStyle="rgba(204, 51, 0,0.4)";
	break;
	
	case 4:
	ctx.strokeStyle="rgba(51, 153, 51,0.4)";
	ctx.fillStyle="rgba(51, 153, 51,0.4)";
	break;
	
	case 5:
	var color_code="";
	color_code=	prompt("enter a custom HTML color",'like orange, #ccc, rgba(255,255,255,0.5)');
	ctx.strokeStyle=color_code;
	ctx.fillStyle=color_code;
	break;
	
	default : alert('faliure');
	}
	
}



function changetheme(theme){
	
	switch(theme){
		case 1:
			refrence.style.background="#333"
			foreground="#333";
			document.getElementById('container').style.background="url(images/background.jpg)";
			modifysnakeskin(2);
			changefood(1);
			break;
			
		case 2: 
			break;
		case 3: 
			break;
		default: alert('theme dosent exist');
		}
	
	
	}