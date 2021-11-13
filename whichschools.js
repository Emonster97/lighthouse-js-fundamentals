const whichSchool  = function (age) {  
if (age <= 12) {
  return "Elementary School"
} else if (age <= 18) {
  return "Secondary School"
}
  else {
    return "Lighthouse Labs"
  }
}
console.log(whichSchool(8));