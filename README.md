# 2023 年「Javascript 基礎」　授業課題

##　授業内コード

### 12 月 14 日

# コールバック関数

```js
// 関数式１
const concatenateSpace = function (lastName, firstName) {
  return lastName + " " + firstName;
};
// 関数式２
const useConcatenate = function (name, func) {
  let concatName = func(name[0], name[1]);
  console.log("結合結果：" + concatName);
};

let nameParam = ["岡山", "祐斗"];

// 関数式２の実行(引数１＝配列,引数２＝関数名)
useConcatenate(nameParam, concatenateSpace);

//結合結果：中田 雄二

//   関数式１
const testFunc = function (func) {
  console.log("testFuncが実行されました");
  // 関数の２秒後実行
  setTimeout(function () {
    // 関数の実行
    func();
    //   ２０００ｍｍ秒
  }, 2000);
};
//  関数式２
const callback = function () {
  console.log("callbackが実行されました");
};
// 関数の実行（関数名）
testFunc(callback);
```

# 変数応用

```html
<body>
  <h1>動物のスピード</h1>
  <div class="dash">
    <p>START</p>
    <p>GOAL</p>
  </div>
  <ul>
    <li class="dog">イ　ヌ<span>🐕</span></li>
    <li class="cat">ネ　コ<span>🐈</span></li>
    <li class="horse">ウ　マ<span>🐎</span></li>
    <li class="pig">ブ　タ<span>🐖</span></li>
    <li class="gorilla">ゴリラ<span>🦍</span></li>
  </ul>
  <button class="startBtn">よーい、ドン！</button>
  <script>
    const startBtn = document.querySelector(".startBtn");
    const animalSpeed = [3, 4, 1, 3, 2];
    const animals = document.querySelectorAll("li span");
    console.log(animals);

    // ここに関数animalsRunを作成してください。
    const animalsRun = function (animal, speed) {
      for (let i = 0; i < animal.length; i++) {
        animal[i].style.transitionDuration = speed[i] + "s";
        animal[i].classList.add("run");
      }
    };

    startBtn.addEventListener("click", function () {
      animalsRun(animals, animalSpeed);
    });
  </script>
</body>
```

### 12 月 07 日

#　グローバル変数とローカル変数

```js
const globalData = "hogehoge"; //グローバル変数
const foobaa = function () {
  const globalData = "fugafuga"; //ローカル変数なんだけど、グローバルと変数名が同じ
  console.log(globalData); //fugafuga＊ローカル変数はグローバルよりも優先されるかつ、外にはもれない
};
console.log(globalData); //hogehoge＊グローバル変数
//   関数の中だけでなく、｛｝（ブロック）内でしか使えません。
// 外に出したい場合は、return（戻り値）を使う。
```

#　戻り値

```html
<body>
  <p>ケーキ（450円）の税込み価格</p>
  <button class="takeOut">テイクアウト</button>
  <button class="eatIn">イートイン</button>
  <p>税込み価格は、<span class="taxIn"></span>円です。</p>
</body>
```

```js
const cake = 450;
const taxIn = document.querySelector(".taxIn");
const takeOutBtn = document.querySelector(".takeOut");
const eatIn = document.querySelector(".eatIn");

const taxPrice = function (cake, tax) {
  const result = cake + cake * tax;
  return result;
};

takeOutBtn.addEventListener("click", function () {
  const price = taxPrice(cake, 0.08);
  taxIn.innerHTML = price;
});

eatIn.addEventListener("click", function () {
  const price = taxPrice(cake, 0.1);
  taxIn.innerHTML = price;
});
```

### 11 月 30 日

# 関数の定義

