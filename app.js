const ns=document.getElementById('nodes');
const svg=document.getElementById('lines');
edges.forEach(e=>{
let a=nodes[e[0]],b=nodes[e[1]];
let l=document.createElementNS('http://www.w3.org/2000/svg','line');
l.setAttribute('x1',a.x);l.setAttribute('y1',a.y);
l.setAttribute('x2',b.x);l.setAttribute('y2',b.y);
svg.appendChild(l);
});
nodes.forEach(n=>{
let d=document.createElement('div');
d.className='node';
d.style.left=n.x+'px';d.style.top=n.y+'px';
d.innerHTML=n.title;
d.onclick=()=>{mt.textContent=n.title;md.innerHTML=n.text;modal.style.display='flex';};
ns.appendChild(d);n.el=d;
});
search.oninput=()=>{const q=search.value.toLowerCase();nodes.forEach(n=>n.el.style.display=n.title.toLowerCase().includes(q)?'flex':'none');};
