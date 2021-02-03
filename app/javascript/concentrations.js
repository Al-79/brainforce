document.addEventListener("turbolinks:load", function () {

  // 要素シャッフル
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
    var tailArr = Array(how_many_card)
    for (let step = 0; step < how_many_card; step++){
      textArr[step]=$($('.card__cell')[step]).find('.concentration__text').text()
      colorArr[step]=$($('.card__cell')[step]).find('.concentration__text').css('color')
      idArr[step]=$($('.card__cell')[step]).find('.concentration__id').attr('id')
      tailArr[step]=$($('.concentration__tail')[step]).css('display')
    }
    // ランダム数列に合わせて要素を割り当てる
    for (let step = 0; step < how_many_card; step++){
      $($('.card__cell')[step]).find('.concentration__text').text(textArr[randomArr[step]])
      $($('.card__cell')[step]).find('.concentration__text').css('color',colorArr[randomArr[step]])
      $($('.card__cell')[step]).find('.concentration__id').attr('id', idArr[randomArr[step]])
      $($('.concentration__tail')[step]).css('display',tailArr[randomArr[step]])
    }
  }

  var how_many_card = $('.card__cell').length
  is1Pmode = false
  isCPUmode = false
  $('.concentration__head').hide()// ページ切り替えなどで開いたままのものを閉じる
  $('.concentration__tail').show()// ページ切り替えなどで開いたままのものを閉じる
  concentration_shuffle()// いきなりシャッフル
  select_state = 0

  $(function() {
    // カードを選択
    $('.concentration__tail').on('click', function() {
      select_state ++
      if (select_state == 1) {
        check_card = $(this)
        check_card.next().css('display','block')
        $('.concentration__comment').text("カードが選択されています")
      } else if (select_state == 2) {
        $(this).next().css('display','block')
        // ペアがあったとき
        if (($(this).next().find('.concentration__id').attr('id') == check_card.next().find('.concentration__id').attr('id'))) {
          select_state = 0
          check_card.hide(1000)
          $(this).hide(1000)
          check_card.next().hide(1000)
          $(this).next().hide(1000)
          $('.concentration__comment').text("揃いました！")
        } else{
          setTimeout(()=>{
            select_state = 0// Timeoutが終わるまでカードが選択できない状態になる
            check_card.next().css('display','none')
            $(this).next().css('display','none')
          }, 1000);
          $('.concentration__comment').text("残念！")
        }
      }
    })

    // 1人で遊ぶ
    $('#concentration--1Pmode').on('click', function() {
      is1Pmode = true
      $('#concentration--open').css('display','block')
      $('#concentration--1Pmode').css('display','none')
      $('#concentration--CPUmode').css('display','none')
    })
  
    // CPUと遊ぶ
    $('#concentration--CPUmode').on('click', function() {
      isCPUmode = true
      $('#concentration--shuffle').css('display','block')
      $('#concentration--1Pmode').css('display','none')
      $('#concentration--CPUmode').css('display','none')
    })

    // シャッフル
    $('#concentration--shuffle').on('click', function() {
      if (select_state == 0) {
        concentration_shuffle()
      } else {
        $('.concentration__comment').text("カードが選択されています。シャッフルできません")
      }
    })

    // オープン
    $('#concentration--open').on('click', function() {
      select_state = 0
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
  })
})