



let add = document.getElementById("add");
let formDiv = document.querySelector(".formshow");
let form = document.querySelector("form");
let closeBTn = document.getElementById("close");
const Submit = document.querySelector("#form");
var user = [];
var btns = document.querySelectorAll(".search-container button");

//  form input

var date = document.querySelector("#date");
var Account = document.querySelector("#Account");
var Comments = document.querySelector("#Comments");
var Amount = document.querySelector("#Amount");
var PaidBuy = document.querySelector("#PaidBuy");
var ExpenseBuy = document.querySelector("#ExpenseBuy");
var update = document.querySelector("#update");
var submitB = document.querySelector("#submit");

console.log(submitB);
closeBTn.addEventListener("click", close);
function close() {
  formDiv.classList.add("d-none");
}

add.addEventListener("click", function () {
  formDiv.classList.remove("d-none");
  form.style.margin = "20px 0px 0px 0px";
  update.classList.add("filter");
  submitB.removeAttribute ("disabled", "disabled");
  update.setAttribute("disabled", "disabled");
  submitB.classList.add("filter");
});

if (localStorage.getItem("Exdata") != null) {
  user = JSON.parse(localStorage.getItem("Exdata"));
}

Submit.addEventListener("submit", function (e) {
  e.preventDefault();
  storeData();
  close();
  showdata();
});

function storeData() {
  user.push({
    date: date.value,
    Account: Account.value,
    Comments: Comments.value,
    Amount: Amount.value,
    PaidBuy: PaidBuy.value,
    ExpenseBuy: ExpenseBuy.value,
    id: user.length,
  });

  localStorage.setItem("Exdata", JSON.stringify(user));
}

var tbody = document.getElementsByTagName("tbody")[0];
let filterA = user;
var filter = "";

btns.forEach(function (b, index) {
  b.addEventListener("click", function () {
    if (b.innerHTML.trim() == "Expensive") {
      filter = "Office Expense";
    }

    if (b.innerHTML.trim() == "Petty Cash") {
      filter = "Petty Cash";
    }

    if (b.innerHTML.trim() == "Common Expense") {
      filter = "Common Expense";
    }
    filterA = [];
    user.filter(function (item) {
      tbody.innerHTML = "";
      if (item.ExpenseBuy == filter) {
        filterA.push(item);
      }
    });
    filterA.forEach(function (d, index) {
      tbody.innerHTML += `
  <tr index=${d.id}>
  <th>${d.date}</th>
  <td>${d.Account}</td>
  <td>${d.Comments}</td>
  <td>${d.Amount}</td>
  <td>${d.PaidBuy}</td>
  <td>${d.ExpenseBuy}</td>
  <td>
  <svg
    id="edi"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-pen-fill mx-1"
    viewBox="0 0 16 16"
  >
    <path
      d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
    />
  </svg>
  <svg
    id="del"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-trash"
    viewBox="0 0 16 16"
  >
    <path
      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
    />
    <path
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
    />
  </svg>
  </td>
  </tr>
  `;
      del(document.querySelectorAll("#del"));
      edi(document.querySelectorAll("#edi"));
    });

    if (b.innerHTML.trim() == "All") {
      tbody.innerHTML = "";
      filterA = [];
      filterA = user;
      filterA.forEach(function (d, index) {
        tbody.innerHTML += `
      <tr index=${d.id}>
      <th>${d.date}</th>
      <td>${d.Account}</td>
      <td>${d.Comments}</td>
      <td>${d.Amount}</td>
      <td>${d.PaidBuy}</td>
      <td>${d.ExpenseBuy}</td>
      <td>
      <svg
        id="edi"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pen-fill mx-1"
        viewBox="0 0 16 16"
      >
        <path
          d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
        />
      </svg>
      <svg
        id="del"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
        />
        <path
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
        />
      </svg>
      </td>
      </tr>
      `;
        del(document.querySelectorAll("#del"));
        edi(document.querySelectorAll("#edi"));
      });
    }

    if (b.innerHTML.trim() == "Today") {
      let date = new Date();
      user.filter(function (item) {
        if (item.date == `2023-0${date.getMonth() + 1}-0${date.getDate()}`) {
          filterA = [];
          filterA.push(item);
        }
        tbody.innerHTML = "";
        filterA.forEach(function (d, index) {
          tbody.innerHTML += `
        <tr index=${d.id}>
        <th>${d.date}</th>
        <td>${d.Account}</td>
        <td>${d.Comments}</td>
        <td>${d.Amount}</td>
        <td>${d.PaidBuy}</td>
        <td>${d.ExpenseBuy}</td>
        <td>
        <svg
          id="edi"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pen-fill mx-1"
          viewBox="0 0 16 16"
        >
          <path
            d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
          />
        </svg>
        <svg
          id="del"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
          />
          <path
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
          />
        </svg>
        </td>
        </tr>
        `;
          del(document.querySelectorAll("#del"));
          edi(document.querySelectorAll("#edi"));
        });
      });
    }
  });
});

