let errorMsgs = document.querySelectorAll(".error");
let userNameInput = document.querySelector('#name');
let userNameLabel = document.querySelector("label[for='name']");
let emailInput = document.querySelector('#email');
let emailLabel = document.querySelector("label[for='email']");
let passwordInput = document.querySelector('#password');
let passwordLabel = document.querySelector("label[for='password']");
let confirmPasswordInput = document.querySelector('#confirm-password');
let confirmPasswordLabel = document.querySelector("label[for='confirm-password']");
let dateOfBirthInput = document.querySelector('#date-of-birth');
let dietPreferencesInput = document.querySelector('#diet-preferences');



userNameInput.classList.remove('required-input');
emailInput.classList.remove('required-input');
passwordInput.classList.remove('required-input');
confirmPasswordInput.classList.remove('required-input');
dateOfBirthInput.classList.remove('required-input');
dietPreferencesInput.classList.remove('required-input');


document.querySelector(".signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Please make sure your passwords match");
        userNameLabel.classList.add("movedUp");
        emailLabel.classList.add("movedUp");
        passwordLabel.classList.add("movedUp");
        return;
    }
    if (userNameInput.value === '') {
        errorMsgs[0].textContent = 'Name is required';
        userNameInput.classList.add('required-input');
        errorMsgs[0].classList.remove('hidden');
    } else {
        errorMsgs[0].classList.add('hidden');
        userNameInput.classList.remove('required-input');
        userNameLabel.classList.remove("movedUp");
    }

    if (emailInput.value === '') {
        errorMsgs[1].textContent = 'Email is required';
        emailInput.classList.add('required-input');
        errorMsgs[1].classList.remove('hidden');
    } else {
        errorMsgs[1].classList.add('hidden');
        emailInput.classList.remove('required-input');
        emailLabel.classList.remove("movedUp");
    }

    if (passwordInput.value === '') {
        errorMsgs[2].textContent = 'Password is required';
        passwordInput.classList.add('required-input');
        errorMsgs[2].classList.remove('hidden');
    } else {
        errorMsgs[2].classList.add('hidden');
        passwordInput.classList.remove('required-input');
        passwordLabel.classList.remove("movedUp");
    }

    if (confirmPasswordInput.value === '') {
        errorMsgs[3].textContent = 'Confirm Password is required';
        confirmPasswordInput.classList.add('required-input');
        errorMsgs[3].classList.remove('hidden');
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        errorMsgs[3].textContent = 'Passwords do not match';
        errorMsgs[3].classList.remove('hidden');
    } else {
        errorMsgs[3].classList.add('hidden');
        confirmPasswordInput.classList.remove('required-input');
        confirmPasswordLabel.classList.remove('movedUp');
    }


    if (!sexInputs[0].checked && !sexInputs[1].checked) {
        errorMsgs[4].textContent = 'Please select your sex';
        errorMsgs[4].classList.remove('hidden');
    } else {
        errorMsgs[4].classList.add('hidden');
    }

    if (dateOfBirthInput.value === '') {
        errorMsgs[5].textContent = 'Date of birth is required';
        dateOfBirthInput.classList.add('required-input');
        errorMsgs[5].classList.remove('hidden');
    } else {
        errorMsgs[5].classList.add('hidden');
        dateOfBirthInput.classList.remove('required-input');
    }



    if (dietPreferencesInput.value === 'none') {
        errorMsgs[6].textContent = 'Please select your diet preferences';
        dietPreferencesInput.classList.add('required-input');
        errorMsgs[6].classList.remove('hidden');
    } else {
        errorMsgs[6].classList.add('hidden');
        dietPreferencesInput.classList.remove('required-input');
    }

    if (
        !userNameInput.value ||
        !emailInput.value ||
        !dateOfBirthInput.value ||
        !dietPreferencesInput.value ||
        !(sexInputs[0].checked || sexInputs[1].checked)
    ) {
        alert("Please fill out all required fields");
        return;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Please make sure your passwords match");
        return;
    }

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = userNameInput.value;
    let td2 = document.createElement("td");
    td2.innerText = emailInput.value;
    let td3 = document.createElement("td");
    let genderSelected = '';
    if (sexInputs[0].checked) {
        genderSelected = 'Male';
    } else if (sexInputs[1].checked) {
        genderSelected = 'Female';
    }
    td3.innerText = genderSelected;
    let td4 = document.createElement("td");
    td4.innerText = dateOfBirthInput.value;
    let td5 = document.createElement("td");
    td5.innerText = dietPreferencesInput.value;
    let td6 = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");
    td6.appendChild(deleteButton);
    let td7 = document.createElement("td")
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener('click', function () {
        toggleModal(editButton);
    });
    td7.appendChild(editButton);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    document.querySelector("tbody").appendChild(tr);
    userNameInput.value = "";
    emailInput.value = "";
    dateOfBirthInput.value = "";
    dietPreferencesInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    sexInputs[0].checked = false;
    sexInputs[1].checked = false;

    deleteButton.addEventListener("click", function () {
        let row = deleteButton.closest("tr");
        row.remove();
    });

});

