function selected (){
    effect = new Audio('sounds/effects/決定ボタンを押す7.mp3');
    effect.play();
    selectdiv.style.visibility = 'hidden';
}

function scene1(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">メイド１　マイ</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">メイド２　ミイ</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="3">メモ</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="4">メイド３　メイ</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="5">部屋を出る</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="6">自分の手帳</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="7">誰かの手帳</button>');
    document.getElementById("1").onclick = function(){
        let scene1epi1 = [
            {say:"「フジーナ様、今日もご機嫌が悪いわ。あまり関わりたくないわね」", back:"antique_room6.jpg",bgm:"",chara:"メイド１"},
        ];
        episode = scene1epi1;
        selected();
        episodedraw();
    }
    document.getElementById("2").onclick = function(){
        let scene1epi2 = [
            {say:"「"+username+"、もうすぐ舞踏会ね！　楽しみ！」", back:"antique_room6.jpg",bgm:"",chara:"メイド２"},
            {say:"「私たちは参加できないけれど、色んな国の要人方を一目見たいわ」", back:"antique_room6.jpg",bgm:"",chara:"メイド２"},
            {say:"「かっこいい方、いるかしら」", back:"antique_room6.jpg",bgm:"",chara:"メイド２"},

        ];
        episode = scene1epi2;
        selected();
        episodedraw();
    }
    document.getElementById("3").onclick = function(){
        let scene1epi3 = [
            {say:"舞踏会は明後日", back:"antique_room6.jpg",bgm:"",color:"white",chara:""},
        ];
        episode = scene1epi3;
        selected();
        episodedraw();
    }
    document.getElementById("4").onclick = function(){
        let scene1epi4 = [
            {say:"あーあ、サンライト王国に行ってみたいなぁ。私はもっと広い世界を見たいわ", back:"antique_room6.jpg",bgm:"",chara:"メイド３"}
        ];
        episode = scene1epi4;
        selected();
        episodedraw();
    }
    document.getElementById("5").onclick = function(){
        scene = 2;
        selected();
        judge();
    }
    document.getElementById("6").onclick = function(){
        let scene1epi6= [
            {say:username + "は自分の手帳を読み返しました。昔のある記憶がよみがえります。", back:"1-book3.jpg",bgm:"antoinettenoniwa",chara:""},
            {say:username + "が幼かった時、"+username+"は"+username+"・ティーという名でした。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"なんと、"+username + "の家は貴族だったのです。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"しかし、叔父のハロルド・ティーが事件を起こし、ティー家は没落してしまいました。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"ですから、今は名字を名乗らず、ティー家の出身であることは隠しています。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"そんな"+username+"は貴族だった昔、城へ行ったことがありました。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"貴族の子どもは皆、十歳になる年の春、王へ挨拶に行くという決まりがあったのです。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"その時、"+username+"はローレン・フラークアというフラークア王国の第一王女にたまたま出会いました。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:username+"は城で道に迷ってしまった時、当時十七歳のローレンに助けられたのです。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"「あら、あなたはもしかして十歳の挨拶に来た子？」", back:"1-book3.jpg",bgm:"",chara:"ローレン"},
            {say:"「は、はい……道に迷ってしまって」", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"「大丈夫よ。私が案内するわ」", back:"1-book3.jpg",bgm:"",chara:"ローレン"},
            {say:"ローレンは優しく話しかけてくれました。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"やがて無事、王の間に着くと、ローレンはニコリと微笑みました。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"「"+username+"、もし良かったら、十五歳になったら私のメイドになってくれない？」", back:"1-book3.jpg",bgm:"",chara:"ローレン"},
            {say:"「え……良いのですか！？」", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"「もちろん、約束よ」", back:"1-book3.jpg",bgm:"",chara:"ローレン"},
            {say:"その約束は"+username+"にとって大切なものとなりました。", back:"1-book3.jpg",bgm:"",chara:""},
            {say:"ローレンとの親密度が上がった！", back:"1-book3.jpg",bgm:"",chara:""},

        ];
        episode = scene1epi6;
        lovepoint["Lauren"] +=1;
        rebgm="hirusagarinohabanera";
        selected();
        episodedraw();
    }
    document.getElementById("7").onclick = function(){
        let scene1epi4 = [
            {say:"誰かが落としたようだ。", back:"antique_room6.jpg",bgm:"",color:"white",chara:""},
            {say:"「フジーナ様はこの前私を転ばせて笑った。絶対に許さない」", back:"antique_room6.jpg",bgm:"",color:"white",chara:""},
            {say:username + "は見なかったことにした。", back:"antique_room6.jpg",bgm:"",color:"white",chara:""},

        ];
        episode = scene1epi4;
        selected();
        episodedraw();
    }
}

