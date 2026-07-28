const atlas = {


nodes:[

{
id:"islam",
label:"Islam",
type:"root",
description:
"Central topic connecting theological, historical, and philosophical discussions."
},


{
id:"aisha",
label:"Aisha Hadith",
type:"hadith",
description:
"Historical discussion surrounding reports about Aisha's age at marriage and the development of the hadith tradition."
},


{
id:"little",
label:"Joshua Little Analysis",
type:"academic",
description:
"Academic study examining the historical development, transmission, and dating of the Aisha hadith tradition."
},


{
id:"commonlink",
label:"Common Link Theory",
type:"academic",
description:
"Hadith critical method associated with identifying transmitters around whom traditions appear to expand."
},


{
id:"dilemma",
label:"Islamic Dilemma",
type:"theology",
description:
"Argument concerning the relationship between Islamic claims about previous revelation and later theological claims."
},


{
id:"premises",
label:"Logical Premises",
type:"logic",
description:
"Breakdown of assumptions and logical structure behind the argument."
}


],


edges:[

{
source:"islam",
target:"aisha"
},

{
source:"aisha",
target:"little"
},

{
source:"little",
target:"commonlink"
},


{
source:"islam",
target:"dilemma"
},

{
source:"dilemma",
target:"premises"
}


]

};