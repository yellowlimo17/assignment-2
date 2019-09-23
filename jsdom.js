// Sample Code for #part0
let zero = document.querySelector("#part00");
let hello = document.createTextNode("Hello world!");
// zero.appendChild(hello);
/*--- begin answer part00 ---*/
let myname = "Austin DeBoer";
/*--- end answer part00 ---*/
if (typeof myname !== "undefined") {
  let textBefore = document.createTextNode("My name is ");
  zero.appendChild(textBefore);
  let boldNode = document.createElement("b");
  let name = document.createTextNode(myname);
  zero.appendChild(boldNode);
  boldNode.appendChild(name);
  let textAfter = document.createTextNode(". This work is solely mine! ");
  zero.appendChild(textAfter);

  zero.appendChild(
    document.createTextNode(
      "I understand that " +
        "copying someone else's code and claiming to be my own work " +
        "or sharing my code with someone else is a "
    )
  );
  let honesty = document.createElement("b");
  honesty.appendChild(document.createTextNode("violation"));
  zero.appendChild(honesty);
  zero.appendChild(document.createTextNode(" of academic honesty."));
}

// Code for part 1
let atoms = [
  "Aluminum",
  "Barium",
  "Carbon",
  "Dubnium",
  "Erbium",
  "Fluor",
  "Gallium",
  "Hydrogen",
  "Helium",
  "Iron",
  "Krypton",
  "Lithium",
  "Magnesium",
  "Nitrogen",
  "Oxygen",
  "Palladium",
  "Radon",
  "Silicon",
  "Titanium",
  "Uranium",
  "Vanadium",
  "Xenon",
  "Zinc"
];

let N = atoms.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atoms[pos1];
  atoms[pos1] = atoms[pos2];
  atoms[pos2] = tmp;
}

/*--- begin answer part01 ---*/

let par = document.querySelector("#part01");
let ch = document.createElement("ol");

par.appendChild(ch);
for(i=0; i < N; i++)
{
  let grch = document.createElement("li");
  ch.appendChild(grch);
  grch.innerHTML = atoms[i];
}
/*--- end answer part01 ---*/

// Code for part 2
// Don't rename the following two variables!
/*--- begin answer part02 ---*/
const myDomesticTravel = {
  destination: "Clearwater, FL",
  dateOfVisit: "June 2016",
  isAbroad: false,
};
const myInternationalTravel = {
  destination: "Jaco, Costa Rica",
  dateOfVisit: "August 2014",
  isAbroad: true,
};

let par2 = document.querySelector("#part02");
let chDom = document.createElement("p");
let chInt = document.createElement("p");
chDom.innerHTML = "I had fun in " + myDomesticTravel.dateOfVisit + " when I visited " + myDomesticTravel.destination;
chInt.innerHTML = "I had fun in " + myInternationalTravel.dateOfVisit + " when I visited " + myInternationalTravel.destination;
chDom.classList.add("domestic");
chInt.classList.add("international");

par2.appendChild(chDom);
par2.appendChild(chInt);

let pic = document.createElement("img");
pic.src = "https://www.govisitcostarica.com/images/photos/full-jaco-beach-complete-view.jpg";
par2.append(pic);
let hyper = document.createElement("a");
hyper.href = "https://www.govisitcostarica.com";
pic.append(hyper);
/*--- end answer part02 ---*/

// Code for part 3
let atomObjects = [
  { name: "Aluminum", weight: 26.982 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Dubnium", weight: 268 },
  { name: "Erbium", weight: 167.26 },
  { name: "Fluor", weight: 18.988 },
  { name: "Gallium", weight: 69.723 },
  { name: "Hydrogen", weight: 1.008 },
  { name: "Helium", weight: 4.0026 },
  { name: "Iron", weight: 55.845 },
  { name: "Krypton", weight: 83.798 },
  { name: "Lithium", weight: 6.94 },
  { name: "Magnesium", weight: 24.305 },
  { name: "Nitrogen", weight: 14.007 },
  { name: "Oxygen", weight: 15.999 },
  { name: "Palladium", weight: 106.42 },
  { name: "Radon", weight: 222 },
  { name: "Silicon", weight: 28.085 },
  { name: "Titanium", weight: 47.867 },
  { name: "Uranium", weight: 238.03 },
  { name: "Vanadium", weight: 50.942 },
  { name: "Xenon", weight: 131.29 },
  { name: "Zinc", weight: 65.38 }
];
N = atomObjects.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atomObjects[pos1];
  atomObjects[pos1] = atomObjects[pos2];
  atomObjects[pos2] = tmp;
}

/*--- begin answer part03 ---*/
//const heavy = elementNodeReference.classList;
//const light = elementNodeReference.classList;

let par3 = document.querySelector("#part03");
let ch3 = document.createElement("ol");

par3.appendChild(ch3);

for(let l=0; l < atomObjects.length; l++)
{
  let grch3 = document.createElement("li");
  ch3.appendChild(grch3);
  if(atomObjects[l].weight > 150) { grch3.classList.add("heavy"); }
  else { grch3.classList.add("light"); }
  grch3.innerHTML = "" + atomObjects[l].name + " (weight: " + Math.round(10*atomObjects[l].weight)/10 + ")";
  
}
/*--- end answer part03 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
let par4 = document.querySelector("#part04");
let table = document.createElement("table");
table.border = 1;
par4.append(table);

let topRow = document.createElement("tr");
let atomEl = document.createElement("th");
atomEl.innerHTML = "Atom";
let weightEl = document.createElement("th");
weightEl.innerHTML = "Weight";
table.append(topRow);
topRow.append(atomEl);
topRow.append(weightEl);

for(let k = 0; k < atomObjects.length; k++)
{
  let row = document.createElement("tr");
  let name = document.createElement("td");
  let weight = document.createElement("td");
  if(atomObjects[k].weight > 150) {row.classList.add("heavy");}
  else {row.classList.add("light");}
  name.innerHTML = atomObjects[k].name;
  weight.innerHTML = atomObjects[k].weight;
  table.append(row);
  row.append(name);
  row.append(weight);
}
/*--- end answer part04 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
/*--- end answer part04 ---*/

// Code for part 5 (Extra credit)
/*--- begin answer part05 ---*/
/*--- end answer part05 ---*/
