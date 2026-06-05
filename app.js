


function sendMessage(){
    let myM = document.querySelector(".userInput").value
    let answerBot = "Привіт"
    let lowerM = myM.toLowerCase()

    addMessage(myM, "user")

    setTimeout(function(){
        if(lowerM.includes("привіт")){
            addMessage(answerBot, "bot")
        }else if(lowerM.includes("скажи") && lowerM.includes("мем")){
            addMessage("67🤙", "bot")
        }else if(lowerM.includes("клеш рояль")){
            addMessage("Цікавий факт: Найпопудярніша карта це--- Log:", "bot")
            document.querySelector(".chat").insertAdjacentHTML(
                "beforeend",
                `
                <img class="bot" src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyN3c0MTRzNGIydWEwMmxobXlrOTc5a3FiYzB5amo5eHYxODczc2RnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iDyV8bxy1A7unp7QdH/giphy.gif"></img>
                `
            )
        }else if(lowerM.includes("мем") && lowerM.includes("крім 67")){
            addMessage("Ось:", "bot")
            document.querySelector(".chat").insertAdjacentHTML(
                "beforeend",
                `
                <img class="bot" src="https://media.tenor.com/grK7jtRobfMAAAAM/grand-theft-auto-carl-johnson.gif"></img>
                `
            )
        }else if(lowerM.includes("що ти можеш")){
             addMessage("Ось список команд:", "bot")
             document.querySelector(".chat").insertAdjacentHTML(
                "beforeend",
                `
                <ul class="bot">
                <li>клеш рояль</li>
                <li>привіт</li>
                <li>скажи мем</li>
                <li>скажи мем крім 67</li>
                <li>що ти можеш?</li>
                </ul>
                `
            )
        }
        else{
            addMessage("Я вас не розумію😅", "bot")
        }
    },500)
}
document.querySelector(".send").onclick = sendMessage
let message = document.querySelector(".message")



function addMessage(text, sender){
document.querySelector(".chat").insertAdjacentHTML(
    "beforeend",
    `
     <div class="message ${sender}">${text}</div>
    `
)
}