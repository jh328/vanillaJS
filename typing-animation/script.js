const h2 = document.querySelector(".blinking__txt");
const cursor = document.querySelector(".cursor");

const typing = function (_, counter = 0) {
    const txt = "안녕하세요. 송준한입니담."

    setInterval(() => {

        if (txt.length === counter) {
            cursor.classList.add('blink_animate');
            return;
        }

        h2.textContent += txt[counter];
        counter++;
    }, 100);
};

window.addEventListener('load', typing);