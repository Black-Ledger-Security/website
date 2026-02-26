(function(){
  var c=document.getElementById('surveillance-canvas');
  if(!c) return;
  var ctx=c.getContext('2d');
  var hero=c.parentElement;
  var w,h;

  function resize(){
    w=c.width=hero.offsetWidth;
    h=c.height=hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize',resize);

  // Create offscreen noise texture
  var noiseCanvas=document.createElement('canvas');
  var noiseCtx=noiseCanvas.getContext('2d');
  var noiseW=256,noiseH=256;
  noiseCanvas.width=noiseW;
  noiseCanvas.height=noiseH;

  function generateNoise(){
    var imgData=noiseCtx.createImageData(noiseW,noiseH);
    var d=imgData.data;
    for(var i=0;i<d.length;i+=4){
      var v=Math.random()*25;
      d[i]=v;d[i+1]=0;d[i+2]=0;d[i+3]=Math.random()*40;
    }
    noiseCtx.putImageData(imgData,0,0);
  }

  var offset=0;
  var scanY=0;

  function draw(){
    ctx.clearRect(0,0,w,h);

    // Regenerate noise every few frames for shimmer
    if(Math.random()>0.5) generateNoise();

    // Tile noise across canvas with slow downward drift
    offset=(offset+0.3)%noiseH;
    for(var y=-noiseH+offset;y<h;y+=noiseH){
      for(var x=0;x<w;x+=noiseW){
        ctx.drawImage(noiseCanvas,x,y);
      }
    }

    // Subtle horizontal scan line that drifts down
    scanY=(scanY+0.4)%(h+60);
    ctx.fillStyle='rgba(180,30,30,0.03)';
    ctx.fillRect(0,scanY-1,w,2);

    // Very faint horizontal lines (CRT effect)
    ctx.fillStyle='rgba(0,0,0,0.04)';
    for(var y=0;y<h;y+=3){
      ctx.fillRect(0,y,w,1);
    }

    requestAnimationFrame(draw);
  }

  generateNoise();
  draw();
})();
