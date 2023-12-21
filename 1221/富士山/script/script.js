//初期化
const slide = document.querySelector(".slide");
const imgs = document.querySelectorAll(".slide img"); //グローバル変数

console.log(imgs);
//四枚目の画像がほしい
console.log(imgs[imgs.length - 1]);
//div="slide"の中に最後の画像[imgs.length -1]を最初の画像[0]の前
//insertBeforeはappendChildの逆、前に入れる
slide.insertBefore(imgs[imgs.length - 1], imgs[0]);

//btn
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

// 左へボタン
const leftSlider = function () {
  //ローカル変数
  const slideImgs = document.querySelectorAll(".slide img");

  //左側の余白な画像を、最後に移動
  slide.appendChild(slideImgs[0]);

  //入っているstyle属性を削除
  slideImgs[0].removeAttribute("style");
};

// 関数の実行
leftBtn.addEventListener("click", leftSlider);

const rightSlider = function () {
  const slideImgs = document.querySelectorAll(".slide img");
  slideImgs[1].removeAttribute("style");
  //   slideImgs[1].style.marginLeft = "";　この書き方でも通る空白で初期値に

  slideImgs[0].style.marginLeft = "0";

  slide.insertBefore(slideImgs[slideImgs.length - 1], slideImgs[0]);
};

rightBtn.addEventListener("click", rightSlider);

// 2秒で切り替わる
const slideShow = function (func) {
  setInterval(func, 2000);
};

slideShow(leftSlider);
