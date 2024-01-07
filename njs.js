function check() {
    let num = Math.floor(Math.random() * 10);
    var input = document.getElementById("number-input").value;
    input = Number(input);

    if (input === "") {
        document.getElementById("message").innerText = "Please enter a number and submit.";
    } else if (typeof input === 'number' && !isNaN(input)) {
        if (num < input) {
            document.getElementById("message").innerText = "Your number is greater than the Ten.";
        }
        else if (num>input){
            document.getElementById("message").innerText = "Your number is lessthan the One.";
        }
         else if (num === input) {
            document.getElementById("message").innerText = "Your guess is correct!👌";
        } else {
            document.getElementById("message").innerText = "Your guess is wrong.";
        }
    } else {
        document.getElementById("message").innerText = "Please enter a valid number.";
    }
}
