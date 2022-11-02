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

  let firstCell = document.createElement('th');
  row1.appendChild(firstCell);

  for (let i = 0; i < shopHours.length; i++) {
    let tableData = document.createElement('th');
    row1.appendChild(tableData);
    tableData.textContent = shopHours[i];
  }
}
makeHeader();





// #pragma: OBJECY LITERALS

// let seattle = {
//   name: 'Seattle',
//   hourlyCookies: [],
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   totalPerDay: 0,
//   getCookienum: function() {
//     for (let i = 0; i < shopHours.length; i++) {
//       let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
//       let cookieNum = Math.round(customerNum * this.avgCookies);
//       this.hourlyCookies.push(cookieNum);
//       this.totalPerDay += cookieNum;
//     }
//   } ,
//   render: function() {
//     let cityName = document.createElement('h2');
//     salesSection.appendChild(cityName);
//     cityName.textContent = this.name;

//     let list = document.createElement('ul');
//     salesSection.appendChild(list);
//     for (let i = 0; i < shopHours.length; i ++) {
//       let listItem = document.createElement('li');
//       list.appendChild(listItem);
//       listItem.textContent = `${shopHours[i]}:  ${this.hourlyCookies[i]} cookies`;
//     }
//   }
// };

seattle.getCookienum();
console.log(seattle);
seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   hourlyCookies: [],
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   totalPerDay: 0,
//   getCookienum: function() {
//     for (let i = 0; i < shopHours.length; i++) {
//       let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
//       let cookieNum = Math.round(customerNum * this.avgCookies);
//       this.hourlyCookies.push(cookieNum);
//       this.totalPerDay += cookieNum;
//     }
//   } ,
//   render: function() {
//     let cityName = document.createElement('h2');
//     salesSection.appendChild(cityName);
//     cityName.textContent = this.name;

//     let list = document.createElement('ul');
//     salesSection.appendChild(list);
//     for (let i = 0; i < shopHours.length; i ++) {
//       let listItem = document.createElement('li');
//       list.appendChild(listItem);
//       listItem.textContent = `${shopHours[i]}: ${this.hourlyCookies[i]} cookies`;
//     }

//   }
// };

tokyo.getCookienum();
console.log(tokyo);
tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   hourlyCookies: [],
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   totalPerDay: 0,
//   getCookienum: function() {
//     for(let i = 0; i < shopHours.length; i++) {
//       let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
//       let cookieNum = Math.round(customerNum * this.avgCookies);
//       this.hourlyCookies.push(cookieNum);
//       this.totalPerDay += cookieNum;
//     }
//   } ,
//   render: function() {
//     let cityName = document.createElement('h2');
//     salesSection.appendChild(cityName);
//     cityName.textContent = this.name;

//     let list = document.createElement('ul');
//     salesSection.appendChild(list);
//     for (let i = 0; i < shopHours.length; i++) {
//       let listItem = document.createElement('li');
//       list.appendChild(listItem);
//       listItem.textContent = `${shopHours[i]}: ${this.hourlyCookies[i]} cookies`;
//     }
//   }
// };
dubai.getCookienum();
console.log(dubai);
dubai.render();

// let paris = {
//   name: 'Paris',
//   hourlyCookies: [],
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookies: 2.3,
//   totalPerDay: 0,
//   getCookienum: function() {
//     for(let i = 0; i < shopHours.length; i++) {
//       let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
//       let cookieNum = Math.round(customerNum * this.avgCookies);
//       this.hourlyCookies.push(cookieNum);
//       this.totalPerDay += cookieNum;
//     }
//   } ,

// DOM CREATE A TABLE


paris.getCookienum();
console.log(paris);
paris.render();

// *** DOM MANIPULATION CREATE A TABLE ***




// let lima = {
//   name: 'Lima',
//   hourlyCookies: [],
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   totalPerDay: 0,
//   getCookienum: function() {
//     for(let i = 0; i < shopHours.length; i++) {
//       let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
//       let cookieNum = Math.round(customerNum * this.avgCookies);
//       this.hourlyCookies.push(cookieNum);
//       this.totalPerDay += cookieNum;
//     }
//   } ,
//   render: function() {
//     let cityName = document.createElement('h2');
//     salesSection.appendChild(cityName);
//     cityName.textContent = this.name;

//     let list = document.createElement('ul');
//     salesSection.appendChild(list);
//     for (let i = 0; i < shopHours.length; i++) {
//       let listItem = document.createElement('li');
//       list.appendChild(listItem);
//       listItem.textContent = `${shopHours[i]}: ${this.hourlyCookies[i]} cookies`;
//     }
//   }
// };

lima.getCookienum();
console.log(lima);
lima.render();


