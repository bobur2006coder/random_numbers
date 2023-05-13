let answerCircle = document.querySelector(".answer_h");

let btn = document.querySelector(".box_btn");


let ranDom = () => {
    let oneInp = document.querySelector("#input_one");
    let twoInp = document.querySelector("#input_two");
    min = Number(oneInp.value);
    max = Number(twoInp.value);
    if (min==false || max==false ) {
        alert("siz max yoki min ni to`ldirmadingiz")
        return;
    }else if (min>max){
        alert("min son max dan kichik bo`lishi kerak")
        return
    }else if(min=="E" || max=="E" || min=="e" || max=="e" ){
        alert("siz harf kirgazdingiz")
    }
    const answer = Math.floor(Math.random() * (max - min + 1))
    answerCircle.textContent = answer;
}

btn.addEventListener("click", ranDom);