```js
//例文１
//関数の定義
function aisatus(message) {
  console.log(message);
}
//   関数の実行
aisatus("おはようございます");
console.log("１回目が呼び出し");
aisatus("こんにちは");
console.log("２回目の呼び出し");
aisatus("こんばんは");
//   関数の定義
function dogName() {
  console.log("私のうちの犬の名前は、ポチです。");
}
// 関数の実行
dogName();
catName();
//   関数定義
function catName() {
  console.log("私のうちの猫の名前は、たまです。");
}

//例文２
function kuku(num) {
  let counter;
  for (let i = 0; i < 10; i++) {
    console.log(`${num} × ${i + 1} = ${num * (i + 1)}`);
  }
}
kuku(5);
// 関数定義
function showMessage(message) {
  console.log(message);
}
//   関数式
const showMessage2 = function (message) {
  console.log("メッセージ２");
};
//   イベントで関数式
document.body.addEventListener("click", function () {
  showMessage("こんにちは");
});
```

例３

```html
<body>
  <p class="result"></p>
  <button class="rebutton">ルセラ</button>
  <button class="onebutton">ワンピース</button>
  <div class="fnArea"></div>
</body>
```

```js
const member_list = ["チェウォン", "サクラ", "ユンジン", "カズハ", "ウンチェ"];
const mugiwara_list = [
  "モンキー・D・ルフィ",
  "ナミ",
  "ロロノア・ゾロ",
  "ヴィンスモーク・サンジ",
  "ウソップ",
  "トニートニー・チョッパー",
  "ニコ・ロビン",
  "フランキー",
  "ブルック",
  "ジンベエ",
];
const memberArea = document.querySelector(".fnArea");

const memberPush = function (members) {
  console.log(members);
  const ulElm = document.createElement("ul");

  for (let i = 0; i < members.length; i++) {
    const liElm = document.createElement("li");
    liElm.textContent = members[i];
    ulElm.appendChild(liElm);
  }
  memberArea.innerHTML = "";
  memberArea.appendChild(ulElm);
};

const button = document.querySelector(".rebutton");

button.addEventListener("click", () => {
  memberPush(member_list);
});
const onebutton = document.querySelector(".onebutton");

onebutton.addEventListener("click", () => {
  memberPush(mugiwara_list);
});
```

### 11 　月 16 日

```js
// 条件分岐
const n1 = 1;
const n2 = 2;

// ◯　または　◯　どちらかが合致していれば”true”になる
if (n1 === 1 || n2 === 1) {
  console.log(true);
} else {
  console.log(false);
}
// 　◯　かつ　◯　どちらも合致していれば"true"になる
if (n1 === 1 && n2 === 1) {
  console.log(true);
} else {
  console.log(false);
}
if (n1 === 1 && n2 === 2) {
  console.log(true);
} else {
  console.log(false);
}

//-imgのaltの名前を持ってくる
// アトリビュートはわりと利用価値あり？ｓｒｃで主
const catimg = document.querySelector(".img_cat");
console.log(catimg);
const catalt = catimg.getAttribute("alt");
console.log(catalt);

//-配列の表示とクッリクしたときにクラスとスタイル変更
const school_list = document.querySelectorAll("span");
console.log(school_list);
for (let i = 0; i < school_list.length; i++) {
  school_list[i].addEventListener("click", () => {
    console.log(school_list[i].innerHTML);
    school_list[i].classList.toggle("red");
    school_list[i].classList.toggle("weight");
    school_list[i].style.color = "red";
    school_list[i].style.fontWeight = "bold";
  });
}

//-
//画像ファイル名は、配列から取得します。
const fujiImg_list = ["mt-fuji001.jpg", "mt-fuji002.jpg", "mt-fuji003.jpg"];

//ここに処理を書きます。
const imageArea = document.querySelector("#mt-fuji");
const btns = document.querySelectorAll(".image-fuji");
const preBtn = document.querySelector(".pre");
const nextBtn = document.querySelector(".next");
let count = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    imageArea.setAttribute("src", `images/${fujiImg_list[i]}`);
    count = i;
  });
}
```

条件分岐で使うかもしれない。メモ

### 11 月 9 　日

##　 if 文

