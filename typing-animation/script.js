const h2 = document.querySelector(".blinking__txt");
const cursor = document.querySelector(".cursor");

const typing = function (_, counter = 0) {
    const txt = "벌써 퇴사 하고 싶어요. 이 길이 제 길이 맞을까요..."

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