function scene3(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">メイド１　マイ</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">メイド２　ミイ</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="3">メイド３　メイ</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="4">部屋を出る</button>');
    document.getElementById("1").onclick = function(){
        let scene3epi1 = [
            {say:"「皆忙しそうね。フジーナ様、なんだか楽しそう」", back:"antique_room6.jpg",bgm:"",chara:"メイド１"},
        ];
        episode = scene3epi1;
        selected();
        episodedraw();
    }
    document.getElementById("2").onclick = function(){
        let scene3epi2 = [
            {say:"「あーあ。私がどっかの貴族の姫だったらなぁ」", back:"antique_room6.jpg",bgm:"",chara:"メイド２"},
            {say:"「姫として着飾って参加できたのに」", back:"antique_room6.jpg",bgm:"",chara:"メイド２"},

        ];
        episode = scene3epi2;
        selected();
        episodedraw();
    }
    document.getElementById("3").onclick = function(){
        let scene3epi3 = [
            {say:"「かっこいい殿方がたくさん参加するらしいわよ！　もう城に着いているのかしら」", back:"antique_room6.jpg",bgm:"",chara:"メイド３"},
        ];
        episode = scene3epi3;
        selected();
        episodedraw();
    }
    document.getElementById("4").onclick = function(){
        scene = 4;
        selected();
        judge();
    }
}

function scene5(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">フジーナを手伝う</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">城の掃除をする</button>');
    document.getElementById("1").onclick = function(){
        scene = 6;
        selected();
        judge();
    }
    document.getElementById("2").onclick = function(){
        let scene3epi3 = [
            {say:username+"は城の掃除をすることにしました。", back:"antique_room6.jpg",bgm:"",chara:""},
        ];
        scene = 7;
        episode = scene3epi3;
        selected();
        episodedraw();
    }
}

