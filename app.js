const elements = {


nodes: atlas.nodes.map(n=>({

data:{
id:n.id,
label:n.label
}

})),


edges: atlas.edges.map(e=>({

data:{
source:e.source,
target:e.target
}

}))

};



const cy = cytoscape({

container:
document.getElementById("cy"),


elements,


style:[

{
selector:"node",

style:{

"background-color":"#34d5ff",

"label":"data(label)",

"color":"white",

"text-valign":"center",

"text-halign":"center",

"font-size":"12px",

"width":50,

"height":50,

"border-width":2,

"border-color":"#d8b56a"

}

},


{
selector:"edge",

style:{

"width":2,

"line-color":"#555",

"curve-style":"bezier"

}

}

],


layout:{

name:"cose",

animate:true

}


});



cy.on(
"tap",
"node",
event=>{


const id =
event.target.id();


const node =
atlas.nodes.find(n=>n.id===id);



document.getElementById("title")
.innerText=node.label;


document.getElementById("content")
.innerHTML=
`

<p>${node.description}</p>

<hr>

<h3>Explore</h3>

<p>
More sources and arguments can be added here.
</p>

`;



});