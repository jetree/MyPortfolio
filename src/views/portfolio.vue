<template>
  <div class="about">
      <ul class="works">
          <li>
            <a href="http://pairlu.herokuapp.com/">
              <img src="img/pairlu.png" alt="pairlu" class="works-item">
            </a>
            <div class="discription">
              Laravelで制作しました、２人で共有するTODOアプリです。
              友達状態の実現に苦労しました。
            </div>
          </li>
          <li>
            <a href="https://jetree.github.io/myportfolio/quiz.html">
              <img src="img/quiz.png" alt="クイズサイト" class="works-item">
            </a>
            <div class="discription">
              素のJavaScriptを使って製作しました。
            </div>
          </li>
          <li>
            <a href="https://jetree.github.io/myportfolio/portfolio.html">
              <img src="img/jetreeのポートフォリオサイト.png" alt="jetreeのポートフォリオサイト" class="works-item">
            </a>
            <div class="discription">
              このサイトのほぼ初期状態です。少し修正しましたが、学習開始から約1ヶ月で製作しました。<br>
              jQueryやbootstrapは使わずに製作しました。これから学習を始める方や初学者のために参考になればと思います。

            </div>
          </li>
          <li>
            <a href="https://cafechillin.com">
              <img src="img/cafechillin.png" alt="カフェチリンのホームページ" class="works-item">
            </a>
            <div class="discription">
              現在は閉店してしまいましたが、
              愛知県みよし市にあるカフェ　チリンさんのホームページです。
              bootstrapで製作し、facebookやGoogleMapを配置しました。
            </div>
          </li>
          <li>
            <div class="coming-soon">
              coming soon
            </div>
          </li>
        </ul>  </div>
</template>

<style>
  .works {
    display: flex;
    padding: 0;
    flex-wrap: wrap;
  }
  li{
    list-style: none;
    display: inline-block;
    padding: 20px;
    margin: 15px auto;
    width: 250px;
  }
  .works-item{
    width: 250px;
    height: 250px;
    object-fit: cover;
    object-position: 0 0;
  }
  .discription{
    text-align: left;
    display: block;
    width: 250px;
    color: #000;
    font-size: 0.8rem;
  }
  .coming-soon{
    width: 250px;
    height:250px;
    background-color: black;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    line-height:  250px;
    font-size: 30px;
  }
</style>


