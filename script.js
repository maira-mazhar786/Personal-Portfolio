const words = [
    "Web Developer",
    "Frontend Developer",
    "React Learner",
    "Computer Science Student"
];

let i = 0;

function changeText() {
    document.getElementById("typing-text").innerHTML = words[i];
    i++;

    if (i == words.length) {
        i = 0;
    }
}

changeText();

setInterval(changeText, 2000);