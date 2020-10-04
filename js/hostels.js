elements = document.getElementsByClassName("redirect");

var myFunction = function() {
    console.log("Came to my function");
    window.location.href = "registration.html";
};

for (var i = 0; i < elements.length; i++) {
    console.log("Clicked book");
    elements[i].addEventListener('click', myFunction, false);
}