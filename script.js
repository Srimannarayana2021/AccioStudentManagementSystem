let studentsData = [];

async function loadStudents() {
  const url = "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    studentsData = await response.json();
    renderTable(studentsData);
   
  } catch (error) {
    console.error("❌ Failed to fetch students:", error);
  }
}

loadStudents();


function renderTable(students) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td><div style="display:flex; align-items:center; gap:8px;">
      <img src="${student.img_src}" alt="student photo" width="40" height="40" style="border-radius:50%;" />
      <span>${student.first_name} ${student.last_name}</span>
    </div></td>
            <td>${student.gender}</td>
            <td>${student.class}</td>
            <td>${student.marks}</td>
            <td>${student.passing ? 'Passing' : 'Failing'}</td>
            <td>${student.email}</td>
            `
            // <td><div><img src=${student.img_src} >${student.first_name} ${student.last_name}</div></td>
        tableBody.appendChild(row);
    });
}

function sortAtoZ() {
    showMainTable()
    const sortedDate = [...studentsData].sort((a, b) => a.first_name.localeCompare(b.first_name));
    renderTable(sortedDate);
}

function sortZtoA() {
    showMainTable()
    const sortedDate = [...studentsData].sort((a, b) => b.first_name.localeCompare(a.first_name));
    renderTable(sortedDate);
}

function sortByMarksAsc() {
    showMainTable()
    const sortedDate = [...studentsData].sort((a, b) => a.marks - b.marks);
    renderTable(sortedDate);
}

function sortByPassing() {
    showMainTable()
    const sortedDate = [...studentsData].filter(student => student.passing);
    renderTable(sortedDate);
}

function sortByClass() {
    showMainTable()
    const sortedDate = [...studentsData].sort((a, b) => a.class - b.class);
    renderTable(sortedDate);
}

//The sorting functionality should show two tables for male and female students when sorting by gender.
function sortByGender() {
  // Hide the main table
  const originalTable = document.querySelector(".student-table");
  if (originalTable) {
    originalTable.style.display = "none";
  }

  // Show gender tables container
  document.getElementById("gender-tables").style.display = "block";

  // Separate male and female students
  const maleStudents = studentsData.filter(student => student.gender.toLowerCase() === "male");
  const femaleStudents = studentsData.filter(student => student.gender.toLowerCase() === "female");

  // Render into separate tables
  renderTableRows(maleStudents, "male-table-body");
  renderTableRows(femaleStudents, "female-table-body");
}

// 👇 Call this inside all your other sorting functions
function showMainTable() {
  // Show original table
  const originalTable = document.querySelector(".student-table");
  if (originalTable) {
    originalTable.style.display = "table";
  }

  // Hide gender tables
  document.getElementById("gender-tables").style.display = "none";
}


function renderTableRows(students, tableBodyId) {
  const tbody = document.getElementById(tableBodyId);
  tbody.innerHTML = ""; // clear old rows
   
  students.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td>
        <div style="display:flex; align-items:center; gap:8px;">
          <img src="${student.img_src}" alt="student photo" width="40" height="40" style="border-radius:50%;" />
          <span>${student.first_name} ${student.last_name}</span>
        </div>
      </td>
      <td>${student.gender}</td>
      <td>${student.class}</td>
      <td>${student.marks}</td>
      <td style="color:${student.passing ? 'green' : 'red'};">
        ${student.passing ? "Passing" : "Failing"}
      </td>
      <td>${student.email}</td>
    `;
    tbody.appendChild(row);

  });
}



//search bar functionality

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();

  // Filter students by first name, last name, or email
  const filteredStudents = studentsData.filter(student => {
    return (
      student.first_name.toLowerCase().includes(query) ||
      student.last_name.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query)
    );
  });

  // Clear previous table body
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  // Render filtered students
  filteredStudents.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td><div><img src="${student.img_src}" /> ${student.first_name} ${student.last_name}</div></td>
      <td>${student.gender}</td>
      <td>${student.class}</td>
      <td>${student.marks}</td>
      <td>${student.passing ? "Passing" : "Failing"}</td>
      <td>${student.email}</td>
    `;
    tableBody.appendChild(row);
  });
}
