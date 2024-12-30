function scene12(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">フジーナの気持ちを察する</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">アンドリューの気持ちを察する</button>');
    document.getElementById("1").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 13;
        selected();
        judge();
    }
    document.getElementById("2").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 14;
        selected();
        judge();
    }
}

function scene16(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">二人のキューピッドになる</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">アンドリューにアプローチする</button>');
    document.getElementById("1").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 17;
        selected();
        judge();
    }
    document.getElementById("2").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 18;
        selected();
        judge();
    }
}

function scene21(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">話す</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">話さない</button>');
    document.getElementById("1").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 22;
        selected();
        judge();
    }

    document.getElementById("2").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        let scene3epi3 = [
            {say:username+"は考えた末、話さないことにしました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
            {say:"「いえ、何でもありません」 ", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
            {say:"「そう。ねえあなた、見慣れない顔ね。どちらの方かしら」", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        ];
        if(lovepoint["Fusina"] == 0){
            scene = 23;
        }
        if(lovepoint["Fusina"] == 1){
            scene = 24;
        }
        episode = scene3epi3;
        selected();
        episodedraw();
    }
}

function scene27(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">「良いですよ」と言う </button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">断る</button>');
    document.getElementById("1").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 28;
        selected();
        judge();
    }
    document.getElementById("2").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 32;
        selected();
        judge();
    }
}

function scene29(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">「私もです」と言う </button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">断る</button>');
    document.getElementById("1").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 30;
        selected();
        judge();
    }
    document.getElementById("2").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 31;
        selected();
        judge();
    }
}

function scene34(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">「私も」と言う </button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">「ごめんなさい」と言う</button>');
    document.getElementById("1").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 35;
        selected();
        judge();
    }
    document.getElementById("2").onclick = function(){
        selectdiv.style.visibility = 'hidden';
        scene = 36;
        selected();
        judge();
    }
}