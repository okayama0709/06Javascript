# 2023 年「Javascript 基礎」　授業課題

##　授業内コード

## 11 　月　１９　日

###　 click イベント

```js
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
  </script>
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
