// import express and make app
const { application } = require("express");
const express = require("express");
const app = express();
const port = 8000;

// import faker
const faker = require('faker');
const userCompany = [];

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.password();
        if (!User.id) {
            User.id = 1;
        } else {
            User.id++;
        }
        this.id = User.id;

    }
    
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
        if (!Company.id) {
            Company.id = 1;
        } else {
            Company.id++;
        }
        this.id = Company.id;

        

    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    userCompany.push(new User());
    userCompany.push(new Company());
    res.json(userCompany);
    // res.json(new Company());
});



// console.log(new User());
// console.log(new User());
// console.log(new Company());
// console.log(new Company());

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );








