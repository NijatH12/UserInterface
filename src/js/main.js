const newCustomer = document.querySelector(".new");
const oldCustomer = document.querySelector(".old");
const inputs = document.querySelectorAll(".input");
const male = document.querySelector(".male");
const female = document.querySelector(".female");
const maleCheck = document.querySelector("#male-check");
const femaleCheck = document.querySelector("#female-check");
const age = document.querySelector(".age");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const phone = document.querySelector(".phone");
const mailInfo = document.querySelector(".mail-info");
const mail = document.querySelector(".mail");
const nameInfo = document.querySelector(".name-info");
const surnameInfo = document.querySelector(".surname-info");
const newCustomerContainer = document.querySelector(".new-customer-container");
const oldCustomerContainer = document.querySelector(".old-customer-container");
const btn = document.querySelector(".btn");
const regex = /^[a-zA-zƏəĞğİıÖöŞşÜüÇç]*$/;
const regexNum = /^(0\d{2}[-\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2}))$/;
const phoneInfo = document.querySelector(".phone-info");
const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const ageINfo = document.querySelector(".age-info");
const mainInfo = document.querySelector(".main-info");

newCustomer.addEventListener("click", () => {
  newCustomer.classList.add("active");
  oldCustomer.classList.remove("active");
  newCustomerContainer.classList.remove("display");
  oldCustomerContainer.classList.add("display");
});

male.addEventListener("click", () => {
  maleCheck.checked = true;
  femaleCheck.checked = false;
});
female.addEventListener("click", () => {
  maleCheck.checked = false;
  femaleCheck.checked = true;
});
name.addEventListener("change", () => {
  if (name.value.trim().length != 0) {
    if (!regex.test(name.value.trim())) {
      nameInfo.textContent = "Düzgün ad qeyd edin";
    } else {
      nameInfo.textContent = "";
    }
  } else {
    nameInfo.textContent = "Xananı doldurun";
  }
});
surname.addEventListener("change", () => {
  if (surname.value.trim().length != 0) {
    if (!regex.test(surname.value.trim())) {
      surnameInfo.textContent = "Düzgün soyad qeyd edin";
    } else {
      surnameInfo.textContent = "";
    }
  } else {
    surnameInfo.textContent = "Xananı doldurun";
  }
});
phone.addEventListener("change", () => {
  if (phone.value.trim().length != 0) {
    if (!regexNum.test(phone.value.trim())) {
      phoneInfo.textContent = "Düzgün mobil nömrə qeyd edin";
    } else {
      phoneInfo.textContent = "";
    }
  } else {
    phoneInfo.textContent = "Xananı doldurun";
  }
});
mail.addEventListener("change", () => {
  if (mail.value.trim().length != 0) {
    if (!regexMail.test(mail.value.trim())) {
      mailInfo.textContent = "Düzgün mail qeyd edin";
    } else {
      mailInfo.textContent = "";
    }
  } else {
    mailInfo.textContent = "Xananı doldurun";
  }
});
age.addEventListener("change", () => {
  if (age.value.length == 0) {
    ageINfo.textContent = "Yaşı düzgün qeyd edin";
  }
});

