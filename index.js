const canvas=new fabric.Canvas("canvas1",{
    width:2100,
    height:930,
    backgroundColor:"red",
})

document.getElementById("img").addEventListener("change",(e)=>{
    const imag=document.getElementById("img").files[0]
    const filereader=new FileReader();
    filereader.readAsDataURL(imag)
    filereader.addEventListener("load",(e)=>{ 
        fabric.Image.fromURL(filereader.result,(img)=>{
            img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'})
           
            canvas.add(img)
        },{
        left:50,
        top: 50})
    })
})
var initialZoom=canvas.getZoom();
canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    console.log("zoom:  "+canvas.getZoom());
    console.log(opt.e)
    initialZoom=canvas.getZoom();
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom < 1) {zoom = 1}
    if(delta>0){    
        canvas.zoomToPoint(new fabric.Point(canvas.width / 2, canvas.height / 2), zoom);
    }else{
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    }
  opt.e.preventDefault();
  opt.e.stopPropagation();
})
canvas.requestRenderAll()