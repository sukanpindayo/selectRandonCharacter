/**
 * ボタン押下時イベント
 * ランダムに探索者を一人取得する
 */
 document.getElementById("button").addEventListener('click',
   function(){
    //全キャラクターを格納する配列
    const characterArray = [
      "梅松鶴之丞","鹿目カイン瞭","善田井未聞","清見せとか",
      "兎野タケシ","野火剛","犬島マモル","羽鳥ユイ","雨月春馬","和泉ハヤト","鶴崎愛",
      "良岡ちひろ","舌崎三寸","七堂伽藍","卯月にと","由泉慈杏","丸楽るら","三ツ矢くん","我聞極彩","九井伴",
      "宝家猪子","不乱健ー","霧生霧羽","耳袋哲学","北条豊","証千里",
      "地雷嫌","ジゴトミ","唐沢玄米茶","猿飛服部斎","クリシュナ・デビ","ルドラ・デビ","朝田晴流矢","唐沢麦茶","唐沢マテ茶","一角初"
      ]
    //ランダムに一件取得し、画面に出力
    document.getElementById("result").innerText = characterArray[Math.floor(Math.random() * characterArray.length)];
   }
 );
