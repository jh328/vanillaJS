const start = document.querySelector("#start");

function lottoStart(){
    const lottoNumbers = [];
    while (lottoNumbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) +1;
        if (!lottoNumbers.includes(randomNum)) {
            lottoNumbers.push(randomNum);
        }
    }
    return lottoNumbers;
}

console.log(lottoStart());


start.addEventListener("click", lottoStart);



