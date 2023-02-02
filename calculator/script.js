let equation = "";

let equal = () => {
    try {
        let str = document.getElementById("history").innerHTML;
        document.getElementById("output").innerHTML = eval(str);

    } catch (err) {
        document.getElementById("output").innerHTML = "Invalid"
    }
}

let deleteAll = () => {
    document.getElementById("history").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}

let deleteLast = () => {
    equation = equation.slice(0, equation.length - 1);
    document.getElementById("history").innerHTML = equation;
    try {
        equal();
    } catch (err) {
        document.getElementById("output").innerHTML = "invalid";
    }
}

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', (e) => {
        equation = document.getElementById("history").innerHTML;
        if (e.target.innerHTML == "=") {
            try {
                equal();
                document.getElementById("history").innerHTML = "";
            } catch (err) {
                document.getElementById("output").innerHTML = "invalid syntex";
            }
        }
        else if (e.target.innerHTML == "AC") {
            deleteAll();
        }
        else if (e.target.innerHTML == "DEL") {
            deleteLast();
        }
        else {
            document.getElementById("history").innerHTML += e.target.innerHTML;
            equal();
        }
    })
});
