const btn = ["%", "/", "AC", "DEL", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "."];

let mainString = "";

let setButton = () => {
    mainString = `<div class="output_screen">
                <p id="history"></p>
                <p id="output"></p>
                </div>`;
    btn.forEach(eachItem => {
        mainString += `<button class="btn">${eachItem}</button>`
    });
    return mainString += `<button class="btn" name="equal">=</button>`;
}
document.getElementById("container").innerHTML = setButton();