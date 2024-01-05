

let ChatBot = {
    "Hello": "Hi There!  <br>",
    "hello": "Hi There! <br>",
    "Hi": "Hi There! <br>",
    "hi": "Hi There! <br>",
    "Hii": "Hi There! <br>",
    "hii": "Hi There! <br>",
    "hlo": "Hi There! <br>",
    "Hlo": "Hi There! <br>", 
    "": "Please type something ! how can i help you ?",
    "Automotive Parts and Accessories": "Could you explain us in brief about your requirement? <br>",
    "automotive parts and accessories": "Could you explain us in brief about your requirement?<br>",
    "Electric Products/Assemblies": "Could you explain us in brief about your requirement <br>",
    "electric products/assemblies": "Could you explain us in brief about your requirement <br>",
    "Sheet Metal and Accessories": "Could you explain us in brief about your requirement <br>",
    "sheet metal and accessories": "Could you explain us in brief about your requirement <br>",
    "Plastics and Rubber": "Could you explain us in brief about your requirement <br>",
    "plastics and rubber": "Could you explain us in brief about your requirement <br>",
    "Forging and Machining": "Could you explain us in brief about your requirement<br>",
    "forging and machining": "Could you explain us in brief about your requirement<br>",
    "Gears and Shafts": "Could you explain us in brief about your requirement <br>",
    "gears and shafts": "Could you explain us in brief about your requirement<br>"

};


let input = document.getElementById('msg');
let btn = document.getElementById('btn');
let chat = document.getElementById('chat');


btn.addEventListener('click', function sentmsg() {
    let paraDiv = document.createElement('div');
    chat.append(paraDiv);
    paraDiv.classList.add('divStyle');

    let para = document.createElement('span');
    paraDiv.append(para);
    para.classList.add('msgPara');

    para.innerHTML = input.value;
    input.value = "";

    //ChatBotSide


    if (para.innerHTML in ChatBot) {
        setTimeout(() => {

            let botDiv = document.createElement('div');
            botDiv.classList.add('botStyle');
            chat.append(botDiv);
            let botPara = document.createElement('span');
            botPara.classList.add('botMsgPara');
            botDiv.append(botPara); 


            botPara.innerHTML += ChatBot[para.innerHTML];
        }, 1000);
    } else {
        setTimeout(() => {

            let botDiv = document.createElement('div');
            botDiv.classList.add('botStyle');
            chat.append(botDiv);
            let botPara = document.createElement('span');
            botDiv.append(botPara);
            botPara.classList.add('botMsgPara');
            botPara.innerHTML += "SORRY! I Don't Understand :( <br>";
        }, 1000);
    }

})

