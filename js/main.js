let selectedRow = null;

function showAlert(message, className) {
  let div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  let container = document.querySelector(".container");
  let main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

function clearFiles() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollno").value = "";
}

document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.querySelector("#firstName").value;
  let LastName = document.querySelector("#lastName").value;
  let rollno = document.querySelector("#rollno").value;

  if (firstName == "" || LastName == "" || rollno == "") {
    showAlert("Please Fill Al", "danger");
  } else {
    if (selectedRow == null) {
      let list = document.querySelector("#student-list");
      let row = document.createElement("tr");

      row.innerHTML = `
      <td>${firstName}</td>
      <td>${LastName}</td>
      <td>${rollno}</td>
      <td>
      <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
      <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      `;
      list.appendChild(row);
      selectedRow = null;
      showAlert("Student added", "success");
    } else {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = LastName;
      selectedRow.children[2].textContent = rollno;
      selectedRow = null;
      showAlert("student info edited", "info");
    }
    clearFiles();
  }
});

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value =
      selectedRow.children[0].textContent;
    document.querySelector("#lastName").value =
      selectedRow.children[1].textContent;
    document.querySelector("#rollno").value =
      selectedRow.children[2].textContent;
  }
});

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("student data delete", "danger");
  }
});
