const atlas = {

nodes:[

{
id:"tawheed",
label:"Tawheed",
type:"theology",
x:400,
y:80
},

{
id:"dilemma",
label:"Islamic Dilemma",
type:"theology",
x:590,
y:220
},

{
id:"freewill",
label:"Free Will",
type:"philosophy",
x:520,
y:500
},

{
id:"science",
label:"Science",
type:"epistemology",
x:280,
y:500
},

{
id:"prophecy",
label:"Continuity of Prophecy",
type:"theology",
x:210,
y:220
}

],

edges:[

{
source:"tawheed",
target:"freewill"
},

{
source:"freewill",
target:"prophecy"
},

{
source:"prophecy",
target:"dilemma"
},

{
source:"dilemma",
target:"science"
},

{
source:"science",
target:"tawheed"
}

]

};
