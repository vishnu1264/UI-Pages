let loginPage1 = document.getElementById("loginPage1");
let loginPage2 = document.getElementById("loginPage2");
let signupForm = document.getElementById("signupForm");
let dashboard = document.getElementById("dashboard");
let validationForm = document.getElementById("validationForm");

function accessLogin1()
{
    loginPage1.style.display = "block";
    loginPage2.style.display = "none";
    signupForm.style.display = "none";
    dashboard.style.display = "none";
    validationForm.style.display = "none";
}

function accessLogin2()
{
    loginPage1.style.display = "none";
    loginPage2.style.display = "block";
    signupForm.style.display = "none";
    dashboard.style.display = "none";
    validationForm.style.display = "none";
}

function accessSignup()
{
    loginPage1.style.display = "none";
    loginPage2.style.display = "none";
    signupForm.style.display = "block";
    dashboard.style.display = "none";
    validationForm.style.display = "none";
}

function accessDashboard()
{
    loginPage1.style.display = "none";
    loginPage2.style.display = "none";
    signupForm.style.display = "none";
    dashboard.style.display = "block";
    validationForm.style.display = "none";
}

function accessValidationForm()
{
    loginPage1.style.display = "none";
    loginPage2.style.display = "none";
    signupForm.style.display = "none";
    dashboard.style.display = "none";
    validationForm.style.display = "block";
}