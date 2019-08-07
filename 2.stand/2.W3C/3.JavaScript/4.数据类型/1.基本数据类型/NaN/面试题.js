var num = parseFloat("px12.5"); //->num=NaN
if (num == 12.5) {
  //->NaN==12.5
  console.log(12.5);
} else if (num == NaN) {
  //->NaN==NaN
  console.log(NaN);
} else if (typeof num === "number") {
  //typeof NaN="number" ->"number"==="number"
  console.log("number");
} else {
  console.log("no");
}
