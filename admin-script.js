document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".btn-burger");
  const navabr = document.querySelector(".navbar");
  const btnAdd = document.querySelector(".btnAdd");
  const btnEdit = document.querySelector(".btnEdit");
  const btnDone = document.querySelector(".done");
  const btnCmt = document.querySelector(".btnCmt");
  const btnDelete = document.querySelector(".btnDelete");
  const btns = document.querySelector(".btns");
  var connector = new ActiveXObject("ADODB.Connection");
  var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";



  burger.addEventListener("click", function () {
    if (navabr.classList.contains("expn")) {
      navabr.classList.remove("expn");
    } else {
      navabr.classList.add("expn");
    }
  });
  // function bigger(e) {
  //   var siblings = Array.from(e.parentElement.children).filter(
  //     (child) => child !== e
  //   );
  //   e.addEventListener("click", function () {
  //     console.log(siblings, e);
  //     e.style.width = "80%";
  //     e.style.height = "22rem";
  //     siblings.forEach((i) => {
  //       i.style.width = "0";
  //       i.style.display = "none";
  //     });
  //     btnDone.style.display = "block";

  //     setTimeout(() => {
  //       btnDone.style.bottom = "5rem";
  //     }, 300);
  //   });
  // }

  // function smaller(e) {
  //   var siblings = Array.from(e.parentElement.children).filter(
  //     (child) => child !== e
  //   );

  //   btnDone.addEventListener("click", function () {
  //     e.style.width = "35%";
  //     e.style.height = "10rem";
  //     siblings.forEach((i) => {
  //       i.style.display = "inline";
  //       i.style.width = "35%";
  //     });

  //     btnDone.style.bottom = "-5rem";
  //     setTimeout(() => {
  //       btnDone.style.display = "none";
  //     }, 300);
  //     console.log("clicked");
  //   });
  // }

  function expend(selected) {
    var siblings = Array.from(selected.parentElement.children).filter(
      (child) => child !== selected
    );
    console.log(siblings, selected);
    siblings.forEach((i) => {
      i.style.width = "0";
      i.style.display = "none";
    });
    setTimeout(() => {
      selected.style.width = "80%";
      selected.style.height = "22rem";
    }, 100);

    btnDone.style.display = "block";

    setTimeout(() => {
      btnDone.style.bottom = "5rem";
    }, 300);
  }
  function close(selected) {
    var siblings = Array.from(selected.parentElement.children).filter(
      (child) => child !== selected
    );
    selected.style.width = "35%";
    selected.style.height = "10rem";
    siblings.forEach((i) => {
      i.style.display = "flex";
      i.style.width = "35%";
    });
    btnDone.style.bottom = "-5rem";
    setTimeout(() => {
      btnDone.style.display = "none";
    }, 300);
    console.log("clicked");
  }

  //---------Open---------------

  btnAdd.addEventListener("click", function () {
    expend(btnAdd);
  });
  btnEdit.addEventListener("click", function () {
    expend(btnEdit);
  });
  btnCmt.addEventListener("click", function () {
    expend(btnCmt);
  });
  btnDelete.addEventListener("click", function () {
    expend(btnDelete);
  });

  //---------Close----------------

  btnDone.addEventListener("click", function () {
    close(btnAdd);
  });
  btnDone.addEventListener("click", function () {
    close(btnEdit);
  });
  btnDone.addEventListener("click", function () {
    close(btnCmt);
    btnDone.addEventListener("click", function () {
      close(btnDelete);
    });
  });
});
