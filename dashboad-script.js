document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".btn-burger");
  const navabr = document.querySelector(".navbar");
  const table = document.querySelector(".table");
  const btnAdd = document.querySelector(".btnAdd");
  const btnRemove = document.querySelector(".btnRemove");
  var name = document.querySelector(".txtName");
  var gender = document.querySelector(".txtGender");
  var classroom = document.querySelector(".txtClassroom");
  const student = document.querySelector(".studentCount");
  var studentCount = 0;

  burger.addEventListener("click", function () {
    if (navabr.classList.contains("expn")) {
      navabr.classList.remove("expn");
    } else {
      navabr.classList.add("expn");
    }
  });
  btnAdd.addEventListener("click", function () {
    if (name.value == "") {
      alert("input your name");
    } else {
      const row = document.createElement("div");
      row.textContent = name.value;
      table.appendChild(row);
      table.lastChild.style.height = "0";
      table.lastChild.style.transform = "scaleY(0)";
      setTimeout(() => {
        table.lastChild.style.height = "4rem";
        table.lastChild.style.transform = "scaleY(1)";
      }, 200);
      name.value = "";
      studentCount++;
      student.textContent = studentCount;
    }
  });
  btnRemove.addEventListener("click", function () {
    if (table.children.length > 1) {
      table.lastChild.style.height = "0";
      table.lastChild.style.transform = "scaleY(0)";
      setTimeout(() => {
        table.removeChild(table.lastChild);
      }, 200);

      studentCount--;
      student.textContent = studentCount;
    } else {
      alert("No more row");
    }
  });
});
