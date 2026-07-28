const atlas = {

nodes:[

{
id:"tawheed",
label:"Tawheed",
type:"theology",
description:
"Central theological foundation concerning divine unity, God's nature, attributes, and the metaphysical basis of Islamic belief."
},


{
id:"dilemma",
label:"Islamic Dilemma",
type:"theology",
description:
"Argument examining tensions between Islamic claims about revelation, previous scriptures, and competing theological positions."
},


{
id:"aisha",
label:"Aisha Hadith",
type:"hadith",
description:
"Historical discussion surrounding reports about Aisha's age at marriage, hadith transmission, authenticity, and interpretation."
},


{
id:"freewill",
label:"Free Will",
type:"philosophy",
description:
"Philosophical exploration of divine omniscience, qadar, human agency, causation, and responsibility."
},


{
id:"science",
label:"Science",
type:"epistemology",
description:
"Discussion concerning the relationship between scientific knowledge, revelation, cosmology, and explanations of the natural world."
},


{
id:"prophecy",
label:"Continuity of Prophecy",
type:"theology",
description:
"Exploration of prophetic continuity from earlier prophets through Muhammad, including revelation, succession, and finality."
},


{
id:"premises",
label:"Logical Premises",
type:"logic",
description:
"Breakdown of assumptions, arguments, and logical structures used within theological discussions."
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
source:"tawheed",
target:"science"
},

{
source:"tawheed",
target:"prophecy"
},


{
source:"dilemma",
target:"premises"
},

{
source:"aisha",
target:"premises"
},

{
source:"freewill",
target:"premises"
},

{
source:"science",
target:"premises"
},

{
source:"prophecy",
target:"premises"
}

]

};
