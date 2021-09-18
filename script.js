var canvas=document.getElementById("theCanvas");
var canvasReference=canvas.getContext("2d");
var circleColor="white";
canvasReference.beginPath();
canvasReference.strokeStyle=circleColor;
canvasReference.lineWidth=2;
canvasReference.arc(200,200,20,0,2*Math.PI);
canvasReference.stroke();
canvas.addEventListener("mousedown",mousedownFunction);
function mousedownFunction(e) {
    var xCoordinate= e.clientX-canvas.offsetLeft;
    var yCoordinate= e.clientY-canvas.offsetTop;
    console.log("x = "+xCoordinate+", y = "+yCoordinate);
    drawCircle(xCoordinate,yCoordinate);
}
function drawCircle(mouseX,mouseY) {
    canvasReference.beginPath();
    canvasReference.strokeStyle=circleColor;
    canvasReference.lineWidth=2;
    canvasReference.arc(mouseX,mouseY,20,0,2*Math.PI);
    canvasReference.stroke();
}