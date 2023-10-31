var addEmp = document.getElementById("addEpm");
var model = document.querySelector(".model");


//  gloabel btn start
var Id = document.querySelector("#id");
var nameE1 = document.querySelector("#name");
var lname = document.querySelector("#l-name");
var emailE1 = document.getElementById("email");
var officecode1 = document.querySelector("#office-code");
var jobtitle1 = document.querySelector("#job-title");
var imageEi = document.querySelector("#file");
var regBtn = document.querySelector("#regBtn");
var formrest = document.querySelector("#formrest");
var upadte = document.getElementById("update")
var userData = [];



formrest.onsubmit = function (e) {
    e.preventDefault();
    registrationData();
    showdata();
    formrest.reset();
    remove.click();
}
if (localStorage.getItem("userString") != null) {
    userData = JSON.parse(localStorage.getItem("userString"));
}


function registrationData() {
    userData.push({
        id: Id.value,
        name: nameE1.value,
        lname: lname.value,
        email: emailE1.value,
        code: officecode1.value,
        jobTitle: jobtitle1.value,
        imgEi: "download.jpg",

    })
    var userString = JSON.stringify(userData)
    localStorage.setItem('userString', userString)
}



// // data show in tabel


var tbody = document.getElementById("tbody")
function showdata() {
    tbody.innerHTML = "";
    userData.forEach(function (data, index) {
        tbody.innerHTML += `
           <tr index='${index}'>
           <td>${index + 1}</td>
           <td><img src="download.jpg" alt="" width="40px" height="40" style="border-radius: 50%;"></td>
       <td>${data.id}</td>
       <td>${data.name}</td>
       <td>${data.lname}</td>
       <td>${data.email}</td>
       <td>${data.code}</td>
       <td>${data.jobTitle}</td>
       <td>
       <button class="ediBtn" ><i class="fa fa-eye"></i> Edit</button>
       <button class="delBtn" style="background-color: #EE534F;" > <i class="fa fa-trash"></i> Delete</button>
       </td>
           </tr>
        `   ;

        // onclick="delBtn(this)"
    })
    var i;
    var alldelbtn = document.querySelectorAll(".delBtn");
    for (i = 0; i < alldelbtn.length; i++) {
        alldelbtn[i].onclick = function () {
            var tr = this.parentElement.parentElement;
            var id = tr.getAttribute("index");

            userData.splice(id, 1);
            localStorage.setItem("userString", JSON.stringify(userData));
            tr.remove()
            showdata();
        }
    }
    var alledibtn = document.querySelectorAll(".ediBtn");
    for (var i = 0; i < alledibtn.length; i++) {
        alledibtn[i].onclick = function () {
            model.classList.add("active")
            upadte.removeAttribute("disabled")
            regBtn.setAttribute("disabled", "disabled")
            var tr = this.parentElement.parentElement;
            var id = tr.getAttribute("index");
            var td = this.parentElement.parentElement.children
            idEdi = td[2].innerHTML
            nameEdi = td[3].innerHTML
            lnameEdi = td[4].innerHTML
            emailEdi = td[5].innerHTML
            codeEdi = td[6].innerHTML
            jobEdi = td[7].innerHTML
            Id.value = idEdi
            nameE1.value = nameEdi
            lname.value = lnameEdi
            emailE1.value = emailEdi
            officecode1.value = codeEdi
            jobtitle1.value = jobEdi
            var tr = this.parentElement.parentElement;
            var id = tr.getAttribute("index");
            upadte.onclick = function (e) {
                userData[id] = {
                    id: Id.value,
                    name: nameE1.value,
                    lname: lname.value,
                    email: emailE1.value,
                    code: officecode1.value,
                    jobTitle: jobtitle1.value,
                    imgEi: "download.jpg",
                }
                localStorage.setItem("userString",JSON.stringify(userData));
                e.preventDefault();
                formrest.reset("");
                showdata();
                update.removeAttribute('disabled')
                regBtn.setAttribute('disabled','disabled');
                remove.click();

            }


        }
    }

}








// hamburger
var remove = document.getElementById("hamburger");
remove.onclick = function () {
    model.classList.remove("active")
}
addEmp.onclick = function () {
    model.classList.add("active")
    regBtn.removeAttribute("disabled")
    upadte.setAttribute("disabled", "disabled")
}





document.addEventListener("DOMContentLoaded", function () {
    showdata();
})
