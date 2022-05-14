
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
            canvas.add(img)
            canvas.requestRenderAll()   
        },{
        left:100,
        top: 100})
    })
})
canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom < 1) {zoom = 1}
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
})
canvas.requestRenderAll()