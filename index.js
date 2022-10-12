function scuberGreetingForFeet(feet){
  let greeting = 'This one is on me!';
  if (feet<=400){
  return greeting;
  }
  else if (feet>400 && feet<=2000){
  greeting = 'That will be twenty bucks.'
  return greeting;
  }
  if (feet>2000 && feet<=2500){
  greeting = 'I will gladly take your thirty bucks.'
  return greeting;
  }
  else 
  greeting = 'No can do.'
  return greeting;
}
function ternaryCheckCity(city){
  if (city === 'NYC'){
    return "Ok, sounds good."
  }
  else 
  return "No go."
}

function switchOnCharmFromTip(tip){
if (tip === "generous"){
  return "Thank you so much."
}
else if (tip === "not as generous"){
  return "Thank you."
}
else
return "Bye."
}