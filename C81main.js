canvas = document.getElementById("myCanvas");
color = "black";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
ctx.beginPath();
ctx.strokeStyle = black;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.rect(150,143,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
ctx.beginPath();
ctx.strokeStyle = yellow;
ctx.lineWidth = 2;
ctx.rect(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
ctx.beginPath();
ctx.strokeStyle = green;
ctx.lineWidth = 2;
ctx.rect(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + ", Y =  " + mouse_y);
    circle(mouse_x , mouse_y);
}

function circle(mouse_x , mouse_y) 
{ 
    ctx.beginPath();
     ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
       ctx.stroke(); 
    }