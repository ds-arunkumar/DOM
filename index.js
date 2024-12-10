let tHeader = ["Name", "Age", "Designation", "Salary", "City", "Country"];
let tRow1 = ["Arun", "30", "Web Developer", "$9000", "Chennai", "India"];
let tRow2 = ["Kumar", "20", "React Developer", "$2000", "Chennai", "India"];
let tRow3 = ["Priya", "18", "Angular Developer", "$8000", "Chennai", "India"];
let tRow4 = ["Akshaya", "10", "Student", "$200", "Chennai", "India"];
let tRow5 = ["Akshika", "4", "Student", "$-", "Chennai", "India"];
let tRow6 = ["Pranav", "2", "Nil", "$-", "Chennai", "India"];
let tRow7 = ["Dhansika", "2", "Nil", "$-", "Chennai", "India"];

let container = document.querySelector(".container");
const table = document.createElement("table");
const tr = document.createElement("tr");
table.appendChild(tr);

tHeader.forEach((heading) => {
  const th = document.createElement("th");
  th.textContent = heading;
  tr.appendChild(th);
});

const tr1 = document.createElement("tr");
table.appendChild(tr1);

tRow1.forEach((row1) => {
  const td = document.createElement("td");
  tr1.appendChild(td);
  td.textContent = row1;
});

const tr2 = document.createElement("tr");
table.appendChild(tr2);

tRow2.forEach((row2) => {
  const td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = row2;
});

const tr3 = document.createElement("tr");
table.appendChild(tr3);

for (let row3 = 0; row3 < tRow3.length; row3++) {
  const td = document.createElement("td");
  td.textContent = tRow3[row3];
  tr3.appendChild(td);
}

const tr4 = document.createElement("tr");
table.appendChild(tr4);

let row4 = 0;
while (row4 < tRow4.length) {
  const td = document.createElement("td");
  td.textContent = tRow4[row4];
  tr4.appendChild(td);
  row4++;
}

const tr5 = document.createElement("tr");
table.appendChild(tr5);

let row5 = 0;
do {
  const td = document.createElement("td");
  td.textContent = tRow5[row5];
  tr5.appendChild(td);
  row5++;
} while (row5 < tRow5.length);

const tr6 = document.createElement("tr");
table.appendChild(tr6);

for (let row6 in tRow6) {
  const td = document.createElement("td");
  td.textContent = tRow6[row6];
  tr6.appendChild(td);
}

const tr7 = document.createElement("tr");
table.appendChild(tr7);

for (let row7 of tRow7) {
  const td = document.createElement("td");
  td.textContent = row7;
  tr7.appendChild(td);
}

container.appendChild(table);