function showdata() {
  tbody.innerHTML = "";
  user.forEach(function (d, index) {
    tbody.innerHTML += `
<tr index=${d.id}>
<th>${d.date}</th>
<td>${d.Account}</td>
<td>${d.Comments}</td>
<td>${d.Amount}</td>
<td>${d.PaidBuy}</td>
<td>${d.ExpenseBuy}</td>
<td>
<svg
  id="edi"
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-pen-fill mx-1"
  viewBox="0 0 16 16"
>
  <path
    d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
  />
</svg>
<svg
  id="del"

  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-trash"
  viewBox="0 0 16 16"
>
  <path
    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
  />
  <path
    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
  />
</svg>
</td>
</tr>
`;

    del(document.querySelectorAll("#del"));
    edi(document.querySelectorAll("#edi"));
  });
}

function del(del) {
  del.forEach(function (delB, index) {
    delB.addEventListener("click", function () {
      var number = Number(
        delB.parentElement.parentElement.getAttribute("index")
      );
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          delB.parentElement.parentElement.remove();
          user.splice(user[number], 1);
    
          localStorage.setItem("Exdata", JSON.stringify(user));
          showdata();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

   
   
    });
  });
}

function edi(edi) {
  edi.forEach(function (ediB, index) {
    ediB.addEventListener("click", function () {
      formDiv.classList.remove("d-none");
      update.classList.remove("filter");
      submitB.setAttribute("disabled", "disabled");
      update.removeAttribute("disabled", "disabled");
      submitB.classList.add("filter");

      number = Number(ediB.parentElement.parentElement.getAttribute("index"));
      user.find(function (item) {
        if (item.id == number) {
          var date = document.querySelector("#date");
          var Account = document.querySelector("#Account");
          var Comments = document.querySelector("#Comments");
          var Amount = document.querySelector("#Amount");
          var PaidBuy = document.querySelector("#PaidBuy");
          var ExpenseBuy = document.querySelector("#ExpenseBuy");
          date.value = item.date;
          Account.value = item.Account;
          Comments.value = item.Comments;
          Amount.value = item.Amount;
          PaidBuy.value = item.PaidBuy;
          ExpenseBuy.value = item.ExpenseBuy;
          const update = document.querySelector("#update");
          update.addEventListener("click", function (e) {
            e.preventDefault();
            item = {
              date: date.value,
              Account: Account.value,
              Comments: Comments.value,
              Amount: Amount.value,
              PaidBuy: PaidBuy.value,
              ExpenseBuy: ExpenseBuy.value,
              id: number,
            };
            user.splice(number, 1, item);
            localStorage.setItem("Exdata", JSON.stringify(user));

            formDiv.classList.add("d-none");
            showdata();
          });
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  showdata();
});

