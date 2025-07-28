function lepYear(value) {
  const remembar = value % 4;

  if (remembar == 0) {
    return true  +' ' + "this leap years";
  }
  else{
    return false +' '+ "this not leap years";
  }
}
const userLeapYear = lepYear(2017);
console.log(userLeapYear);

const dadiuser = lepYear(2025);
console.log(dadiuser);