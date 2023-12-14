# 2023 年「Javascript 基礎」　授業課題

##　授業内コード

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
