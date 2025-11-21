const wrapper = document.querySelector
('.wrapper');
const loginlink = document.querySelector
('.login-link');
const registerlink = document.querySelector
('.register-link');
const btnloginpopup = document.querySelector
('.btnlogin-popup');
const iconclose = document.querySelector
('.icon-close');

const inputField = document.getElementById('inputField');


registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnloginpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})

inputField.addEventListener('focus', () => {
    inputField.classList.add('active');
});

inputField.addEventListener('blur', () => {
    if (inputField.value === '') {
        inputField.classList.remove('active');
    }
});
