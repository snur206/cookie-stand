'use strict';

// Shop hours Global Array
// eslint-disable-next-line no-unused-vars
let salesSection = document.getElementById('Sales');
let shopHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
// eslint-disable-next-line no-unused-vars
let allShops = [];

// from MDN
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




// WINDOW INTO THE DOM
// function Shop(name, minCustomers, maxCustomers, avgCookies) {
//   this.name = name;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookies = avgCookies;
// }

let shopSection = document.getElementById('shopProfiles');

console.dir(shopSection);


// #pragma: OBJECY LITERALS

let seattle = {
  name: 'Seattle',
  hourlyCookies: [],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  getCookienum: function() {
    for (let i = 0; i < shopHours.length; i++) {
      let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNum = Math.round(customerNum * this.avgCookies);
      this.hourlyCookies.push(cookieNum);
    }
  } ,
  display: function() {
    let cityName = document.createElement('h2');
    salesSection.appendChild(cityName);
    cityName.textContent = this.name;

    let list = document.createElement('ul');
    salesSection.appendChild(list);
    for (let i = 0; i < shopHours.length; i ++) {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.textContent = `${shopHours[i]}:  ${this.hourlyCookies[i]} cookies`;
    }
  }
};

seattle.getCookienum();
console.log(seattle);
seattle.display();

let tokyo = {
  name: 'Tokyo',
  hourlyCookies: [],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  getCookienum: function() {
    for (let i = 0; i < shopHours.length; i++) {
      let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNum = Math.round(customerNum * this.avgCookies);
      this.hourlyCookies.push(cookieNum);
    }
  } ,
  display: function() {
    let cityName = document.createElement('h2');
    salesSection.appendChild(cityName);
    cityName.textContent = this.name;

    let list = document.createElement('ul');
    salesSection.appendChild(list);
    for (let i = 0; i < shopHours.length; i ++) {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.textContent = `${shopHours[i]}: ${this.hourlyCookies[i]} cookies`;
    }

  }
};

tokyo.getCookienum();
console.log(tokyo);
tokyo.display();

let dubai = {
  name: 'Dubai',
  hourlyCookies: [],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  getCookienum: function() {
    for(let i = 0; i < shopHours.length; i++) {
      let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNum = Math.round(customerNum * this.avgCookies);
      this.hourlyCookies.push(cookieNum);
    }
  } ,
  display: function() {
    let cityName = document.createElement('h2');
    salesSection.appendChild(cityName);
    cityName.textContent = this.name;

    let list = document.createElement('ul');
    salesSection.appendChild(list);
    for (let i = 0; i < shopHours.length; i++) {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.textContent = `${shopHours[i]}: ${this.hourlyCookies[i]} cookies`;
    }
  }
};
dubai.getCookienum();
console.log(dubai);
dubai.display();

let paris = {
  name: 'Paris',
  hourlyCookies: [],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  getCookienum: function() {
    for(let i = 0; i < shopHours.length; i++) {
      let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNum = Math.round(customerNum * this.avgCookies);
      this.hourlyCookies.push(cookieNum);
    }
  } ,
  display: function() {
    let cityName = document.createElement('h2');
    salesSection.appendChild(cityName);
    cityName.textContent = this.name;

    let list = document.createElement('ul');
    salesSection.appendChild(list);
    for (let i = 0; i < shopHours.length; i++) {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.textContent = `${shopHours[i]}: ${this.hourlyCookies[i]} cookies`;
    }
  }
};

paris.getCookienum();
console.log(paris);
paris.display();

let lima = {
  name: 'Lima',
  hourlyCookies: [],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  getCookienum: function() {
    for(let i = 0; i < shopHours.length; i++) {
      let customerNum = randomCustomer(this.minCustomers, this.maxCustomers);
      let cookieNum = Math.round(customerNum * this.avgCookies);
      this.hourlyCookies.push(cookieNum);
    }
  } ,
  display: function() {
    let cityName = document.createElement('h2');
    salesSection.appendChild(cityName);
    cityName.textContent = this.name;

    let list = document.createElement('ul');
    salesSection.appendChild(list);
    for (let i = 0; i < shopHours.length; i++) {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.textContent = `${shopHours[i]}: ${this.hourlyCookies[i]} cookies`;
    }
  }
};

lima.getCookienum();
console.log(lima);
lima.display();
