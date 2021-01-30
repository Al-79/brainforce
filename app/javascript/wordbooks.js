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
  // カードを選択
  $('.concentration--tail').on('click', function() {
    isSelect = !isSelect
    if (isSelect) {
      check_card = $(this)
      check_card.next().css('display','block')
      $('.concentration--comment').text("カードが選択されています")
    } else {
      $(this).next().css('display','block')
      // ペアがあったとき
      if (($(this).next().find('.concentration--id').attr('id') == check_card.next().find('.concentration--id').attr('id'))) {
        setTimeout(()=>{
          check_card.hide()
          $(this).hide()
          check_card.next().css('display','none')
          $(this).next().css('display','none')
        }, 1000);
        $('.concentration--comment').text("揃いました！")
      } else{
        setTimeout(()=>{
          check_card.next().css('display','none')
          $(this).next().css('display','none')
        }, 1000);
        $('.concentration--comment').text("残念！")
      }
    }
  })

  // シャッフル
  $('#wordbook_shuffle').on('click', function() {
    wordbook_shuffle()
  })

})
})