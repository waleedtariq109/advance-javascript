function applySaleTax(taxRate, price) {
  return price + price * taxRate;
}

const saleTax1 = applySaleTax.bind(null, 0.01);
console.log(saleTax1(200));

const saleTax2 = applySaleTax.bind(null, 0.5);
console.log(saleTax2(870));

const saleTaxPakistan = applySaleTax.bind(null, 273667);
console.log(saleTaxPakistan(20));
