const atlas = {

layout:{
    type:"tree",
    direction:"TB",      // Top → Bottom
    fixed:true,
    nodeShape:"square",
    edgeStyle:"orthogonal",
    spacingX:180,
    spacingY:120
},

theme:{
    background:"#070B14",
    grid:false,

    node:{
        shape:"square",
        width:170,
        height:60,
        border:"#5EF2FF",
        borderWidth:2,
        background:"#0F172A",
        text:"#E8F9FF",
        glow:"#00E5FF",
        glowBlur:20,
        shadow:true
    },

    edge:{
        color:"#66F7FF",
        width:2,
        glow:"#00FFFF",
        glowBlur:12,
        arrows:false
    }
},

nodes:[

{
id:"tawheed",
label:"Tawheed",
level:0
},

{
id:"dilemma",
label:"Islamic Dilemma",
level:1
},

{
id:"freewill",
label:"Free Will",
level:1
},

{
id:"science",
label:"Science",
level:2
},

{
id:"prophecy",
label:"Continuity of Prophecy",
level:2
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
