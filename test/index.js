const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

const nominalValue = document.getElementById("nominalValue");
const interestCoupon = document.getElementById("interestCoupon");
const couponFrequency = document.getElementById("couponFrequency");

calculate.addEventListener("click", function () {
  console.log(nominalValue.value, interestCoupon.value, couponFrequency.value);
  let ratio = (nominalValue.value * interestCoupon.value) / 100 / couponFrequency.value;
  result.value = ratio;
  console.log(ratio);
});
