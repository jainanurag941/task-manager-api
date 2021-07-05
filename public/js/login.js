const userLogin = document.querySelector('form');
const input1 = document.querySelector('#email');
const input2 = document.querySelector('#password');

userLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input1.value;
    const password = input2.value;

    params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            email,
            password
        })
    }
    fetch('/users/login', params).then((response) => {
        if(!response.ok){
            alert('Invalid Email Address or Password')
        } else {
            location.href = "/dashboard"
            return response.json()
        }
    }).then((data) => {
        console.log(data);
    })
})