function scene7(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">階段を掃除する</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">廊下を掃除する</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="3">外を掃除する</button>');
    selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="4">掃除を終わる</button>');
    document.getElementById("1").onclick = function(){
        let scene7epi1 = [
            {say:"階段を掃除していると、強そうな男が通りかかりました。", back:"red-carpet1.jpg",bgm:"ohisamatoosanpo",chara:""},
            {say:"すると、かわいらしいピンクのハンカチを落とします。", back:"red-carpet1.jpg",bgm:"",chara:""},
            {say:"「あの、落としましたよ！」", back:"red-carpet1.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「あ、すまない。ありがとう」", back:"red-carpet1.jpg",bgm:"",chara:"ルイス"},
            {say:"「そのハンカチ、かわいいですね」", back:"red-carpet1.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:username+"が褒めると、男は嬉しそうに言いました。", back:"red-carpet1.jpg",bgm:"",chara:""},
            {say:"「実はこのハンカチは街の『ピンクフラワー』という店で買ったんだ！　メイドさん、知っているかい？」", back:"red-carpet1.jpg",bgm:"",chara:"ルイス"},
            {say:"「知ってます！　『ピンクフラワー』の商品ってみんなかわいいですよね！」", back:"red-carpet1.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"二人の話は盛り上がりました。", back:"red-carpet1.jpg",bgm:"",chara:""},
            {say:"「メイドさん、名前は？」", back:"red-carpet1.jpg",bgm:"",chara:"ルイス"},
            {say:"「私は"+username+"と申します」", back:"red-carpet1.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「俺はルイス・ガーター。この国の騎士だ。また今度話そう！」", back:"red-carpet1.jpg",bgm:"",chara:"ルイス"},
            {say:"ルイスとの親密度が上がった！", back:"red-carpet1.jpg",bgm:"",chara:""}
        ];
        lovepoint["Lewis"] +=1;
        episode = scene7epi1;
        rebgm="hirusagarinohabanera";
        selected();
        episodedraw();
    }
    document.getElementById("2").onclick = function(){
        let scene7epi2 = [
            {say:"廊下を掃除していると、この国の第一王子ロバート・フラークアが歩いてきます。", back:"Royal-palace-corridor.jpg",bgm:"nezuminoensoku",chara:""},
            {say:username+"は慌てて頭を下げました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
            {say:"するとロバートは声をかけてきます。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
            {say:"「メイドさん、ソフィアを見なかったかい？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ロバート"},
            {say:"ソフィアとは、この国の第五王女。まだ十歳です。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
            {say:"「ごめんなさい、見てないです……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「そうか……良かったら一緒に探してくれないか？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ロバート"},
            {say:"「もちろんです！」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「君の名前は？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ロバート"},
            {say:"「"+username+"と申します」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「そうか、よろしくな」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ロバート"},
            {say:"二人はソフィアを必死で探しました。", back:"Magicpalace2.jpg",bgm:"",chara:""},
            {say:"ソフィアは庭の噴水にいました。", back:"fountain1-1.jpg",bgm:"",chara:""},
            {say:"「ソフィア！　やっと見つけた！」", back:"fountain1-1.jpg",bgm:"",chara:"ロバート"},
            {say:"「ん？　ロバートお兄様、何ですか？」", back:"fountain1-1.jpg",bgm:"",chara:"ソフィア"},
            {say:username+"は、ソフィアが無事見つかったことにほっとしました。", back:"fountain1-1.jpg",bgm:"",chara:""},
            {say:"「"+username+"、ありがとうな！」", back:"fountain1-1.jpg",bgm:"",chara:"ロバート"},
            {say:"ロバートとの親密度が上がった！", back:"fountain1-1.jpg",bgm:"",chara:""}
        ];
        lovepoint["Robert"] +=1;
        episode = scene7epi2;
        rebgm="hirusagarinohabanera";
        selected();
        episodedraw();
    }
    document.getElementById("3").onclick = function(){
        let scene7epi3 = [
            {say:"外を掃除していると、黒い服装の男がうろうろと歩いていました。", back:"Magicpalace2.jpg",bgm:"osoujibiyori",chara:""},
            {say:"（見かけない顔……道に迷ったのかしら）", back:"Magicpalace2.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:username+"は声をかけてみました。", back:"Magicpalace2.jpg",bgm:"",chara:""},
            {say:"「あの、何かお探しですか」", back:"Magicpalace2.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「ああ、いや、大丈夫です。実は、フジーナ王女のお姿が美しいという噂を聞いて、一目見てみたくなってしまいまして……」", back:"Magicpalace2.jpg",bgm:"",chara:"アンドリュー"},
            {say:"男は恥ずかしそうに笑いました。", back:"Magicpalace2.jpg",bgm:"",chara:""},
            {say:"「フジーナ様でしたら、今夜の舞踏会に参加されますよ」", back:"Magicpalace2.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「おお、そうですか！　有益な情報をありがとう。あなたのお名前は？」", back:"Magicpalace2.jpg",bgm:"",chara:"アンドリュー"},
            {say:"「フジーナ様のメイドの"+username+"と申します」", back:"Magicpalace2.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:"「フジーナ王女のメイドか！　僕の名はアンドリュー・ナートシャドーだ」", back:"Magicpalace2.jpg",bgm:"",chara:"アンドリュー"},
            {say:"（ナートシャドー！　隣国の第一王子！）", back:"Magicpalace2.jpg",bgm:"",chara:"主人公メイド服ver"},
            {say:username+"は驚きながら、ぺこりと頭を下げました。", back:"Magicpalace2.jpg",bgm:"",chara:""},
            {say:"アンドリューとの親密度が上がった！", back:"Magicpalace2.jpg",bgm:"",chara:""}
        ];
        lovepoint["Andrew"] +=1;
        episode = scene7epi3;
        rebgm="hirusagarinohabanera";
        selected();
        episodedraw();
    }
    document.getElementById("4").onclick = function(){
        scene = 8;
        selected();
        judge();
    }
}

function scene10(){
    storydiv.style.visibility = 'hidden';
    selectdiv.style.visibility = 'visible';

    if(lovepoint["Fusina"] == 1){
        selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="1">フジーナに話しかける</button>');
        document.getElementById("1").onclick = function(){
                let scene10epi1 = [
                {say:"フジーナとナートシャドー王国の第一王子アンドリューが話しています。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
                {say:"フジーナはどこか緊張した面持ちで、アンドリューは頬を紅潮させて話していました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""}
            ];
            scene = 11;
            episode = scene10epi1;
    
        selected();
        episodedraw();
    }
    }
    if(lovepoint["Andrew"] >= 1){
        selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="2">アンドリューに話しかける</button>');
        document.getElementById("2").onclick = function(){
                let scene10epi2 = [
                {say:"フジーナとナートシャドー王国の第一王子アンドリューが話しています。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
                {say:"フジーナはどこか緊張した面持ちで、アンドリューは頬を紅潮させて話していました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""}
            ];
            scene = 15;
            episode = scene10epi2;
    
        selected();
        episodedraw();
    }
    }
    if(lovepoint["Lauren"] >= 1){
        selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="3">外に出る（ローレン）</button>');
        document.getElementById("3").onclick = function(){
                let scene10epi2 = [
                {say:username+"は何だか疲れてしまい、広間の外へ出ました。", back:"Royal-palace-corridor.jpg",bgm:"tsukiakarinoteien",chara:""},
                {say:"すると向こうから第一王女ローレンと第一王子ロバートが歩いてくるではありませんか！", back:"Royal-palace-corridor.jpg",bgm:"",chara:""}
            ];
            scene = 19;
            episode = scene10epi2;
    
        selected();
        episodedraw();
    }
    }
    if(lovepoint["Robert"] >= 1){
        selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="4">外に出る（ロバート）</button>');
        document.getElementById("4").onclick = function(){
                let scene10epi2 = [
                {say:username+"は何だか疲れてしまい、広間の外へ出ました。", back:"Royal-palace-corridor.jpg",bgm:"tsukiakarinoteien",chara:""},
                {say:"すると向こうから第一王女ローレンと第一王子ロバートが歩いてくるではありませんか！", back:"Royal-palace-corridor.jpg",bgm:"",chara:""}
            ];
            scene = 25;
            episode = scene10epi2;
    
        selected();
        episodedraw();
    }
    }
    if(lovepoint["Lewis"] >= 1){
        selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="5">ルイスに話しかける</button>');
        document.getElementById("5").onclick = function(){
                let scene10epi2 = [
                {say:username+"はルイスに近づきました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
            ];
            scene = 33;
            episode = scene10epi2;
    
        selected();
        episodedraw();
    }
    }
    if(lovepoint["Lion"] == 1){
        selectdiv.insertAdjacentHTML('beforeend', '<button class="selectbtn" id="6">リオンに話しかける</button>');
        document.getElementById("6").onclick = function(){
                let scene10epi2 = [
                {say:username+"はリオンに近づきました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
            ];
            scene = 26;
            episode = scene10epi2;
    
        selected();
        episodedraw();
    }
    }
}
