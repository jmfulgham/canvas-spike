const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');

const handleMousePath = (event) => {
    canvasContext.beginPath();
    canvasContext.moveTo(event.offsetX - event.movementX, event.offsetY - event.movementY);
    canvasContext.lineTo(event.offsetX, event.offsetY);
    canvasContext.stroke();
}

canvas.addEventListener('mousedown', (event)=> {
    handleMousePath(event)
    canvas.addEventListener("mousemove", handleMousePath)
})

const handleMouseUp = () => {
    canvas.removeEventListener("mousemove", handleMousePath)
}

canvas.addEventListener('mouseup', handleMouseUp)