btn.addEventListener("click", () => {
  const pastNames = localStorage.getItem("Name");
  const pastSurnames = localStorage.getItem("Surname");
  const pastMails = localStorage.getItem("Mail");
  const pastPhones = localStorage.getItem("Phone");
  const pastAges = localStorage.getItem("Age");
  const pastGender = localStorage.getItem("Gender");
  if (
    regex.test(name.value.trim()) &&
    name.value.length != 0 &&
    regex.test(surname.value.trim()) &&
    surname.value.length != 0 &&
    regexMail.test(mail.value.trim()) &&
    mail.value.length != 0 &&
    regexNum.test(phone.value.trim()) &&
    phone.value.length != 0 &&
    age.value != 0
  ) {
    if (
      Boolean(pastNames) &&
      Boolean(
        pastSurnames &&
          Boolean(pastMails) &&
          Boolean(pastAges) &&
          Boolean(pastPhones) &&
          Boolean(pastGender)
      )
    ) {
      localStorage.setItem("Name", [pastNames, name.value.trim()]);
      localStorage.setItem("Surname", [pastSurnames, surname.value.trim()]);
      localStorage.setItem("Mail", [pastMails, mail.value.trim()]);
      localStorage.setItem("Phone", [pastPhones, phone.value.trim()]);
      localStorage.setItem("Age", [pastAges, age.value.trim()]);
      if (maleCheck.checked) {
        localStorage.setItem("Gender", [pastGender, "Kişi"]);
      } else {
        localStorage.setItem("Gender", [pastGender, "Qadın"]);
      }
    } else {
      localStorage.setItem("Name", name.value.trim());
      localStorage.setItem("Surname", surname.value.trim());
      localStorage.setItem("Mail", mail.value.trim());
      localStorage.setItem("Phone", phone.value.trim());
      localStorage.setItem("Age", age.value.trim());
      if (maleCheck.checked) {
        localStorage.setItem("Gender", "Kişi");
      } else {
        localStorage.setItem("Gender", "Qadın");
      }
    }
    name.value = "";
    surname.value = "";
    age.value = "";
    mail.value = "";
    phone.value = "";
    maleCheck.checked = false;
    femaleCheck.checked = false;
    mainInfo.textContent = "";
  } else {
    mainInfo.textContent = "Bütün xanaları doldurun";
  }
});

oldCustomer.addEventListener("click", () => {
  oldCustomerContainer.innerHTML = "";
  const namelocal = localStorage.getItem("Name");
  const surnamelocal = localStorage.getItem("Surname");
  const maillocal = localStorage.getItem("Mail");
  const phonelocal = localStorage.getItem("Phone");
  const agelocal = localStorage.getItem("Age");
  const genderlocal = localStorage.getItem("Gender");
  newCustomer.classList.remove("active");
  oldCustomer.classList.add("active");
  newCustomerContainer.classList.add("display");
  oldCustomerContainer.classList.remove("display");
  if (namelocal != null) {
    const div = document.createElement("div");
    oldCustomerContainer.prepend(div);
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "20px";
    for (let index = 0; index < namelocal.split(",").length; index++) {
      let a = document.createElement("div");
      a.style.boxShadow = "1px 3px 4px lightgrey";
      a.style.fontFamily = "Times New Roman', Times, serif";
      a.style.fontSize = "18px";
      a.style.wordSpacing = "4px";
      a.style.padding = "10px";
      let names = document.createElement("p");
      let phones = document.createElement("p");
      let ages = document.createElement("p");
      let mails = document.createElement("p");
      let gender = document.createElement("p");
      let div1 = document.createElement("div");
      div1.className = "div1";
      a.className = "a";
      names.style.textTransform = "capitalize";
      names.textContent = `Ad:${namelocal.split(",")[index]}`;
      let surnames = document.createElement("p");
      surnames.style.textTransform = "capitalize";
      surnames.textContent = `Soyad:${surnamelocal.split(",")[index]}`;
      div1.style.display = "flex";
      div1.style.justifyContent = "space-between";
      names.style.width = "220px";
      names.className = "names";
      surnames.className = "surnames";
      ages.className = "ages";
      mails.className = "mails";
      phones.className = "phones";
      gender.className = "gender";
      surnames.style.width = "220px";
      ages.style.width = "100px";
      phones.style.width = "250px";
      mails.style.width = "250px";
      gender.style.width = "150px";
      ages.textContent = `Yaş:${agelocal.split(",")[index]}`;
      phones.textContent = `Nömrə:${phonelocal.split(",")[index]}`;
      mails.textContent = `Mail:${maillocal.split(",")[index]}`;
      gender.textContent = `Cins:${genderlocal.split(",")[index]}`;
      a.prepend(div1);
      div.prepend(a);
      div1.append(names);
      div1.append(surnames);
      div1.append(ages);
      div1.append(phones);
      div1.append(mails);
      div1.append(gender);
    }
  } else {
    const oldInfo = document.createElement("span");
    oldInfo.textContent = "Heç bir müştəri əlavə edilməyib.";
    oldInfo.style.fontSize = "18px";
    oldCustomerContainer.prepend(oldInfo);
  }
});
