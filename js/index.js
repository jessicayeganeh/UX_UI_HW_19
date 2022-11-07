var string = "Welcome! I'm Jess Yeganeh. This is my portfolio.";
var welcome = string.split("");
var el = document.getElementById('welcome');
(function animate() {
    // el.innerHTML += welcome.shift()
    if(welcome.length>0) {
        el.innerHTML += welcome.shift();
    } else {
        // clearTimeout(welcome, 40)
        el.innerHTML = ""
        welcome = string.split("")
    }
// welcome.length > 0 ? el.innerHTML += welcome.shift() : clearTimeout(running); 
var running = setTimeout(animate, 100);
})();
