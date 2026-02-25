(function(){
  var canvas = document.getElementById('particles-canvas');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var mouse = {x:null,y:null};

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize',resize);
  document.addEventListener('mousemove',function(e){mouse.x=e.clientX;mouse.y=e.clientY});

  function Particle(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.vx = (Math.random()-0.5)*0.35;
    this.vy = (Math.random()-0.5)*0.35;
    this.size = Math.random()*1.8+0.5;
    this.opacity = Math.random()*0.5+0.1;
  }
  Particle.prototype.update = function(){
    if(mouse.x&&mouse.y){
      var dx=this.x-mouse.x,dy=this.y-mouse.y;
      var dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<120){
        var force=(120-dist)/120*0.015;
        this.vx+=(dx/dist)*force;
        this.vy+=(dy/dist)*force;
      }
    }
    this.vx*=0.999;this.vy*=0.999;
    this.x+=this.vx;this.y+=this.vy;
    if(this.x<0||this.x>canvas.width)this.vx*=-1;
    if(this.y<0||this.y>canvas.height)this.vy*=-1;
  };
  Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fillStyle='rgba(180,30,30,'+this.opacity+')';
    ctx.fill();
  };

  for(var i=0;i<90;i++) particles.push(new Particle());

  function drawConnections(){
    for(var i=0;i<particles.length;i++){
      for(var j=i+1;j<particles.length;j++){
        var dx=particles[i].x-particles[j].x;
        var dy=particles[i].y-particles[j].y;
        var dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<160){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle='rgba(180,30,30,'+(0.1*(1-dist/160))+')';
          ctx.lineWidth=0.5;ctx.stroke();
        }
      }
      if(mouse.x&&mouse.y){
        var dx2=particles[i].x-mouse.x;
        var dy2=particles[i].y-mouse.y;
        var dist2=Math.sqrt(dx2*dx2+dy2*dy2);
        if(dist2<220){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(mouse.x,mouse.y);
          ctx.strokeStyle='rgba(180,30,30,'+(0.2*(1-dist2/220))+')';
          ctx.lineWidth=0.6;ctx.stroke();
        }
      }
    }
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<particles.length;i++){particles[i].update();particles[i].draw();}
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
})();