userNameInput.addEventListener('input', function () {
    errorMsgs[0].classList.add('hidden');
    userNameInput.classList.remove('required-input');

});

emailInput.addEventListener('input', function () {
    errorMsgs[1].classList.add('hidden');
    emailInput.classList.remove('required-input');
});

passwordInput.addEventListener('input', function () {
    errorMsgs[2].classList.add('hidden');
    passwordInput.classList.remove('required-input');
});

confirmPasswordInput.addEventListener('input', function () {
    errorMsgs[3].classList.add('hidden');
    confirmPasswordInput.classList.remove('required-input');
});
let sexInputs = document.querySelectorAll('input[name="gender"]');
sexInputs[0].addEventListener('input', function () {
    errorMsgs[4].classList.add('hidden');
});

sexInputs[1].addEventListener('input', function () {
    errorMsgs[4].classList.add('hidden');
});

dateOfBirthInput.addEventListener('input', function () {
    errorMsgs[5].classList.add('hidden');
    dateOfBirthInput.classList.remove('required-input');
});

dietPreferencesInput.addEventListener('input', function () {
    errorMsgs[6].classList.add('hidden');
    dietPreferencesInput.classList.remove('required-input');
});


userNameInput.addEventListener("input", function () {
    if (userNameInput.value === "") {
        userNameLabel.classList.remove("movedUp");
    } else {
        userNameLabel.classList.add("movedUp");
    }
});

emailInput.addEventListener("input", function () {
    if (emailInput.value === "") {
        emailLabel.classList.remove("movedUp");
    } else {
        emailLabel.classList.add("movedUp");
    }
});

passwordInput.addEventListener("input", function () {
    if (passwordInput.value === "") {
        passwordLabel.classList.remove("movedUp");
    } else {
        passwordLabel.classList.add("movedUp");
    }
});

confirmPasswordInput.addEventListener("input", function () {
    if (confirmPasswordInput.value === "") {
        confirmPasswordLabel.classList.remove("movedUp");
    } else {
        confirmPasswordLabel.classList.add("movedUp");
    }
});

let tableRowElement;

function toggleModal(element) {
    tableRowElement = element.closest("tr");
    let userName = tableRowElement.getElementsByTagName('td')[0].textContent;
    let email = tableRowElement.getElementsByTagName('td')[1].textContent;
    let sex = tableRowElement.getElementsByTagName('td')[2].textContent;
    let dob = tableRowElement.getElementsByTagName('td')[3].textContent;
    let diet = tableRowElement.getElementsByTagName('td')[4].textContent;

    document.getElementById('username').value = userName;
    document.getElementById('emailSecond').value = email;
    document.getElementById('sex').value = sex.toLowerCase();
    document.getElementById('dob').value = dob;
    document.getElementById('diet').value = diet;

    openModal();
}

function saveInfo() {
    let userName = document.getElementById('username').value;
    let email = document.getElementById('emailSecond').value;
    let sex = document.getElementById('sex').value;
    let dob = document.getElementById('dob').value;
    let diet = document.getElementById('diet').value;

    tableRowElement.getElementsByTagName('td')[0].textContent = userName;
    tableRowElement.getElementsByTagName('td')[1].textContent = email;
    tableRowElement.getElementsByTagName('td')[2].textContent = sex.charAt(0).toUpperCase() + sex.slice(1);
    tableRowElement.getElementsByTagName('td')[3].textContent = dob;
    tableRowElement.getElementsByTagName('td')[4].textContent = diet;

    closeModal();
}

function openModal() {
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("exampleModal").style.display = "block";
    document.getElementById("exampleModal").classList.add("show");
}

function closeModal() {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("exampleModal").style.display = "none";
    document.getElementById("exampleModal").classList.remove("show");
}

document.querySelector('.close-button').addEventListener('click', event => {
    event.preventDefault();
    closeModal();
});

document.querySelector('#edit-form').addEventListener('submit', event => {
    event.preventDefault();
    saveInfo();
});
