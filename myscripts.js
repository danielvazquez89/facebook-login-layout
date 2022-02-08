function validateSignUp() {
    let radio = "";
    if (Male.checked == true) {
        radio = 'male';
    } else if (Female.checked == true) {
        radio = 'female';
    } else if (custom.checked == true) {
        radio = 'custom';
    }
    const data = {
        firstName: document.getElementById('name').value,

        lastName: document.getElementById('last-name').value,

        phone: document.getElementById('tel').value,

        password: document.getElementById('password').value,

        birthday: document.getElementById('day').value + '-' + document.getElementById('month').value + '-' + document.getElementById('year').value,

        gender: radio
    }
    if (data.firstName === "" || data.lastName === "" || data.phone === "" || data.password === "" || data.birthday === "" || data.gender === "") {
        alert("Rellene todos los campos");
    } else {
        alert(JSON.stringify(data));
    }
}

function hideModal() {
    const modal = document.querySelector('#myDiv');
    modal.classList.remove('show');
}

function showModal() {
    const modal = document.querySelector('#myDiv');
    modal.classList.add('show');
}
