document.addEventListener("DOMContentLoaded", function() {})

const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");

document.addEventListener("keydown", function(event) {
    if (event.code == 'Space') {
        dino.classList.add("jump");
        setTimeout(function() { dino.classList.remove("jump") }, 500)
    }
})
speed = 3
setInterval(function() {
        let dinoTop = parseInt(getComputedStyle(dino).top)
        let cactusLeft = parseInt(getComputedStyle(cactus).left)
        let count = parseInt(document.querySelector(".count").innerHTML)


        if (dinoTop > 98 && cactusLeft < 350 && cactusLeft > 250) {
            alert(` Game over, your record is ${count} points `)
            document.querySelector(".count").innerHTML = 0
        } else {
            count++;
            document.querySelector(".count").innerHTML = `${count}`
        }
        if (count > 100) { //доработать
            if (parseInt(getComputedStyle(cactus).left) > 1450) { console.log(1) }

        }
        cactus.style.cssText = ` background-image: url("images/cactus.png");
        background-size: cover;
        height: 50px;
        width: 50px;
        background-position: 50%;
        position: relative;
        top: 100px;
        left: 97%;
        animation: cactusRun ${speed}s infinite linear`

    },
    30)



// forEach просто перебирает элементы ничего не возвращая, то есть оригинальный массив не меняется
//map тоже перебирает элементы массива но возвращает новый массив