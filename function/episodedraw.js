let iseventlistneradded=false;

let rebgm;

function episodedraw(){
    charactx.clearRect(0,0,600,700);

    if(!episode[0].bgm==""){
        bgm.pause();
        bgm = new Audio("sounds/bgm/"+episode[0].bgm+".mp3");
        bgm.loop = true;
        bgm.play();
    }

    var image = new Image();
    image.onload = function() {
        ctx.drawImage(image, 0, 0,1200,675);

        if(!episode[0].chara == ""){
            var charaimage = new Image();
            charaimage.onload = function() {
                if (!window.matchMedia( "(min-width: 600px)" ).matches) {
                    charactx.drawImage(charaimage, 170,70,600,600,-120, 75,500,500);
                }else{
                    charactx.drawImage(charaimage, -250, -50,800,800);
                }
            }
            charaimage.src = "images/chara/"+episode[0].chara+".png";
        }
        if (!window.matchMedia( "(min-width: 600px)" ).matches) {
            storydiv.style.width = "320px";
            storytext.style.width = "300px";
            storydiv.style.height = "130px";
            storytext.style.height = "100px";
            storytext.style.fontSize = "20px";
        }
        storydiv.style.visibility = 'visible';
        storytext.innerHTML = episode[0].say;

        if(!iseventlistneradded){
            const targetArea = document.getElementById("storydiv");
            targetArea.addEventListener('mouseup', () => {
                effect = new Audio('sounds/effects/カーソル移動2.mp3');
                effect.play();
                episode.shift();

                if(episode.length == 0){
                    charactx.clearRect(0,0,600,700);
                    if(!rebgm==""){
                        bgm.pause();
                        bgm = new Audio("sounds/bgm/"+rebgm+".mp3");
                        bgm.loop = true;
                        bgm.play();
                        rebgm="";
                    }
                    judge();
                }else{
                    episodedraw();
                }
            });
            
            iseventlistneradded=true;
        }
    }
    image.src = "images/background/"+episode[0].back;
}