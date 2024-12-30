function scene0(){
    let scene0epi = [
        {say:username+"はフラークア王国の第二王女フジーナのメイド。毎日、仕事を頑張っていました。",back:"palace-room2.jpg",bgm:"hirusagarinohabanera",chara:""},
        {say:"ある日、"+username+"は朝の掃除を終え、フジーナの部屋へ行きました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「フジーナ様、おはようございます」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"すると、フジーナは不機嫌そうにこちらを睨みつけてきました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「おはよう、"+username+"。朝から埃だらけで汚いわね。あっち行ってちょうだい」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"フジーナはどのメイドにもそんな調子でした。おかげで、フジーナは皆から避けられていました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"それでも"+username+"は頑張ってメイドを続けていました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"それはある人と再会するため……", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:username+"はその日を心待ちにしていました。", back:"palace-room2.jpg",bgm:"",chara:""}
    ];
    episode = scene0epi;
    episodedraw();
}

function scene2(){
    let scene2epi= [
        {say:"扉を開けるとそこには、キョロキョロと周りを見る優しそうな青年がいました。", back:"Royal-palace-corridor.jpg",bgm:"konayukinowaltz",chara:""},
        {say:"「あ、こんにちはメイドさん」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"リオン"},
        {say:"「こんにちは。あなたは……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「初めまして。私はサンライト王国の大臣、リオン・ディーアと申します」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"リオン"},
        {say:"リオンは深々とお辞儀をします。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"（わわわ、偉い人……）", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「私はフジーナ様のメイドの"+username+"です」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「"+username+"さん！　ちょうど良かった！", back:"Royal-palace-corridor.jpg",bgm:"",chara:"リオン"},
        {say:"私、恥ずかしながら道に迷ってしまいまして。良ければ王の間まで案内していただきたいのですが……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"リオン"},

        {say:"「もちろんです！」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「ありがとうございます」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"リオン"},
        {say:username+"はリオンを王の間まで案内してあげました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「"+username+"さん、ありがとうございました」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"リオン"},
        {say:"「いえいえ」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"リオンとの親密度が上がった！", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"さて、舞踏会が今夜に迫ってきました。城では皆、バタバタと忙しくしています。", back:"antique_room6.jpg",bgm:"hirusagarinohabanera",chara:""},

    ];
    episode = scene2epi;
    lovepoint["Lion"] +=1;
    episodedraw();
}

function scene4(){
    scene = 5;
    let scene4epi= [
        {say:"部屋を出ると、フジーナがメイドたちに命令しました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「わたくしの準備を手伝う者は残って。他の者は城の掃除をなさい！」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"}
    ];
    episode = scene4epi;
    episodedraw();
}

function scene6(){
    scene = 9;
    let scene6epi= [
        {say:"フジーナの手伝いに残ったのは"+username+"一人だけでした。", back:"palace-room2.jpg",bgm:"natsunokiri",chara:""},
        {say:"「その、フジーナ様……」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「わかってるわ。わたくしは皆に好かれてないものね」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"フジーナは寂しげな微笑みを浮かべました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:username+"は黙ってフジーナの髪を整えました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「ねえ、"+username+"」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"「何でしょう」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「うまくいくかしら。わたくしは今夜、結婚相手を見つけなければならないわ」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"「そうなのですね。きっと大丈夫ですよ！　フジーナ様はお綺麗ですもの」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「ありがとう……今までごめんなさいね」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:username+"はフジーナが謝ってくることが意外でした。なんだかフジーナがいつもより近く感じられます。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"フジーナは不安そうな顔をしていました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「フジーナ様、どうかされましたか」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「いえ、ええと……"+username+"には言っておきましょう。わたくし、実は未来が見えるのです」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:username+"はフジーナの唐突な告白に驚きました。王家には五十年に一度、未来が見える者が生まれるという噂を聞いたことはありました。", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"しかし、まさかフジーナだったとは思いもしなかったのです。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「フジーナ様……」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「そしてその未来によると、わたくしは今夜、隣の国のナートシャドー王国のアンドリュー様に見初められ、結婚することになるわ」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"「でもアンドリュー様は私を溺愛するあまり、私の全てを欲して、将来、この国を滅ぼす」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"「だからわたくしは皆に嫌われるように振る舞ってきたの。そうすれば、悪い評判が立ってアンドリュー様は私と結婚しないわ」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"「そんな……」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「でもそんなわたくしの準備を、あなたは買って出てくれた。わたくし、あなたの優しさに感動したわ。ありがとう」", back:"palace-room2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"フジーナは"+username+"の手をぎゅっと握りました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「"+username+"、今夜の舞踏会に一緒に参加しましょう。ほら、"+username+"の髪はわたくしがやってあげるわ。ドレスを選んで」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"フジーナとの親密度が上がった！", back:"palace-room2.jpg",bgm:"",chara:""}
    ];
    episode = scene6epi;
    lovepoint["Fusina"] +=1;
    episodedraw();
}

function scene8(){
    scene = 9;
    let scene8epi= [
        {say:"城の掃除が終わり、夜になりました。", back:"night-sky4.jpg",bgm:"milkyway",chara:""},
        {say:"「あーあ、私も舞踏会に参加したかったなぁ」", back:"night-sky4.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:username+"はそっとため息をつきました。", back:"night-sky4.jpg",bgm:"",chara:""},
        {say:"広間では今まさに舞踏会が行われていることでしょう。", back:"night-sky4.jpg",bgm:"",chara:""},
        {say:username+"は城の庭を散歩していました。", back:"night-sky4.jpg",bgm:"",chara:""},
        {say:"噴水まで来たところで、見慣れない姿をした女性がいることに気が付きました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"（こんな時間に誰だろう……メイドじゃなさそうだし……）", back:"angels-garden3.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「こんばんは、お嬢さん。舞踏会には参加しないのかい？」", back:"angels-garden3.jpg",bgm:"",chara:"魔女"},
        {say:"近づいてよく見ると、魔女の格好をした不思議な雰囲気の若い女性でした。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「魔女……？」", back:"angels-garden3.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:"「ああ、そうさ。お嬢さん、お姫様になりたいかい？」", back:"angels-garden3.jpg",bgm:"",chara:"魔女"},
        {say:"「なりたいわ」", back:"angels-garden3.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:username+"は即答しました。昔のままだったらどんなに良かったでしょう……", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「よし、じゃあお姫様にしてやろう」", back:"angels-garden3.jpg",bgm:"",chara:"魔女"},
        {say:"魔女は杖を一振りしました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"すると"+username+"はみるみる光に包まれます。次の瞬間には、"+username+"は綺麗なドレスを着ていました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「さあ、舞踏会へ行っておいで」", back:"angels-garden3.jpg",bgm:"",chara:"魔女"},
        {say:"「わあ、ありがとうございます！」", back:"angels-garden3.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はウキウキと広間へ向かいました。", back:"angels-garden3.jpg",bgm:"",chara:""}
    ];
    episode = scene8epi;
    episodedraw();
}

function scene9(){
    scene = 10;
    let scene9epi= [
        {say:username+"は舞踏会にやってきました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"oshironobutoukai",chara:""},
        {say:"広間をぐるりと見渡すと、様々な人物が料理を手に歓談しています。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「誰に話しかけようかしら」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},

    ];
    episode = scene9epi;
    episodedraw();
}

function scene11(){
    scene = 12;
    let scene11epi= [
        {say:"「ご機嫌よう、フジーナ様」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「あら、"+username+"」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"フジーナは嬉しそうにこちらへ寄ってきました。どうやら一人で不安だったようです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"フジーナはこそっと"+username+"に耳打ちします。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「"+username+"、ちょうど良かったわ。来てくれて良かった」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:username+"はフジーナの気持ちを察して頷きました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「ちょっと外へ行きましょうか」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はフジーナと手を繋ぎ、外へ出ようとしました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"するとアンドリューが引き止めます。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「どこへ行くんだい？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"}
    ];
    episode = scene11epi;
    episodedraw();
}

function scene13(){
    scene = "end";
    let scene13epi= [
        {say:"「フジーナ様は少し体調を崩されたようなので、部屋で休もうかと」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「そうか、それは残念だ。お大事にね」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"アンドリューは残念そうに俯きました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"フジーナと"+username+"はほっとして部屋に戻ります。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「"+username+"、ありがとう。助かったわ」", back:"palace-room2.jpg",bgm:"harpohikunezumi",chara:"フジーナドレスver"},
        {say:"「いえいえ、フジーナ様の心を守ることが一番ですから」", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「"+username+"……」", back:"palace-room2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"フジーナは感動したように"+username+"を見つめました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「ねえ、"+username+"、わたくし、良いことを思いついたの」", back:"palace-room2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"「どんなことですか」", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「アンドリュー様と結婚しないならわたくしが恐れる未来は起こらない」", back:"palace-room2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"「はい」", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「だから、わたくしたち、結婚しない？　わたくし、あなたのことが好きになっちゃったみたい……」", back:"palace-room2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"「フジーナ様……私もです。ずっと前からお慕いしていました」", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は感動して、フジーナの手をぎゅっと握りました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"二人はしばらく見つめ合ったあと、"+username+"は言いました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「そろそろ広間に戻りましょうか」", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"広間に戻ると、ダンスパーティーが始まっていました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"oshironobutoukai",chara:""},
        {say:"「フジーナ様……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「"+username+"……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"二人は夜が明けるまで踊り続けました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"その後、正式に王様の許可を得た二人は結婚して、幸せに暮らしましたとさ。", back:"Magicpalace2.jpg",bgm:"tanoshiibouken",chara:""},
        {say:"めでたしめでたし。", back:"Magicpalace2.jpg",bgm:"",chara:""},
    ];
    episode = scene13epi;
    episodedraw();
}

function scene14(){
    scene = "end";
    let scene14epi= [
        {say:"（もしかしてアンドリュー様はフジーナ様のことが好きなのかしら。悪い人じゃあなさそうだわ）", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"アンドリューのフジーナへの気持ちを察してしまった"+username+"は唐突にフジーナの良いところを語りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「アンドリュー様、聞いてください！　フジーナ様はメイドには少し厳しいのですが、私、見てしまったんです！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「メイドの一人が疲れて眠ってしまったときに、優しく毛布を掛けてあげたところを！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「それに、民のためにこっそりですが様々な活動をしてらっしゃるのですよ。たとえば募金活動を行っています」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「それに、ヴァイオリンがとてもお上手なんです！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は一息に語りました。その勢いに、アンドリューは若干引いていましたが、すぐに調子を取り戻します。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「そうなのか！　やっぱりな、フジーナ王女は素敵な女性だと思ったよ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"その言葉に、フジーナは頬を染めました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「まあ……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"「フジーナ王女、良ければこの後のダンス、一緒に踊ってくれないかい？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"「もちろんですわ、アンドリュー様。今すぐにでも」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"フジーナは嬉しそうにアンドリューの手を取りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"その後、フジーナとアンドリューは結婚しました。", back:"Magicpalace2.jpg",bgm:"tanoshiibouken",chara:""},
        {say:username+"の元にはフジーナからの手紙がよく届くようになりました。", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"そこには、", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"「"+username+"、わたくし、どんな未来も気合いで乗り切ってみせるわ。"+username+"のおかげで、今、とても幸せよ。ありがとう」", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"と書かれていましたとさ。", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"めでたしめでたし。", back:"Magicpalace2.jpg",bgm:"",chara:""},

    ];
    episode = scene14epi;
    episodedraw();
}

function scene15(){
    scene = 16;
    let scene15epi= [
        {say:"「アンドリュー様」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「おお、"+username+"！　フジーナ王女に無事、会えたよ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"「良かったです」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
    ];
    episode = scene15epi;
    episodedraw();
}

function scene17(){
    scene = "end";
    let scene11epi= [
        {say:"「フジーナ様、アンドリュー様はフジーナ様の容姿を褒めてらっしゃいましたよ」 ", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はフジーナに微笑みました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「わたくしの容姿を……？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"フジーナは眉間に皺を寄せています。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「はい。アンドリュー様？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ああ、僕は君に一目惚れをした。良かったら結婚してもらえないだろうか」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"フジーナは戸惑ったように視線を彷徨わせました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「えっと、ですが……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"そんなフジーナに、アンドリューは畳み掛けます。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「僕の国、ナートシャドーは資源に恵まれている。生活は安心だ。僕は一生、君だけを愛すよ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"アンドリューは真剣でした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"しかしフジーナの表情はどんどん曇っていきます。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「アンドリュー様は、わたくしの何を知っていると言うの……どうせわたくしの容姿しか見ていないくせに！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"フジーナは怒鳴りながら広間を飛び出してしまいました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"取り残されたアンドリューと"+username+"の間に気まずい空気が流れます。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"kageriyukuhizashi",chara:""},
        {say:"「"+username+"、僕と結婚してはくれないだろうか……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"「結構です」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"もアンドリューに呆れかえり、すっとその場を後にしましたとさ。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"おしまい。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},

    ];
    episode = scene11epi;
    episodedraw();
}

function scene18(){
    scene = "end";
    let scene11epi= [
        {say:"「アンドリュー様、私のドレス、どうですか？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「素敵だよ。ところで"+username+"、君は本当に"+username+"なのかい？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"「ええ、そうです」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「すごいな。見違えたよ。君もここに咲く花に負けず劣らず、とても美しい」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"「まあ……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はすっかりアンドリューに惚れてしまいました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「アンドリュー様、良ければ私にダンスのお相手をさせていただけませんか」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「おお、いいね。ぜひ！　ではフジーナ王女、また後で」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:username+"はフジーナとアンドリューを引き離すことに成功し、ほくそ笑みました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"そしてダンスの時間、アンドリューと"+username+"は語り合いながらダンスを踊りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"アンドリューはダンスが上手で、"+username+"はますます惚れてしまいました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「アンドリュー様、私、アンドリュー様ともっと一緒にいたいです……！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「僕もだよ、"+username+"。ナートシャドー王国に来ないか？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"アンドリュー"},
        {say:"「ぜひ！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"こうして"+username+"はアンドリューの専属のメイドとなりました。", back:"Magicpalace2.jpg",bgm:"tanoshiibouken",chara:""},
        {say:"そのあと？　アンドリューは二人目の側室として"+username+"を娶ったそうですよ。", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"めでたしめでたし。", back:"Magicpalace2.jpg",bgm:"",chara:""},

    ];
    episode = scene11epi;
    episodedraw();
}

function scene19(){
    scene = 20;
    let scene19epi= [
        {say:"「ロ、ローレン様……？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ええ、私はローレンよ」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンはふわりと微笑んでから、不思議そうに首を傾げました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「どうかしたかしら？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"（ああ、ローレン様はもう覚えていないのね）", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"の中に、寂しさとも悲しさともつかない感情がジワリと広がっていきます。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:username+"にとっては大切な約束でしたが、ローレンにとってはそうではなかったようです。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:username+"はローレンとの思い出を話そうか迷いました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"ローレンに思い出してほしい気持ちもありましたが、過去にこだわっていると思われたくない気持ちもあったのです。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},

    ];
    episode = scene19epi;
    episodedraw();
}

function scene22(){
    scene = "end";
    let scene22epi= [
        {say:username+"は考えた末、ローレンに話すことにしました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「ローレン様、少しお時間いただけますか」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ええ、いいわよ。今から舞踏会に参加しようかと思っていたところだから」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「立ち話もなんですし、移動しましょうか。良かったら私の部屋へどうぞ」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:username+"はローレンの部屋に案内されました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"ローレンの部屋は女の子の憧れそのものでした。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「わあ、素敵……」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ふふっ、ありがとう」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンは嬉しそうに微笑みます。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"（そういえばローレン様がいらっしゃるなんて珍しいわ）", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"（私は城で働き始めて二年経つけど、今まで一度もお姿をお見かけしたことはなかったのに）", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はふと疑問に思いました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「ローレン様、今までどちらに……」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ああ、私は病気がちであまり外へ出られないの。今日は少し調子が良くて、せっかくだから様子を見てこようかと思ったのよ」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"「そうだったのですね」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「滅多に外へ出ない私を知っているなんて、もしかしてどこかで会ったことあったかしら？」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"その言葉に、"+username+"の胸がドキンと弾みました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"これはチャンスです。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「あの！　私、七年前にローレン様とお会いしたのです」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「十歳の挨拶に来た時、道に迷った私をローレン様は優しく案内してくださって……私、嬉しかったんです」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"の視界は少しぼやけていました。目頭が何だか熱いです。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"ローレンはじっと耳を傾け、やがて、", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「そうだったのね」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"と言いました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:username+"は次のローレンの言葉に期待しました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"もしかしたら「覚えている」と言ってくれるのではないかと。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"しかし。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「ごめんなさい。覚えていないみたい。実は私の病気の症状に、記憶に関するものがあるの。それのせいかもしれないわ」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"「そんな……」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「十歳の挨拶ということは、あなたは貴族ね。どこの家かしら」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"「あ……」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"そうでした。ティー家は没落してしまったのです。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:username+"は急に恥ずかしくなりました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「も、申し訳ありません。それは言えないのですが……でも、私……私、そのときのこと、すごく大事な思い出なんです」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ローレン様と交わしたメイドになるという約束もすごく、すごく大事に思っててっ！」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「私、だからローレン様のことずっと探してて……！　今ここでまた会えてすごく嬉しかったです。それでは失礼します」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は潔く諦めることにしました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"（ずっと言いたかったことは言えてスッキリしたわ）", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"これも一つの区切りでしょう。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:username+"は部屋で少し休もうと踵を返したときでした。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「待って！　もしかしてあなた、ティー家の……？」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"「ローレン様……」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「思い出したわ！　そうよ、ティー家の"+username+"ちゃん！」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"「そうです！　私、昔の名は"+username+"・ティーでした」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「"+username+"ちゃん、私を探して来てくれたのね……ありがとう、本当にありがとう！」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンと"+username+"はぎゅっと抱き合いました。", back:"fairytale-room5.jpg",bgm:"",chara:""},
        {say:"「"+username+"ちゃんは今誰のメイドをしているの？」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"「フジーナ様です」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「そう、フジーナの……ねえ、良かったら私のメイドになってくれない？」", back:"fairytale-room5.jpg",bgm:"",chara:"ローレン"},
        {say:"「ローレン様……私、そうしたいです」", back:"fairytale-room5.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"感動の再会を果たした"+username+"は、その後、ローレンのメイドとなりました。", back:"Magicpalace2.jpg",bgm:"tanoshiibouken",chara:""},
        {say:"二人は良き主従、良き友となり、幸せに暮らしましたとさ。", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"めでたしめでたし。", back:"Magicpalace2.jpg",bgm:"",chara:""}
    ];
    episode = scene22epi;
    episodedraw();
}

function scene23(){
    scene = "end";
    let scene23epi= [
        {say:"ローレンの言葉に、"+username+"はギクッとしました。", back:"Royal-palace-corridor.jpg",bgm:"norowaretapiano",chara:""},
        {say:"「えっ、えっと……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は目を泳がせます。なんと答えれば良いのでしょう。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"ティー家はもう没落してしまいました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"まさか不思議な魔女に魔法をかけてもらったとも言えません。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:username+"が答えられない様子に、ローレンは不審に思ったようです。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「ねえ、あなた……まさかとは思うけど、勝手に侵入した……とかではないわよね」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「ち、違います！　私はフジーナ様のメイドです!」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「フジーナのメイド？　メイドなら今は仕事の時間よ。大体、今夜の舞踏会は招かれた客しか参加できないわ」 ", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンの顔がどんどん険しくなっていきます。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「あなたは今ここにいるべきではない。……誰か、この子を捕まえて！」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンは突然、そう叫びました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"その声を聞きつけて、兵士がこちらに向かってきます。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:username+"はあっという間に取り押さえられてしまいました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「そんな！　ローレン様、私は！」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「あなたには罰を与えたうえで、メイドをやめてもらうわ」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンは厳しい声で言いました。その言葉にはとりつく島もありません。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:username+"は失敗してしまったのです。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"その後、"+username+"は厳しい罰を受け、メイドを辞めさせられました。", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"（こんなはずじゃなかったのに……）", back:"Magicpalace2.jpg",bgm:"",chara:"主人公メイド服ver"},
        {say:username+"は毎日、悲しみに暮れて過ごしましたとさ。", back:"Magicpalace2.jpg",bgm:"",chara:""},
        {say:"おしまい。", back:"Magicpalace2.jpg",bgm:"",chara:""},
    ];
    episode = scene23epi;
    episodedraw();
}

function scene24(){
    scene = "end";
    let scene24epi= [
        {say:"「フジーナ様のメイドの"+username+"と申します」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はぺこりとお辞儀しました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「フジーナのメイド？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「はい、舞踏会に参加することはフジーナ様に許可をいただいています」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「そうなのね……あのフジーナが」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンは少し考えこんでいました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「ねえ、"+username+"。フジーナって少し難しいところがあるでしょう？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「はい」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は否定しませんでした。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"フジーナは不器用で本当は優しい、難しい人です。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「そんなフジーナと上手くやっているようね。いつもありがとう」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンは微笑みました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:username+"はそんなローレンに見惚れてしまいます。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"（あの日と変わらないわ）", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「フジーナは良いメイドを持ったわね。……私もそうだったら良かったのだけれど」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンは「はぁ」とため息をつきました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「もしかして、何かお困りですか」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"するとローレンは、よくぞ聞いてくれたと言うように大きく頷きました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「ええ、実は最近新しく入ってきた私のメイドたちは皆、やる気がないのよ」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「昔からいたメイドたちは結婚とかで辞めていってしまったし……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「私ももうすぐサンライト王国に嫁入りするというのに、誰を連れていったら良いかわからないわ」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「そうなのですね……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はそこでふと思い出しました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「ローレン様、実はメイド仲間に、サンライト王国へ行きたいという子がいるんです」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「あら、そうなの？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「はい」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ぜひ紹介して！」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:username+"は、フジーナとそのメイド、メイを呼びに行きました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「この子です」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「まあ、あなたが……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「ローレン姉様、話は聞きましたわ。わたくしはメイの意思を尊重いたします」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"フジーナは優しい表情でメイを見ました。するとメイは、", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「わ、私、ローレン様とサンライト王国に行きたいですっ！」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"メイド３"},
        {say:"と勢いよく言いました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「じゃあ決まりね。メイ、今までありがとう。ローレン姉様、メイをよろしくお願いします」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"フジーナドレスver"},
        {say:"「ええ、もちろんよ。メイ、よろしくね」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「は、はい！」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"メイド３"},
        {say:"こうして、ローレンのメイドが無事決まりました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"ローレンはこそっと"+username+"に耳打ちします。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「"+username+"のおかげよ。ありがとう」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「ねえあなた、ティー家の子でしょう？」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「えっ……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"ローレンはパチリとウインクしました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「"+username+"がメイドになってくれても良いのよ」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"「私はフジーナ様のメイドですから」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"に迷いはありませんでした。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"フジーナの本心を知った今、フジーナをもっと支えたいと思っていたのです。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"その言葉に、ローレンは満足げに微笑みました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「本当、良い子に育ったわね、"+username+"。またいつか会いましょう」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ローレン"},
        {say:"ローレンはそう言うと、メイを連れて去っていきました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"その後、"+username+"はローレンと手紙のやり取りをしながら、フジーナとも仲良く暮らしましたとさ。", back:"Magicpalace2.jpg",bgm:"tanosiibouken",chara:""},
        {say:"めでたしめでたし。", back:"Magicpalace2.jpg",bgm:"",chara:""},
    ];
    episode = scene24epi;
    episodedraw();
}

function scene25(){
    scene = "end";
    let scene25epi= [
        {say:"「ロバート様、ご機嫌よう」 ", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は優雅にお辞儀しました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「あなたは……」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ロバート"},
        {say:"ロバートは気づいていないようです。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「私の名は秘密です」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は唇に指を当て、ミステリアスに微笑みました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"するとロバートは"+username+"に向かって手を伸ばしました。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"「レディ、良ければ私と少し話しませんか」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"ロバート"},
        {say:"「もちろん」", back:"Royal-palace-corridor.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はロバートの手を取り、一緒に歩き出します。", back:"Royal-palace-corridor.jpg",bgm:"",chara:""},
        {say:"やがて、二人は庭の噴水があるところにやってきました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"遠くに、あの魔女がいるのが見えました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「がんばれ」と口パクをしています。", back:"angels-garden3.jpg",bgm:"",chara:"魔女"},
        {say:"「レディはどこからいらっしゃったのですか」", back:"angels-garden3.jpg",bgm:"",chara:"ロバート"},
        {say:"ロバートは噴水のそばに座り、問いかけました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「それも内緒ですわ」", back:"angels-garden3.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"もそばに腰掛けます。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「君は秘密ばかりなんだな」", back:"angels-garden3.jpg",bgm:"",chara:"ロバート"},
        {say:"「うふふ」", back:"angels-garden3.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"ロバートは"+username+"に興味津々でした。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"夜が深まってきた頃、カーンカーンと城の鐘がなりました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"そこでロバートは"+username+"に跪きました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「君が好きだ。結婚してほしい」", back:"angels-garden3.jpg",bgm:"",chara:"ロバート"},
        {say:"「まぁ……」", back:"angels-garden3.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は一瞬戸惑いましたが、", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"「よろしくお願いしますわ」", back:"angels-garden3.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"と、ロバートの手を取りました。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"二人はその後、幸せに暮らしましたとさ。", back:"Magicpalace2.jpg",bgm:"tanoshiibouken",chara:""},
        {say:"ところで、ロバートがプロポーズした噴水で、十二時の鐘が鳴る頃にプロポーズすると上手くいくという噂が流れ、しばらく大人気でしたとさ。", back:"angels-garden3.jpg",bgm:"",chara:""},
        {say:"めでたしめでたし。", back:"angels-garden3.jpg",bgm:"",chara:""}
    ];
    episode = scene25epi;
    episodedraw();
}

function scene26(){
    scene = 27;
    let scene26epi= [
        {say:"するとルイスとリオンが喧嘩しているではありませんか！", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「お前は理屈っぽくて嫌いだ！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"「あなたのような何でも拳で解決しようとする人には感心しませんね」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:username+"は近くにいた女性に、何があったのか聞きました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「あのお二人、どうされたんですか」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「それが、さっきこんな事件がありまして……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"女性"},
        {say:"その話によるとこうでした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"ある女性が近くにいた男に痴漢をされたそうなのです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"そこで、近くにいたルイスがその男を殴りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"しかしその様子を見たリオンは、暴力ではなく裁判で解決するべきだ、とルイスに注意しました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"それで、こんな言い争いになったというのです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"しかも、リオンは弁が立つようです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"ルイスは劣勢でした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},

        {say:"「まあまあ、まあ」 ", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は二人を止めに入りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「あ、"+username+"さん」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"リオンは突然現れた"+username+"に驚いたようです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:username+"はルイスの方を向き、頭を下げました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「ルイス様、ごめんなさい。リオン様は物事を穏便に済まそうとされる優しい方なんです。ですよね？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はリオンを見ました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"リオンは頷きます。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「はい。ルイス様も優しい方だということは承知しております。ですが暴力で解決しようとするというのは……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「どこの誰だか知らんが、フラークアでは合法だろ！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"ルイスはイライラしながら言います。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"するとリオンは衝撃を受けたようでした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「えっ……フラークアでは合法なのですか……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「ああ、そうだが？　お前も知ってるだろ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"「あ、申し遅れました。私、サンライト王国の大臣、リオン・ディーアと申します」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"リオンは深々とお辞儀しました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「え、あんたサンライトの……そういうことか。サンライトってそういう国だもんな……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"納得したルイスは去っていきました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「これで仲直りですね」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"（良かった良かった）", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はリオンに笑顔を向けました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"するとリオンはしばらくぼうっとしていましたが……", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「あ、ああ。そうですね。……あの、"+username+"さん」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「はい？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「色々ありがとうございました」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「いえいえ。お力になれて良かったです！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"その時、突然、優雅な音楽がかかりました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"mikenekonowaltz",chara:""},
        {say:"「あの、良かったらダンス、一緒にしませんか？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"}
    ];
    episode = scene26epi;
    episodedraw();
}

function scene28(){
    scene = "29";
    let scene29epi= [
        {say:"「良いですよ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ありがとうございます！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"二人はダンスのステップを踏みました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"リオンは大層ダンスが上手で、あまりダンスの上手くない"+username+"をしっかりとリードしてくれます。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「リオン様、お上手ですね」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「昔からよく練習しましたから」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"リオンは恥ずかしそうに微笑みました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「ディーア家は貴族ですから、マナーやら技術やらを叩き込まれたものです」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「私もです！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はついそう返してしまいました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"（どうしよう！　ティー家は没落してるのに！）", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"するとリオンは興味深そうに聞いてきます。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「"+username+"さんも貴族なんですか？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「いや、えっと……実はもう没落してしまった家の出身で」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「なるほど。そうだったのですね。では"+username+"さんは貴族の礼儀が身についているということですか」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「まあ、そうなります」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「なるほど……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"リオンは考え込んでいました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"やがてダンスが終わりました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「"+username+"さん、ありがとうございました」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「こちらこそありがとうございました」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「"+username+"さん、良かったらサンライト王国にいらっしゃってください」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「ぜひ！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はぺこりとお辞儀し、その場をあとにしました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"次の日。", back:"palace-room2.jpg",bgm:"yuruyakanaasayake",chara:""},
        {say:username+"はフジーナに呼び出されました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「"+username+"！　縁談よ！」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"フジーナは興奮しています。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「えっ、フジーナ様に縁談ですか！」", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「違うわ！　"+username+"のよ！」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"「わ、私？」", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"（誰だろう）", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は戸惑いました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"「とりあえず応接室に来るように言われているわ。ほら、座って！　髪をやってあげるわ。ドレスも好きなのを選んで！」", back:"palace-room2.jpg",bgm:"",chara:"フジーナ普段ver"},
        {say:"フジーナはまるで自分のことのように面倒を見てくれます。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"（フジーナ様、いい人）", back:"palace-room2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はフジーナに綺麗にしてもらいました。", back:"palace-room2.jpg",bgm:"",chara:""},
        {say:"応接室に着くと、そこにはリオンがいました。", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"「リオン様……？」", back:"antique_room10.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「"+username+"さん、突然呼び出してしまってすみません。実は私、あなたに惚れてしまいました。結婚してほしいんです」", back:"antique_room10.jpg",bgm:"",chara:"リオン"},
    ];
    episode = scene29epi;
    episodedraw();
}

function scene30(){
    scene = "end";
    let scene30epi= [
        {say:"「私もです」", back:"antique_room10.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はリオンの目をまっすぐ見て言いました。", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"「私、昨日の夜、リオン様と踊れてすごく幸せでした。リオン様が好きです」", back:"antique_room10.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"するとリオンは嬉しそうに微笑みました。", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"「良かった。すごく嬉しいよ」", back:"antique_room10.jpg",bgm:"",chara:"リオン"},
        {say:"その後、"+username+"はサンライト王国へ行き、リオンと幸せに暮らしましたとさ。", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"めでたしめでたし", back:"antique_room10.jpg",bgm:"",chara:""},

    ];
    episode = scene30epi;
    episodedraw();
}

function scene31(){
    scene = "end";
    let scene31epi= [
        {say:"「ごめんなさい。私、まだ結婚するつもりはないんです」", back:"antique_room10.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はリオンが傷つくのではないかと不安になりました。", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"「そうですか。突然ごめんなさい」", back:"antique_room10.jpg",bgm:"",chara:"リオン"},
        {say:"リオンはふわりとどこか寂しそうに微笑みました。", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"「ですが"+username+"さん、私はあなたのことが好きです。まだ諦めるつもりはありませんよ。もっとアタックしますから、期待していてください」", back:"antique_room10.jpg",bgm:"",chara:"リオン"},
        {say:"リオンはそう言うと、", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"「では、失礼します」", back:"antique_room10.jpg",bgm:"",chara:"リオン"},
        {say:"と去っていきました。", back:"antique_room10.jpg",bgm:"",chara:""},
        {say:"「リオン様……」", back:"antique_room10.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はそこで、胸がとくんとときめくのを感じましたとさ。", back:"antique_room10.jpg",bgm:"",chara:""},

    ];
    episode = scene31epi;
    episodedraw();
}

function scene32(){
    scene = "end";
    let scene32epi= [
        {say:"「ごめんなさい、リオン様。私、ダンスが下手なんです」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「そんなこと気にしなくて良いのに。でもダンスがお嫌いなら外の空気を吸いに行きましょうか」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"リオンは"+username+"を外へ連れ出しました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「わあ、綺麗！」", back:"night-sky4.jpg",bgm:"yuubenohoshi",chara:"主人公ドレスver"},
        {say:"満点の星空に、"+username+"は目を輝かせました。", back:"night-sky4.jpg",bgm:"",chara:""},
        {say:"「でしょう。今夜は流れ星が見えますよ」", back:"night-sky4.jpg",bgm:"",chara:"リオン"},
        {say:"「え、あ、本当だ！」", back:"night-sky4.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は願い事をしました。", back:"night-sky4.jpg",bgm:"",chara:""},
        {say:"「何を願ったんですか」", back:"night-sky4.jpg",bgm:"",chara:"リオン"},
        {say:"「秘密です。リオン様は？」", back:"night-sky4.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「私は"+username+"さんのことをもっと知ることができますように、かな」", back:"night-sky4.jpg",bgm:"",chara:"リオン"},
        {say:"「え……」", back:"night-sky4.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"の頬が熱くなりました。", back:"night-sky4.jpg",bgm:"",chara:""},
        {say:"（それって……）", back:"night-sky4.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"二人は流星群の夜、じっと見つめ合いましたとさ。", back:"night-sky4.jpg",bgm:"",chara:""},
    ];
    episode = scene32epi;
    episodedraw();
}

function scene33(){
    scene = 34;
    let scene33epi= [
        {say:"するとルイスとリオンが喧嘩しているではありませんか！", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「お前は理屈っぽくて嫌いだ！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"「あなたのような何でも拳で解決しようとする人には感心しませんね」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:username+"は近くにいた女性に、何があったのか聞きました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「あのお二人、どうされたんですか」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「それが、さっきこんな事件がありまして……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"女性"},
        {say:"その話によるとこうでした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"ある女性が近くにいた男に痴漢をされたそうなのです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"そこで、近くにいたルイスがその男を殴りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"しかしその様子を見たリオンは、暴力ではなく裁判で解決するべきだ、とルイスに注意しました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"それで、こんな言い争いになったというのです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"しかも、リオンは弁が立つようです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"ルイスは劣勢でした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},

        {say:"「まあまあ、まあ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は二人を止めに入りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「あ、"+username+"」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"ルイスは突然現れた"+username+"に驚いたようです。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:username+"はリオンの方を向き、頭を下げました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「申し訳ありません、リオン様。ルイス様は騎士ですから、こちらの女性を守りたいという気持ちから男性を殴ってしまったのです」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「どうかルイス様の正義感に免じて、許していただきたいです」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ですが、"+username+"。我が国サンライトでは暴力は犯罪です」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"（そうなのね）", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はリオンが起こっている理由に納得しました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"しかしフラークア王国では、ルイスの行動は合法です。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「リオン様、フラークア王国では問題がないのです」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"するとリオンは申し訳なさそうに言いました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「おや、そうだったのですね……私も、自分の正義感でルイス殿にひどいことを言いました。申し訳ありません」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"リオン"},
        {say:"「わかりゃー良いんだよ！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"ルイスはがっはっはと笑いました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:username+"は二人が仲直りしたようで安心しました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「助かったよ、"+username+"。ありがとな！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"ルイスは"+username+"に、にかっと笑います。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「いえいえ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"その時、突然、優雅な音楽がかかりました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"mikenekonowaltz",chara:""},
        {say:"「あら、何かしら？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"「ダンスの時間だ、レディ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"するとルイスは"+username+"の手を取りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「俺と踊ってくれ」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"ルイスの目は真剣でした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「もちろん」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はルイスを見つめ、二人は踊りました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"ダンスが終わると、ルイスは"+username+"をじっと見つめ、", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「俺は"+username+"のことが気になる。もっと知りたい。もっと一緒にいたい……"+username+"は？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"と言いました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""}
    ];
    episode = scene33epi;
    episodedraw();
}

function scene35(){
    scene = "end";
    let scene35epi= [
        {say:"「私も」 ", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"その返事に、ルイスはホッとしたように息をつきました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「良かった」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"二人は広間を出て、外に行きました。", back:"night-sky4.jpg",bgm:"yuubenohoshi",chara:""},
        {say:"「星がきれいだね、"+username+"」", back:"night-sky4.jpg",bgm:"",chara:"ルイス"},
        {say:"「そうですね」", back:"night-sky4.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:"二人は満点の星空の下、夜が明けるまで踊りましたとさ。", back:"night-sky4.jpg",bgm:"",chara:""},
        {say:"めでたしめでたし。", back:"night-sky4.jpg",bgm:"",chara:""}

    ];
    episode = scene35epi;
    episodedraw();
}

function scene36(){
    scene = "end";
    let scene36epi= [
        {say:"「ごめんなさい」 ", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"norowaretapiano",chara:"主人公ドレスver"},
        {say:"「そんな……」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:username+"の返事に、ルイスはショックを受けたようでした。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「でもさっき俺の味方をしてくれただろ？　それってつまり俺のことが好きってことだよな？」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"ルイス"},
        {say:"ルイスの思いがけない言葉に、"+username+"はひどく驚きました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"「何それ！」", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"はルイスのことが急に気持ち悪く思えました。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"（何この人、信じらんない！　意味わかんないんだけど！）", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:"主人公ドレスver"},
        {say:username+"は慌てて逃げだしましたとさ。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""},
        {say:"おしまい。", back:"Grand-hall-of-the-royal-palace2.jpg",bgm:"",chara:""}

    ];
    episode = scene36epi;
    episodedraw();
}