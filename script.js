var canvas = document.getElementById("myCanvas");
var canvasReference = canvas.getContext("2d");
var mouseEvent = "empty";
var lastXPosition, lastYPosition;
var penColor = "dodgerblue";
var lineWidth = 2;
canvas.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
    var xPosition = e.clientX-canvas.offsetLeft;
    var yPosition = e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown") {
        canvasReference.beginPath();
        canvasReference.strokeStyle = penColor;
        canvasReference.lineWidth = lineWidth;
        console.log("last X position = "+lastXPosition+", "+"last Y position = "+lastYPosition);
        console.log("new X position = "+xPosition+", "+"new Y position = "+yPosition);
        canvasReference.moveTo(lastXPosition, lastYPosition);
        canvasReference.lineTo(xPosition, yPosition);
        canvasReference.stroke();
    }
    lastXPosition = xPosition;
    lastYPosition = yPosition;
}

canvas.addEventListener("mouseup", mouseUp);

function mouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mouseLeave);

function mouseLeave(e) {
    mouseEvent = "mouseleave";
}

function clearCanvas() {
    canvasReference.clearRect(0, 0, canvasReference.canvas.width, canvasReference.canvas.height);
}