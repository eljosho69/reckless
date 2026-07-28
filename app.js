const atlas = {

nodes:[

{
id:"tawheed",
label:"Tawheed",
type:"theology",
description:
"Central theological foundation concerning divine unity, God's nature, attributes, and the metaphysical basis of Islamic belief.",
position:{x:400,y:80}
},


{
id:"dilemma",
label:"Islamic Dilemma",
type:"theology",
description:
"Argument examining tensions between Islamic claims about revelation and competing theological positions.",
position:{x:200,y:220}
},


{
id:"freewill",
label:"Free Will",
type:"philosophy",
description:
"Exploration of qadar, divine omniscience, human agency, causation, and responsibility.",
position:{x:600,y:220}
},


{
id:"science",
label:"Science",
type:"epistemology",
description:
"Discussion concerning scientific knowledge, revelation, cosmology, and explanations of the natural world.",
position:{x:200,y:380}
},


{
id:"prophecy",
label:"Continuity of Prophecy",
type:"theology",
description:
"Exploration of prophetic continuity from earlier prophets through Muhammad, including revelation and finality of prophethood.",
position:{x:600,y:380}
}

],


edges:[

{
source:"tawheed",
target:"dilemma"
},

{
source:"tawheed",
target:"freewill"
},

{
source:"dilemma",
target:"science"
},

{
source:"freewill",
target:"prophecy"
}

]

};





const elements = {


nodes: atlas.nodes.map(n=>({

data:{
id:n.id,
label:n.label,
description:n.description
},

position:n.position

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

"shape":"rectangle",

"background-color":"#0F172A",

"label":"data(label)",

"color":"#E8F9FF",

"text-valign":"center",

"text-halign":"center",

"font-size":14,

"font-weight":"bold",

"width":170,

"height":70,

"text-wrap":"wrap",

"text-max-width":150,


"border-width":3,

"border-color":"#00E5FF",


"shadow-blur":25,

"shadow-color":"#00E5FF",

"shadow-opacity":0.9

}

},


{
selector:"#tawheed",

style:{

"background-color":"#241A05",

"border-color":"#FFD54A",

"shadow-color":"#FFD54A"

}

},


{
selector:"#dilemma",

style:{

"border-color":"#FF4FD8",

"shadow-color":"#FF4FD8"

}

},


{
selector:"#freewill",

style:{

"border-color":"#00E5FF",

"shadow-color":"#00E5FF"

}

},


{
selector:"#science",

style:{

"border-color":"#39FF88",

"shadow-color":"#39FF88"

}

},


{
selector:"#prophecy",

style:{

"border-color":"#9D7CFF",

"shadow-color":"#9D7CFF"

}

},



{
selector:"edge",

style:{

"width":3,

"line-color":"#00E5FF",

"curve-style":"taxi",

"taxi-direction":"vertical",

"opacity":0.8

}

}

],



layout:{

name:"preset",

fit:true,

padding:80

}


});





cy.on(
"tap",
"node",
event=>{


const node =
event.target.data();



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
