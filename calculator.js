"use strict"

// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");
const amountField = document.getElementById("loan-amount");
const yearsField = document.getElementById("loan-years");
const rateField = document.getElementById("loan-rate");

/** Retrieves current form values and returns {amount, years, rate}. */
function getFormValues() {
  let amount = amountField.value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;

  // return an object with input form values
  console.log("returned object: ", { "amount": amount, "years": years, "rate": rate });
  return { amount, years, rate };
}

/** Calculate monthly payment and return. */
function calcMonthlyPayment(amount, years, rate) {
  let periodicInterestRate = rate / 12;
  let numOfPayments = years * 12;

  let fullCalculatedPayment = (amount * periodicInterestRate) / (1 - ((1 + periodicInterestRate) ** -(numOfPayments)));

  console.log("full monthly payment: ", fullCalculatedPayment);
  return fullCalculatedPayment;
}

/** Get form values, calculate & update display. */
function getFormValuesAndDisplayResults() {
  let formValues = getFormValues();
  let fullMonthlyPayment = calcMonthlyPayment(formValues.amount, formValues.years, formValues.rate);

  // round the monthly payment to 2 decimals
  let monthlyPayment = fullMonthlyPayment.toFixed(2);

  //add the payment to the HTML
  let paymentDisplay = document.querySelector("#calc-monthly-payment");
  paymentDisplay.innerText = "$" + monthlyPayment;
}

/** Set initial form values and show initial results. Called at app start. */
function setInitialValues() {
  amountField.value = 1000;
  yearsField.value = 1;
  rateField.value = 0.07;
}

/** Start: set form defaults & display; attach form submit event listener. */
function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);
