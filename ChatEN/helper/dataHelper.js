import numeral from "numeral";

function calDiscount(price, discountPercentage) {
  if (
    typeof price !== "number" ||
    typeof discountPercentage !== "number" ||
    price < 0 ||
    discountPercentage < 0 ||
    discountPercentage > 100
  ) {
    throw new Error("Invalid input.");
  }
  const discountAmount = price * discountPercentage;
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}
function formatPrice(number) {
  try {
    if (typeof number != "number") {
      number = parseInt(number);
    }
    const newNumber = numeral(number).format("0,0").toString() + " ₫";
    return newNumber;
  } catch (err) {
    console.log(err);
  }
}
function formatPercent(number) {
  try {
    const newNumber = number * 100;
    return newNumber;
  } catch (err) {
    console.log(err);
  }
}
function formatNumber(number) {
  try {
    const newNumber = numeral(number).format("0,0").toString();
    return newNumber;
  } catch (err) {
    console.log(err);
  }
}
function formatPoints(number) {
  try {
    const newNumber = numeral(number).format("0,0") + " Coin".toString();
    return newNumber;
  } catch (err) {
    console.log(err);
  }
}
function calBeDiscount(price, discountPercentage) {
  if (typeof price != "number") {
    price = parseInt(price);
  }
  if (typeof discountPercentage != "number") {
    discountPercentage = parseFloat(discountPercentage);
  }
  if (
    typeof price !== "number" ||
    typeof discountPercentage !== "number" ||
    price < 0 ||
    discountPercentage < 0 ||
    discountPercentage > 100
  ) {
    return -1;
  }
  const discountAmount = (price * (1 - discountPercentage)) ;
  return discountAmount;
}
function formatDate(inputDateString) {
  const inputDate = new Date(inputDateString);
  const day = inputDate.getUTCDate().toString().padStart(2, "0");
  const month = (inputDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = inputDate.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
function viewDiscount(input) {
  return input * 100;
}
export {
  calDiscount,
  formatPercent,
  formatNumber,
  formatPrice,
  formatPoints,
  calBeDiscount,
  formatDate,
  viewDiscount,
};
