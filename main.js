const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d');
const characanvas = document.getElementById('characanvas');
const charactx= characanvas.getContext('2d');


const newbtn = document.getElementById("newbtn");

const selectdiv = document.getElementById("selectdiv");

let username;

let lovepoint = {Fusina:0,Andrew:0,Lauren:0,Robert:0,Lewis:0,Lion:0};

let scene = 0;

let bgm;
let effect;

window.onload = function(){

    if (window.matchMedia( "(min-width: 768px)" ).matches) {
        canvas.width = "1200";
        canvas.height = "675";

        ctx.fillRect(0, 0, 1200, 675);

        let iseventlistneradded=false;

        const targetArea = document.getElementById("standard");
        targetArea.addEventListener('mouseup', () => {
            if(!iseventlistneradded){
                title();

                iseventlistneradded=true;
            }
        });
        ctx.font = "30px serif"
        ctx.fillStyle = "white";
        ctx.fillText("画面を押してスタート！", 450, 300);
    } else {
        ctx.fillRect(0, 0, 360, 600);

        let iseventlistneradded=false;

        const targetArea = document.getElementById("standard");
        targetArea.addEventListener('mouseup', () => {
            if(!iseventlistneradded){
                title();
    
                iseventlistneradded=true;
            }
        });
        ctx.font = "20px serif"
        ctx.fillStyle = "white";
        ctx.fillText("画面を押してスタート！", 70, 300);
    }

    
}

function title(){
    bgm = new Audio('sounds/bgm/yume.mp3');
    bgm.loop = true;
    bgm.play(); 
    document.getElementById("title").innerHTML = "フラークア王国の舞踏会";
    continuearea.style.visibility = 'hidden';
    var image = new Image();
        image.onload = function() {
            ctx.drawImage(image, 0, 0,1200,675);
            ctx.fillStyle = "rgba(" + [72, 72, 72, 0.5] + ")";
            ctx.fillRect(0, 0, 1200, 675);  
        }
    image.src = "images/background/Grand-hall-of-the-royal-palace2.jpg";
    newbtn.style.visibility = 'visible';
}

newbtn.onclick = function(){
    effect = new Audio('sounds/effects/決定ボタンを押す7.mp3');
    effect.play();
    document.getElementById("title").innerHTML = "";
    newbtn.style.visibility = 'hidden';
    if (!window.matchMedia( "(min-width: 768px)" ).matches) {
        continuearea.style.width = "300px";
        hukkatunojumonntext.style.width = "230px";
    }
    hukkatunojumonntext.focus();
    continuearea.style.visibility = 'visible';
    let hukkatunojumonn = document.getElementById("hukkatunojumonn");
    hukkatunojumonn.innerHTML = "名前を入力してね"
    hukkatunojumonnenter.onclick = function(){
        effect = new Audio('sounds/effects/決定ボタンを押す7.mp3');
        effect.play();
        function escape(string){
            return string.replace(/&/g, '&lt;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, "&#x27;");
        }
        username = escape(hukkatunojumonntext.value);
        continuearea.style.visibility = 'hidden';
        newbtn.style.visibility = 'hidden';
        scene0();
    }
}

const hukkatunojumonnenter = document.getElementById("hukkatunojumonnenter");
const hukkatunojumonntext = document.getElementById("hukkatunojumonntext");
const continuearea = document.getElementById("continuearea");


let episode;
let storydiv = document.getElementById("storydiv");
let storytext = document.getElementById("storytext");