```js
//クリックイベント
    <script>
      const widthsize = window.innerWidth; //現在のブラウザの横幅
      console.log(widthsize);
      const left = document.querySelector(".leftZone");
      const right = document.querySelector(".rightZone");

      document.body.addEventListener("click", (event) => {
        console.log(event.clientX);
        const list = document.createElement("li");

        if (widthsize / 2 <= event.clientX) {
          console.log("右");
          list.textContent = "右";
          right.appendChild(list);
        } else {
          console.log("左");
          list.textContent = "左";
          left.appendChild(list);
        }
      });
    </script>
```

if 文と要素の追加を行う。appendChild や textContent はまた忘れると思う
今回の場合は list（右のテキストが入った li [element]）を right に追加している。

### 11 　月　２　日

### click イベント

```js
  // クラスの追加
<script>
      const dancer = document.querySelector(".imgArea img");
      const dancingBtn = document.querySelector(".dancing");
      const stopBtn = document.querySelector(".stop");
      const changeBtn = document.querySelector(".change");

      dancingBtn.addEventListener("click", () => {
        dancer.setAttribute("class", "dance");
      });

      stopBtn.addEventListener("click", () => {
        dancer.removeAttribute("class");
      });

      changeBtn.addEventListener("click", () => {
        dancer.setAttribute("src", "images/ballet_woman.png");
      });
    </script>
```

## 10 　月　１ 9 日

###　 for 文

```js
<script>
const element = document.querySelector("ul"); //ul取得
const fruits = ["りんご", "もも", "バナナ"]; //配列を定数に入れる
console.log(fruits.length); //確認
for (let i = 0; i < fruits.length; i++) {
  //li要素を作成
  const liLast = document.createElement("li");
  //配列要素をliに代入
  liLast.textContent = fruits[i];
  //ul内の最後に追加
  element.appendChild(liLast);
}
</script>
```

###　配列

```js
const name_list = ["松田", "田中", "中山", "山本", "本田"];
```

## 10 月 12 日

###　要素の取得

```html
<body>
  <h1>果物の種類</h1>
  <ul id="fruitslist" class="listbox__list">
    <li>りんご</li>
    <li>みかん</li>
    <li>バナナ</li>
  </ul>
  <!--リストを操作するDOM操作のスクリプト-->
  <script>
    //メロンを加えたい
    const element = document.querySelector("ul");
    console.log(element);

    //selecterってCSSのセレクターなので、
    const element2 = document.querySelector("#fruitslist");
    console.log(element2);

    const element3 = document.querySelector(".listbox__list");
    console.log(element3);

    const lilast = document.createElement("li");
    console.dir(lilast); //dirでプロパティを表示
    lilast.textContent = "メロン";
    console.log(lilast);
  </scrip>
</body>
```

### 変数と定数と複合演算子

```js
//   変数
let a; //変数の宣言
a = 10; //代入
console.log(a);

a = "Hello"; //文字列型
console.log(a);

//let a = "World";　できない

//定数の宣言
const PI = 3.14;
console.log(PI);

//複合代入演算子
let n = 5;
n = n + 5;
console.log(n);

let n2 = 5;
n2 += 2; //複合代入演算子
console.log(n2);
//インクリメント
let n3 = 5;
n3++;
console.log(n3);
```

-リテラル演算子

### 文字列の計算

```js
console.log("トライデントコンピューター専門学校\nWeb デザイン学科"); //文字型リテラル
console.log(456); //数値型リテラル
console.log("123"); //文字列
console.log(`トライデントコンピューター専門学校
Web デザイン学科
岡山`);

// 文字列の連結
const result = "計算結果";
console.log("ABC" + "EFG");

console.log("円周率は" + 3.14 + "です"); //文字列と文字列
console.log("計算結果" + 123 + 456); //文字列と数値
console.log(123 + 456 + "となりました"); //数値計算＋文字列
console.log("計算結果" + (123 + 456)); //文字列＋（数値）
console.log("2" - 1); //文字列ー数値

console.log(`${result}123+456`);
```

## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>演習</title>
  </head>
  <body>
    <script></script>
  </body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。
