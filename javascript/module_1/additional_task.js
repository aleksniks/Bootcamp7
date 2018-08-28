// additional task

let sharm = 15;
let hurgada = 25;
let taba = 6;

let inputedPlaces = Number(prompt('Input necessary quantity of places, please'));
console.log(inputedPlaces);
console.log(typeof inputedPlaces);
if(inputedPlaces > 0 && Number.isInteger(inputedPlaces)) {
  console.log(inputedPlaces);

  if ( inputedPlaces <= taba ) {
    if (confirm('There is free place in group Taba. Do you want to be in this group?')) {
      alert('Hava a nice trip in group Taba');
    } else {
      alert ('We are sorry, come again to us!');
    }
  } else if ( inputedPlaces <= sharm ) {
    if (confirm('There is free place in group sharm. Do you want to be in this group?')) {
      alert('Hava a nice trip in group sharm');
    } else {
      alert ('We are sorry, come again to us!');
    }    

  } else if (inputedPlaces <= hurgada) {
    if (confirm('There is free place in group hurgada. Do you want to be in this group?')) {
      alert('Hava a nice trip in group hurgada');
    } else {
      alert ('We are sorry, come again to us!');
  } 
  } else {
    alert('Sorry, there is not such quantity of places!');
  }
} else{
  alert('Type error');
} 

