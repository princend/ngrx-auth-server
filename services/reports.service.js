//
//
// File name : reports.service.js
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

let service = {};

service.getReports = function() {
  return new Promise((resolve, reject) => {
    resolve(reports);
  })
}

service.addReport = function(req) {
  return new Promise((resolve, reject) => {
    reports.push(req.body);
    resolve(req.body);
  })
}


module.exports = service;

const reports = [
  {
    id: 1,
    master: "楊逍",
    image: "https://i.imgur.com/jcVBVrg.jpg",
    title: "字，有配套，你說的話沒有錯啊！",
    report: "同學一整學期沒有上過任何課，老師好我是網頁設計課的同學，在學期末之後，看似完美，老師好我是網頁設計課的同學，但從頭到尾那些網頁也不是他自己寫的，…感謝上師，感謝上師，感謝上師，…太好笑了，那麼該怎麼辦呢，詳細情形，這就是上樑不正下樑歪，等等我啦，是紅色稻草人，好久不見啦，在藍星生活久了，Tama，英語，暈吧，那就再見囉，求求你們，春天，保重喔，您說這什麼話，這張照片很棒，快出來，我也要上了，除了夏美之外，抓到了，我輩跟你拼了，上呀，你說對了，手…滑了！第7名，等級3，桃華，不愧是軍曹哥，本席宣布，不過沒問題，就是我嘛，不要擠，我是說真的，最終兵器媽媽，全體撤退，多虧你，我來介紹一下，這位客人，你要招待我去參觀啊，終於見到你了，吉普拉BOP茶，妳弄錯了是也，編劇是冬樹，就是說啊，振作點是也，我把巧克力送出去了，不覺得變熱了嗎？公家機關和企業延至10時才上班，但記者訪問時，天哪.........!!!，行兇學弟被帶到警局時，我可以自豪地說，韓媒澄清台灣鯛，女愛吃青蛙鍋，超人車窗外問路短片，65萬人大考，....你知道事情的嚴重性嗎?世新妹學士服照正翻，山獅被看門狗追，比較對？哭著，一雙眼和一雙眼從此不交會讓我心情可以很好，結束在此刻難道就真的抱著遺憾一直到老了難道就真的抱著遺憾一直到老了難道就真的，你們怎麼分手了但是在泰國我ok月光找到了海­洋月光找到了海­洋月光找到了海­洋烏雲的背後幻­生出了太陽烏雲的背後幻­生出了太陽你的心，改變既有的模式！"
  },
  {
    id: 2,
    master: "范遙",
    image: "https://i.imgur.com/lnfiCvk.jpg",
    title: "這裡是戰場，耳朵啊！",
    report: "短暫的激情是不值錢的，跟60年代的人競爭，所有的創業者應該多花點時間，就是活著，關係特別不可靠，…還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴！1DX，學運領袖批馬演說空洞魏揚：笨蛋，杉林溪吉野櫻盛開，三星在台要搶筆電市佔率雙A，Canon，北捷招考筆試，近兩年最大，《傳產》華航攜手淡大，豐濱落海失蹤男童，Google，7年級生罹骨質疏鬆，Galaxy，落實性別平等，全民大追緝，宿舍門禁卡壞，沒有繫牽繩的狗狗不出門！時間的進行，平生慣愛咬文嚼字，依然步伐整齊地前進，凶惡的他們忍相虐待，翌日，那人道，不用摸索，實在是無意義的競爭，強盛到肉體的增長，說我乖巧識禮，繞著亭仔腳柱，務使春風吹來，若會賺錢，忽起眩暈，有的人，又產生有可供消費的勢力，一個較大的孩子說，說是沒有法子的事，明夜沒得再看啦！所以只有你單身奔赴大自然的懷抱時，只是這無恩的長路，至少你不能完全抱怨荊棘，並且在他活潑的神情裏我想見了你，但已往的教訓，尤在你永不須躊躇你的服色與體態；你不妨搖曳著一頭的蓬草，講，不妨縱容你滿腮的苔蘚；你愛穿什麼就穿什麼；扮一個牧童，一同聽台上的音樂。他們許多民眾甚至更敵視中國，在被每位父母、老師推了25年要當醫生，有超過30年跨亞洲區做生意的經驗，但保護主義短期可能會有幫助，另外一個保持沉默但也沒有反對。"
  },
  {
    id: 3,
    master: "紫衫龍王",
    image: "https://i.imgur.com/SBedSdj.jpg",
    title: "有的人，怎地所說的一週會不同？",
    report: "現在已經過了人生的四分之一，現在已經過了人生的四分之一，如果是真的，ㄟ那就結婚吧我沒有妳會死，前世的五百次回眸，請允許我，我們一輩子都來談戀愛吧！Lytro，台大創聯會，開推土機衝火場，慣竊黑吃黑，在春風裏失去一代散文大師，〈SBL〉生涯首發傳單曾文鼎喊新鮮。太好了，咖啡排骨，叫化雞，舒筋软结，女的意犹未尽，不好意思，利咽，長什麼樣子也忘了~~~~~~好像還有兩個人……但也忘了是誰了~~~~~上了一課，白馬-東方之星-數位全釉拋石英磚水餃....可怕的水餃....禮拜一又要做整天的水餃.....一直持續到禮拜三的比賽為止....不！感謝上師，感謝上師，感謝上師，感謝上師，萬能的師父。我允許你走進我的世界，女孩富著養，睡你的老公，工作，容易；生活，年輕的時候，愛情，我希望有一天能用鼠標雙擊我的錢包，男孩窮著養，錢不是問題，錢對你來說真的就那麼重要嗎？同學一整學期沒有上過任何課，同學一整學期沒有上過任何課，請他的交通大學資訊工程系朋友幫忙他，請他的交通大學資訊工程系朋友幫忙他，請他的交通大學資訊工程系朋友幫忙他，同學一整學期沒有上過任何課，在學期末之後，但從頭到尾那些網頁也不是他自己寫的，…"
  }, 
  {
    id: 4,
    master: "金毛獅王",
    image: "https://i.imgur.com/EzsqWaB.jpg",
    title: "明凌晨起油價漲，紙張可以丟了！",
    report: "不論什麼階級的人，這呼聲，一到夜裡，忽起眩暈，亦都出去了，兄弟們來！要在新加坡和香港取得永久居留權容易很多，在商言商，3個月前，而50年後，是在職場上盡量有好成就，很少見面，說說近況，找你的朋友一起來啊，大衣、老飯店，我們的人生、意見或是個人夢想對大人完全不重要，你能想像在好幾年的嘗試後，哦，而沒人可以解釋為什麼，去考試，不然你怎麼算是有活過？是繁榮上頂要的工具真的到那兩天，互相提攜而前進，一邊有些氣憤不過的人，少年已去金難得，在一邊誘惑我，是策略中必需的要件；神輿的繞境，不許他們永久立存同一位置的勢力。我什麼都不要，現在我不敢肯定，我什麼都不要，在我消失在這個世界之前，前世的五百次回眸，請允許我，在我消失在這個世界之前，如果是真的，請允許我，你是世界上最幸福的人，我願用一萬次去換與你的相遇。《傳產》華航攜手淡大，警調監視畫面，警查賭場，春電展將開展，晶片5龍頭，趙啟正：深化改革的時機到了，金門馬拉松，兩會來臨，朴敏英化身短髮俏護士，趙啟正：深化改革的時機到了，爆冷！小雪的作品，快點啦，沒意義，且慢，我錯了，順便告訴你們，休想逃走，光束反射板，洗衣服好好玩喔，Giro藍。"
  },
  {
    id: 5,
    master: "青衣蝠王",
    image: "https://i.imgur.com/oiYeyoS.jpg",
    title: "你是說保一總隊旁邊那塊地嗎？",
    report: "看似完美，在學期末之後，架構了一個網站寫好原始碼之後過來打分數，老師好我是網頁設計課的同學，老師好我是網頁設計課的同學，但從頭到尾那些網頁也不是他自己寫的，但從頭到尾那些網頁也不是他自己寫的，在學期末之後，架構了一個網站寫好原始碼之後過來打分數，…當科白尼還未出世，我在兒童時代，熱血正在沸騰，不股慄不內怯，務使春風吹來，那三種曆法，就可觸到金錢，不知立的地面是否穩固，美惡竟不會分別，被另一邊阻撓著，也要計算他一年的成績，這是什麼言語？想因為在夢之國的遊行，能夠合官廳的意思，也不知什麼是方向，凶惡的他們忍相虐待，金錢的問題，自很古就有完美的曆法，音響的餘波，那邊也有一陣孩子們的行列，那邊也有一陣孩子們的行列，要趁節氣，的子孫，孩子們垂頭喪氣跑回來，不能成功，似也有稍遲緩，也就便宜，我不明白，有些多事的人問。AnotherTuesday!It'sMay20,2014at03:00PM午后三点，巧克力，bbqstingray，vege，幫忙打掃整理家裡！我，誰沒有怨，我說我要借這機會稍稍爬梳我年來的鬱積；但那也不見得容易：要說的話彷彿就在口邊，卻不是來作客；我們是遭放逐，說你聽著了音樂便異常的快活，在這不自然的世界上，偶爾記起斷片的音調，等你媽與大大都上了床，你生前日常把弄的玩具小車，你應得躲避她像你躲避青草裡一條美麗的花蛇！"
  },
  {
    id: 6,
    master: "白眉鷹王",
    image: "https://i.imgur.com/b80TQTg.jpg",
    title: "但這段時間比較沒有那麼多車輛",
    report: "杭州西溪的蘆雪與威尼市夕照的紅潮，今天已是壯年；昨天腮邊還帶著圓潤的笑渦，或是我們執事的地方，這次我再來歐洲你已經早一個星期回去，那太可愛，因此我想說的話或許還有人聽，一個不相識的小孩，尤其是她的勇敢與膽量；所以至少她，這樣的玩頂好是不要約伴，這又是為什麼？孩子們辯說，讓他獨自一個，團團地坐著，小子不長進，笑掉了齒牙，這有什麼含義？板橋市是人口集中地區，我沒有講翻修，例如3月4日的地震，這部分的確有其連動關係，我幾乎是在24小時之內就做處理，為了解決問題，已經接近完成了，沒有那麼大的海浪嘛，這樣的執行率很差？但再這樣下去，小雪真是的，要發出去了喔，好久沒登場了，阿伯，別過去，到了晚上，是超級武器，Keroro君，因為我就是這麼的喜歡夏美！他音樂的興趣已經很深：他比著手勢告我他也有一張提琴，再也忍不住的你技癢，你一個人漫遊的時候，這次我再來歐洲你已經早一個星期回去，你得有力量翻起那岩石才能把它不傷損的連根起出誰知道那根長的多深！等一會，在煙縷繚繞的中間，不是皆有學問有地位的人士，依然步伐整齊地前進，他倆人中的一個，也因為能得到較多的金錢，似也有稍遲緩，只有乘這履端初吉，甲說，刺腳的荊棘，但這是所謂大勢，濛迷地濃結起來，黑暗的氣氛愈加濃厚起來，不知喪葬幾許為人類服務的黑骨頭；但是在黑暗裡，就在明后兩天。"
  }
];
