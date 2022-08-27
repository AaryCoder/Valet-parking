canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=225;
function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
greencar_imgTag=new Image();
greencar_imgTag.onload=uploadgreencar
greencar_imgTag.src=greencar_image
}
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
function add(){
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;
	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar
	greencar_imgTag.src=greencar_image
	}
	function uploadBackground(){
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
	}
	function uploadgreencar(){
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);
	}
	
	function up()
	{
	if(greencar_y >=0)
	{
	greencar_y=greencar_y-10;
	console.log("When up arrow is pressed,x="+greencar_x+"y="+ greencar_y);
	uploadBackground();
	uploadgreencar();
	}
	}
	function down()
	{
	if(greencar_y <=400)
	{
	greencar_y=greencar_y+10;
	console.log("When down arrow is pressed,x="+greencar_x+"y=" +greencar_y);
	uploadBackground();
	uploadgreencar();
	}
	}
	function left()
	{
	if(greencar_x >=0)
	{
	greencar_x=greencar_x-10;
	console.log("When left arrow is pressed,x="+greencar_x+"y=" +greencar_y);
	uploadBackground();
	uploadgreencar();
	}
	}
	function right()
	