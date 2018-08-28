'use strict'
// main task
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const cancel = 'Canceled by the user';
const accessDenied = 'Access denied!';
const welcome = 'Welcome';

const inputedLogin = prompt('Input login, please');
const isLoginValid = inputedLogin === "" || inputedLogin;
if (isLoginValid) {  // ||
  if(inputedLogin === adminLogin) {
    const inputedPassword = prompt("Input password, please");
    const isPasswordValid = inputedPassword === "" || inputedPassword;
    if(isPasswordValid) {
      if(inputedPassword === adminPassword) {
        alert(welcome);
      }else {
        alert(accessDenied);
      }
    }else {
      alert(cancel);
    }
  }else {
    alert(accessDenied);
  }
}else {
  alert(cancel);
}
