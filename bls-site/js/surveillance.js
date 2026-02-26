(function(){
  var c=document.getElementById('surveillance-canvas');
  if(!c) return;
  var ctx=c.getContext('2d');
  var hero=c.parentElement;
  var w,h,t=0;
  var R='rgba(180,30,30,';

  function resize(){w=c.width=hero.offsetWidth;h=c.height=hero.offsetHeight;}
  resize();
  window.addEventListener('resize',resize);

  var tgts=[
    {x:0.05,y:0.08,vx:0.22,vy:0.14,id:'TGT-001',role:'IT ADMIN',threat:94,trail:[]},
    {x:0.92,y:0.1,vx:-0.18,vy:0.2,id:'TGT-002',role:'FACILITIES MGR',threat:87,trail:[]},
    {x:0.06,y:0.85,vx:0.14,vy:-0.1,id:'TGT-003',role:'RECEPTIONIST',threat:62,trail:[]},
    {x:0.93,y:0.82,vx:-0.2,vy:-0.16,id:'TGT-004',role:'SECURITY',threat:71,trail:[]},
    {x:0.05,y:0.5,vx:0.12,vy:0.22,id:'TGT-005',role:'EXEC ASST',threat:83,trail:[]}
  ];

  function grid(){
    ctx.strokeStyle=R+'0.06)';ctx.lineWidth=0.5;
    for(var x=0;x<w;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(var y=0;y<h;y+=60){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
    ctx.strokeStyle=R+'0.12)';
    for(var x=0;x<w;x+=240){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(var y=0;y<h;y+=240){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  }

  function scan(){
    var sy=(t*50)%(h+200)-100;
    var g=ctx.createLinearGradient(0,sy-50,0,sy+50);
    g.addColorStop(0,R+'0)');g.addColorStop(0.5,R+'0.05)');g.addColorStop(1,R+'0)');
    ctx.fillStyle=g;ctx.fillRect(0,sy-50,w,100);
    ctx.strokeStyle=R+'0.12)';ctx.lineWidth=0.5;
    ctx.beginPath();ctx.moveTo(0,sy);ctx.lineTo(w,sy);ctx.stroke();
  }

  function drawTarget(tg,i){
    var x=tg.px, y=tg.py;
    var phase=(Math.sin(t*0.5+i*1.3)+1)/2;
    var op=0.5+phase*0.2;
    var heading=Math.atan2(tg.vy,tg.vx);

    for(var j=0;j<tg.trail.length;j++){
      var tr=tg.trail[j];
      var top=0.03+(j/tg.trail.length)*0.1;
      ctx.beginPath();ctx.arc(tr.x,tr.y,1.5-j*0.02,0,Math.PI*2);
      ctx.fillStyle=R+top+')';ctx.fill();
    }

    ctx.strokeStyle=R+(0.15+phase*0.1)+')';ctx.lineWidth=0.8;
    ctx.beginPath();ctx.arc(x,y,18,t*2+i,t*2+i+Math.PI*1.2);ctx.stroke();
    ctx.beginPath();ctx.arc(x,y,18,t*2+i+Math.PI*1.4,t*2+i+Math.PI*1.9);ctx.stroke();

    ctx.strokeStyle=R+(0.2+phase*0.15)+')';ctx.lineWidth=0.6;
    ctx.beginPath();ctx.arc(x,y,10+Math.sin(t*3+i)*2,0,Math.PI*2);ctx.stroke();

    ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);
    ctx.fillStyle=R+op+')';ctx.fill();

    var hx=x+Math.cos(heading)*22, hy=y+Math.sin(heading)*22;
    ctx.strokeStyle=R+(op*0.5)+')';ctx.lineWidth=0.8;
    ctx.beginPath();ctx.moveTo(x+Math.cos(heading)*6,y+Math.sin(heading)*6);
    ctx.lineTo(hx,hy);ctx.stroke();
    var tipAngle=0.4;
    ctx.beginPath();
    ctx.moveTo(hx,hy);ctx.lineTo(hx-Math.cos(heading-tipAngle)*6,hy-Math.sin(heading-tipAngle)*6);
    ctx.moveTo(hx,hy);ctx.lineTo(hx-Math.cos(heading+tipAngle)*6,hy-Math.sin(heading+tipAngle)*6);
    ctx.stroke();

    var sz=24+(1-phase)*8;var bl=sz*0.3;
    ctx.strokeStyle=R+(0.3+phase*0.2)+')';ctx.lineWidth=1;
    ctx.beginPath();
    ctx.moveTo(x-sz,y-sz+bl);ctx.lineTo(x-sz,y-sz);ctx.lineTo(x-sz+bl,y-sz);
    ctx.moveTo(x+sz-bl,y-sz);ctx.lineTo(x+sz,y-sz);ctx.lineTo(x+sz,y-sz+bl);
    ctx.moveTo(x+sz,y+sz-bl);ctx.lineTo(x+sz,y+sz);ctx.lineTo(x+sz-bl,y+sz);
    ctx.moveTo(x-sz+bl,y+sz);ctx.lineTo(x-sz,y+sz);ctx.lineTo(x-sz,y+sz-bl);
    ctx.stroke();

    ctx.font='8px Courier New';ctx.fillStyle=R+op+')';
    ctx.fillText(tg.id,x+32,y-8);
    ctx.font='7px Courier New';ctx.fillStyle=R+(op*0.7)+')';
    ctx.fillText(tg.role,x+32,y+3);

    ctx.strokeStyle=R+'0.25)';ctx.lineWidth=0.5;
    ctx.strokeRect(x+32,y+7,35,4);
    ctx.fillStyle=R+(0.3+phase*0.2)+')';
    ctx.fillRect(x+32,y+7,35*(tg.threat/100),4);

    if(phase>0.75&&Math.sin(t*6)>0){
      ctx.font='7px Courier New';ctx.fillStyle=R+'0.6)';
      ctx.fillText('◉ LOCKED',x+32,y+20);
    }
  }

  function updateTgts(){
    // Center exclusion zone (where title/buttons/tag live)
    var zoneL=w*0.15, zoneR=w*0.85;
    var zoneT=h*0.15, zoneB=h*0.75;
    // On mobile, make zone wider
    if(w<768){zoneL=w*0.05;zoneR=w*0.95;zoneT=h*0.1;zoneB=h*0.8;}

    for(var i=0;i<tgts.length;i++){
      var tg=tgts[i];
      if(!tg.px){tg.px=tg.x*w;tg.py=tg.y*h;}
      tg.px+=tg.vx;tg.py+=tg.vy;

      // Bounce off edges
      if(tg.px<70||tg.px>w-100)tg.vx*=-1;
      if(tg.py<90||tg.py>h-90)tg.vy*=-1;

      // Bounce off center exclusion zone
      var inZone=tg.px>zoneL&&tg.px<zoneR&&tg.py>zoneT&&tg.py<zoneB;
      if(inZone){
        // Figure out which edge is closest and push back
        var dL=tg.px-zoneL, dR=zoneR-tg.px;
        var dT=tg.py-zoneT, dB=zoneB-tg.py;
        var minD=Math.min(dL,dR,dT,dB);
        if(minD===dL||minD===dR){
          tg.vx=minD===dL?-Math.abs(tg.vx):Math.abs(tg.vx);
          tg.px+=tg.vx*3;
        } else {
          tg.vy=minD===dT?-Math.abs(tg.vy):Math.abs(tg.vy);
          tg.py+=tg.vy*3;
        }
      }

      tg.vx+=(Math.random()-0.5)*0.004;
      tg.vy+=(Math.random()-0.5)*0.004;
      tg.vx=Math.max(-0.4,Math.min(0.4,tg.vx));
      tg.vy=Math.max(-0.4,Math.min(0.4,tg.vy));
      if(Math.floor(t*15)%2===0){
        tg.trail.push({x:tg.px,y:tg.py});
        if(tg.trail.length>40)tg.trail.shift();
      }
    }
  }

  function dossier(){
    var idx=Math.floor(t*0.12)%tgts.length;
    var tg=tgts[idx];
    var px=18,py=30;
    var phase=(Math.sin(t*0.5+idx*1.3)+1)/2;
    var locked=phase>0.7;

    ctx.strokeStyle=R+'0.25)';ctx.lineWidth=0.5;
    ctx.strokeRect(px-5,py-16,185,105);
    ctx.fillStyle=R+'0.06)';ctx.fillRect(px-5,py-16,185,14);

    ctx.font='8px Courier New';ctx.fillStyle=R+'0.55)';
    ctx.fillText('▶ TARGET DOSSIER',px,py-5);

    var lines=[
      {t:'ID: '+tg.id},
      {t:'ROLE: '+tg.role},
      {t:'ACCESS: LEVEL '+Math.ceil(tg.threat/25)},
      {t:'THREAT: '+tg.threat+'%'},
      {t:'STATUS: '+(locked?'◉ TARGET LOCKED':'○ TRACKING'),hi:locked},
      {t:'COORD: '+Math.floor(tg.px||0)+' , '+Math.floor(tg.py||0)},
      {t:'VECTOR: '+(locked?'ENGAGE':'MONITOR')}
    ];
    for(var i=0;i<lines.length;i++){
      var fl=Math.sin(t*3+i*0.8)>0?0.4:0.22;
      if(lines[i].hi)fl=Math.sin(t*8)>0?0.7:0.15;
      ctx.fillStyle=R+fl+')';ctx.fillText(lines[i].t,px,py+10+i*12);
    }
  }

  function ops(){
    var px=18,py=h-75;
    ctx.strokeStyle=R+'0.2)';ctx.lineWidth=0.5;
    ctx.strokeRect(px-5,py-12,195,78);

    ctx.font='8px Courier New';
    var lines=[
      'OPS // CYCLE '+String(Math.floor(t*10)%9999).padStart(4,'0'),
      'TARGETS ACTIVE: '+tgts.length,
      'VECTORS: PHYSICAL / SOCIAL / AI',
      'PHASE: ACTIVE RECON',
      'ELAPSED: '+String(Math.floor(t/60)).padStart(2,'0')+':'+String(Math.floor(t)%60).padStart(2,'0')
    ];
    for(var i=0;i<lines.length;i++){
      var fl=Math.sin(t*2.5+i*1.2)>0?0.35:0.18;
      ctx.fillStyle=R+fl+')';ctx.fillText(lines[i],px,py+i*14);
    }
  }

  function vectors(){
    var px=w-178,py=30;
    ctx.strokeStyle=R+'0.25)';ctx.lineWidth=0.5;
    ctx.strokeRect(px-5,py-16,172,90);
    ctx.fillStyle=R+'0.06)';ctx.fillRect(px-5,py-16,172,14);

    ctx.font='8px Courier New';ctx.fillStyle=R+'0.55)';
    ctx.fillText('▶ ATTACK SURFACE',px,py-5);

    var vecs=[
      {l:'PHYSICAL',v:0.88},{l:'SOCIAL ENG',v:0.95},
      {l:'OSINT',v:0.82},{l:'AI/DEEPFAKE',v:0.73}
    ];
    for(var i=0;i<vecs.length;i++){
      var by=py+14+i*17;
      var fl=Math.sin(t*2+i)>0?0.4:0.2;
      ctx.fillStyle=R+fl+')';ctx.font='7px Courier New';
      ctx.fillText(vecs[i].l,px,by);
      var bx=px+80,bw=60,bh=5;
      ctx.strokeStyle=R+'0.2)';ctx.strokeRect(bx,by-5,bw,bh);
      var av=vecs[i].v*(0.85+Math.sin(t*1.5+i*0.7)*0.15);
      ctx.fillStyle=R+(fl+0.12)+')';ctx.fillRect(bx,by-5,bw*av,bh);
      ctx.fillStyle=R+fl+')';ctx.fillText(Math.floor(av*100)+'%',bx+bw+4,by);
    }
  }

  function corners(){
    var m=10,l=40;
    ctx.strokeStyle=R+'0.3)';ctx.lineWidth=1;
    ctx.beginPath();
    ctx.moveTo(m,m+l);ctx.lineTo(m,m);ctx.lineTo(m+l,m);
    ctx.moveTo(w-m-l,m);ctx.lineTo(w-m,m);ctx.lineTo(w-m,m+l);
    ctx.moveTo(w-m,h-m-l);ctx.lineTo(w-m,h-m);ctx.lineTo(w-m-l,h-m);
    ctx.moveTo(m+l,h-m);ctx.lineTo(m,h-m);ctx.lineTo(m,h-m-l);
    ctx.stroke();
  }

  function stamp(){
    var now=new Date();
    var ts='UTC '+String(now.getUTCHours()).padStart(2,'0')+':'+
      String(now.getUTCMinutes()).padStart(2,'0')+':'+
      String(now.getUTCSeconds()).padStart(2,'0');
    ctx.font='9px Courier New';ctx.fillStyle=R+'0.35)';
    var txt=ts+' // 32.7765°N 79.9311°W // OPAREA CHARLESTON';
    var tw=ctx.measureText(txt).width;
    ctx.fillText(txt,(w-tw)/2,h-14);
    if(Math.sin(t*3)>0){
      ctx.beginPath();ctx.arc((w-tw)/2-14,h-17,3,0,Math.PI*2);
      ctx.fillStyle=R+'0.65)';ctx.fill();
    }
    ctx.fillStyle=R+'0.4)';ctx.fillText('REC',(w-tw)/2-30,h-14);
  }

  function draw(){
    t+=0.016;
    ctx.clearRect(0,0,w,h);
    grid();
    scan();
    updateTgts();
    for(var i=0;i<tgts.length;i++) drawTarget(tgts[i],i);
    dossier();
    ops();
    vectors();
    corners();
    stamp();
    requestAnimationFrame(draw);
  }
  draw();
})();
