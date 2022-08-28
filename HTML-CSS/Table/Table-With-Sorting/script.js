// Creating data
const data = [
  { no: 1, name: "Mohammad Mohsin", field: "Web Developer", salary: "50,000" },
  { no: 2, name: "Abdul Momin", field: "Digital Market", salary: "65,000" },
  { no: 3, name: "Musheer Uddin", field: "Data Entry", salary: "35,000" },
  { no: 4, name: "Shamsuddin", field: "Government", salary: "40,000" },
  { no: 5, name: "Shaista Parveen", field: "Teacher", salary: "22,000" },
];

  const tBody = document.getElementById("my-tbody");
  for (let i = 0; i < data.length; i++) {
    const row = `<tr>
  <td>${data[i].no}</td>
  <td>${data[i].name}</td>
  <td>${data[i].field}</td>
  <td>${data[i].salary}</td>
  </tr>`;

    tBody.innerHTML += row;
  }

  
// Adding sorting functionality
const th = document.getElementsByTagName("th");
// console.log('th:', th[0])

for (let c = 0; c < th.length; c++) {
  th[c].addEventListener("click", item(c));
}

function item(c) {
  return function () {
    sortTable(c);
  };
}

function sortTable(c) {
  let table = document.getElementById("myTable");
  let rows, i, x, y, shouldSwitch;
  let switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[c];
      y = rows[i + 1].getElementsByTagName("td")[c];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
