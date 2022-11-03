
let varemail = prompt("Join our mailing list to receive recipes ahead of everyone else! Just add your email below")
console.log(varemail)
let readback;
    if (confirm(`Just check, your email address is ${varemail} is that right?`) == true) {
        alert("Welcome to the best mailing list around!");
    } else {
        alert("Please refresh your page, then we can try again...");
    }
