'use strict';

// #pragma: GLOBAL VARIABLES + WINDOW INTO DOM
// FOR LAB CREATE A GLOBAL ARRAY WITH SHOP HOURS
let shopHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
// eslint-disable-next-line no-unused-vars
let allShops = [];
let tableElem = document.getElementById('Sales-Table');

// from MDN
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



//**  DOM MANIPULATION STEP 1: WINDOW INTO THE DOM
// 1st option: document.getElementById ==> method for grabbing tag by its ID
// 2nd option: doucment.querySelector ==> first instance of the passed in tag, ID, or class in your HTML

function Shop(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
  this.totalPerDay = 0;

  allShops.push(this);
}
Shop.prototype.getCookienum = function() {
  for (let i = 0; i < shopHours.length; i++) {
    let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
    let cookieNum = Math.round(customerNum * this.avgCookies);
    this.hourlyCookies.push(cookieNum);
    this.totalPerDay += cookieNum;
  }
} ;
Shop.prototype.render = function() {
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let cityName = document.createElement('th');
  row1.appendChild(cityName);
  cityName.textContent = this.name;

  for (let i = 0; i < shopHours.length; i++) {
    let tableData = document.createElement('td');
    row1.appendChild(tableData);
    tableData.textContent = this.hourlyCookies[i];
  }
  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.totalPerDay;
  row1.appendChild(dailyTotal);
};
let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima =new Shop('Lima', 2, 16, 4.6);
console.log(allShops);



function makeHeader() {
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  let tableRow = document.createElement('td');
  tableRow.textContent = ' ';

  row1.appendChild(tableRow);






  for (let i = 0; i < shopHours.length; i++) {
    let tableData = document.createElement('td');
    row1.appendChild(tableData);
    tableData.textContent = shopHours[i];
  }
  let totalRow = document.createElement('td');
  totalRow.textContent = 'Daily Location Total';

  row1.appendChild(totalRow);
}
makeHeader();

function makeFooter() {
  let tableHeader = document.createElement('tr');
  tableHeader.textContent = 'Totals';
  let tableRow = document.createElement('tr');
  tableRow.appendChild(tableHeader);
  let grandTotals = 0;
  for (let i =0; i < shopHours.length; i++) {
    let hourlyTotals = 0;
    for (let j = 0; j < allShops.length; j++) {
      hourlyTotals += allShops[j].hourlyCookies[i];
      grandTotals += hourlyTotals;
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = hourlyTotals;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = grandTotals;
  tableRow.appendChild(tableHeader);
  tableElem.appendChild(tableRow);
}





seattle.getCookienum();
console.log(seattle);
seattle.render();



tokyo.getCookienum();
console.log(tokyo);
tokyo.render();


dubai.getCookienum();
console.log(dubai);
dubai.render();




paris.getCookienum();
console.log(paris);
paris.render();



lima.getCookienum();
console.log(lima);
lima.render();

makeFooter();
