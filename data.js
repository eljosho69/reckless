const atlas = {

nodes:[

{
id:"tawheed",
label:"Tawheed",
type:"theology",
x:400,
y:300,
description:
"Central theological foundation concerning divine unity, God's nature, attributes, and the metaphysical basis of Islamic belief."
},

{
id:"dilemma",
label:"Islamic Dilemma",
type:"theology",
x:400,
y:80,
description:
"Argument examining tensions between Islamic claims about revelation and competing theological positions."
},

{
id:"aisha",
label:"Aisha Hadith",
type:"hadith",
x:590,
y:220,
description:
"Historical discussion surrounding reports about Aisha's age, transmission, authenticity, and interpretation."
},

{
id:"freewill",
label:"Free Will",
type:"philosophy",
x:520,
y:500,
description:
"Exploration of qadar, divine omniscience, human agency, and responsibility."
},

{
id:"science",
label:"Science",
type:"epistemology",
x:280,
y:500,
description:
"Relationship between scientific knowledge, revelation, cosmology, and the natural world."
},

{
id:"prophecy",
label:"Continuity of Prophecy",
type:"theology",
x:210,
y:220,
description:
"Exploration of prophetic continuity from earlier prophets through Muhammad."
}

],


edges:[

{
source:"dilemma",
target:"aisha"
},

{
source:"aisha",
target:"freewill"
},

{
source:"freewill",
target:"science"
},

{
source:"science",
target:"prophecy"
},

{
source:"prophecy",
target:"dilemma"
},


// center connections

{
source:"tawheed",
target:"dilemma"
},

{
source:"tawheed",
target:"aisha"
},

{
source:"tawheed",
target:"freewill"
},

{
source:"tawheed",
target:"science"
},

{
source:"tawheed",
target:"prophecy"
}

]

};
