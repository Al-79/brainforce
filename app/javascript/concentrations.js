document.addEventListener("turbolinks:load", function () {

  // シャッフル
  function concentration_shuffle(){
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
      textArr[step]=$($('.card__cell')[step]).find('.concentration__text').text()
      colorArr[step]=$($('.card__cell')[step]).find('.concentration__text').css('color')
      idArr[step]=$($('.card__cell')[step]).find('.concentration__id').attr('id')
      displayArr[step]=$($('.concentration__tail')[step]).css('display')
    }
    // ランダム数列に合わせて要素を割り当てる
    for (let step = 0; step < how_many_card; step++){
      $($('.card__cell')[step]).find('.concentration__text').text(textArr[randomArr[step]])
      $($('.card__cell')[step]).find('.concentration__text').css('color',colorArr[randomArr[step]])
      $($('.card__cell')[step]).find('.concentration__id').attr('id', idArr[randomArr[step]])
      $($('.concentration__tail')[step]).css('display',displayArr[randomArr[step]])
    }
  }
  var isSelect = false
  var how_many_card = $('.card__cell').length
  concentration_shuffle()// いきなりシャッフル

  $(function() {
    // カードを選択
    $('.concentration__tail').on('click', function() {
      isSelect = !isSelect
      if (isSelect) {
        check_card = $(this)
        check_card.next().css('display','block')
        $('.concentration__comment').text("カードが選択されています")
      } else {
        $(this).next().css('display','block')
        // ペアがあったとき
        if (($(this).next().find('.concentration__id').attr('id') == check_card.next().find('.concentration__id').attr('id'))) {
          check_card.hide(1000)
          $(this).hide(1000)
          check_card.next().hide(1000)
          $(this).next().hide(1000)
          $('.concentration__comment').text("揃いました！")
        } else{
          setTimeout(()=>{
            check_card.next().css('display','none')
            $(this).next().css('display','none')
          }, 1000);
          $('.concentration__comment').text("残念！")
        }
      }
    })

    // オープン
    $('#concentration_open').on('click', function() {
      isSelect = false
      // 裏が残っているやつだけ、表をオープンにする
      for (let step = 0; step < how_many_card; step++){
        if ($($('.card__cell')[step]).find('.concentration__tail').css('display') != 'none'){
          $($('.card__cell')[step]).find('.concentration__head').css('display','block')
        }
      }
      $('.concentration__comment').text("カードをオープンしました")
      setTimeout(()=>{
        for (let step = 0; step < how_many_card; step++){
          $($('.card__cell')[step]).find('.concentration__head').css('display','none')
        }
      }, 3000);
    })

    // シャッフル
    $('#concentration_shuffle').on('click', function() {
      concentration_shuffle()
    })
  
  })
})