const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 



const path = require("path");
app.set("views",path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/about", (req, res) => {
    res.render("about.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/pricing", (req, res) => {
    res.render("pricing.ejs");
});
app.get("/login", (req, res) => {
    const error = ""; 
    res.render('login', { error: error });
});
app.get("/sponsor", (req, res) => {
    res.render("sponsor.ejs");
});
app.get("/recipient", (req, res) => {
    res.render("recipient.ejs");
});

let formDataArray = [
    { name: "bhim", email: "bhim@gmail.com", number: 7688915749, password: "abc" }
];

app.post('/recipient', (req, res) => {
    const { name, email, number, password} = req.body;
    const formData = { name, email, number, password};
    formDataArray.push(formData);
    res.render("login.ejs");
});


let organizationDataArray = [];

app.post('/sponsor', (req, res) => {
    const { name, email, number, password } = req.body;
    const organizationData = { name, email, number, password };
    organizationDataArray.push(organizationData);
    res.render("login.ejs", { error: 'Account Created successfully.Try login.' });
});

app.post("/dashboard", (req, res) => {
    const { email, password } = req.body;
    const user = formDataArray.find(user => user.email === email && user.password === password);
    const organization = organizationDataArray.find(user => user.email === email && user.password === password);
    console.log(user);
    console.log(organization);
    if (user || organization) {
        res.render("dashboard", { message: 'Login successful', user });
    } else {
        res.render("login", { error: 'Invalid email or password. Please try again.' });
    }

});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});