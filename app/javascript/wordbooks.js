document.addEventListener("turbolinks:load", function () {

  // シャッフル
  function wordbook_shuffle(){
    // 0からnまでの数列と空の数列を作る
    indexArr = Array.from({ length: how_many_card }).map((_, index) => index)
    randomArr = []
    // 空の数列に数を移し、ランダム数列にする
    while (indexArr.length > 0) {
      n = indexArr.length;
      k = Math.floor(Math.random() * n);
    
      randomArr.push(indexArr[k]);
      indexArr.splice(k, 1);
    }
    // 要素を格納
    var textArr = Array(how_many_card)
    var colorArr = Array(how_many_card)
    var idArr = Array(how_many_card)
    var displayArr = Array(how_many_card)
    for (let step = 0; step < how_many_card; step++){
      textArr[step]=$($('.wordbook--tail--content')[step]).find('.wordbook--text').text()
      colorArr[step]=$($('.wordbook--tail--content')[step]).find('.wordbook--text').css('color')
      displayArr[step]=$($('.wordbook--tail--content')[step]).css('display')
    }
    // ランダム数列に合わせて要素を割り当てる
    for (let step = 0; step < how_many_card; step++){
      $($('.wordbook--tail--content')[step]).find('.wordbook--text').text(textArr[randomArr[step]])
      $($('.wordbook--tail--content')[step]).find('.wordbook--text').css('color',colorArr[randomArr[step]])
      $($('.wordbook--tail--content')[step]).css('display',displayArr[randomArr[step]])
    }
  }
var isSelect = false
var how_many_card = $('.wordbook--card').length
wordbook_shuffle()// いきなりシャッフル

$(function() {
  // 表裏を裏返し
  $('.wordbook--tail').on('click', function() {
    $(this).find('.wordbook--tail--content').hide()
    $(this).next().find('.wordbook--head--content').show()
  })
  $('.wordbook--head').on('click', function() {
    $(this).find('.wordbook--head--content').hide()
    $(this).prev().find('.wordbook--tail--content').show()
  })

  // シャッフル
  $('#wordbook_shuffle').on('click', function() {
    wordbook_shuffle()
  })

})
})