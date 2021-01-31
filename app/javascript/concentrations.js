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
        textArr[step]=$($('.concentration--card')[step]).find('.concentration--text').text()
        colorArr[step]=$($('.concentration--card')[step]).find('.concentration--text').css('color')
        idArr[step]=$($('.concentration--card')[step]).find('.concentration--id').attr('id')
        displayArr[step]=$($('.concentration--tail')[step]).css('display')
      }
      // ランダム数列に合わせて要素を割り当てる
      for (let step = 0; step < how_many_card; step++){
        $($('.concentration--card')[step]).find('.concentration--text').text(textArr[randomArr[step]])
        $($('.concentration--card')[step]).find('.concentration--text').css('color',colorArr[randomArr[step]])
        $($('.concentration--card')[step]).find('.concentration--id').attr('id', idArr[randomArr[step]])
        $($('.concentration--tail')[step]).css('display',displayArr[randomArr[step]])
      }
    }
  var isSelect = false
  var how_many_card = $('.concentration--card').length
  concentration_shuffle()// いきなりシャッフル

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
          check_card.hide(1000)
          $(this).hide(1000)
          check_card.next().hide(1000)
          $(this).next().hide(1000)
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

    // オープン
    $('#concentration_open').on('click', function() {
      isSelect = false
      // 裏が残っているやつだけ、表をオープンにする
      for (let step = 0; step < how_many_card; step++){
        if ($($('.concentration--card')[step]).find('.concentration--tail').css('display') != 'none'){
          $($('.concentration--card')[step]).find('.concentration--head').css('display','block')
        }
      }
      $('.concentration--comment').text("カードをオープンしました")
      setTimeout(()=>{
        for (let step = 0; step < how_many_card; step++){
          $($('.concentration--card')[step]).find('.concentration--head').css('display','none')
        }
      }, 3000);
    })

    // シャッフル
    $('#concentration_shuffle').on('click', function() {
      concentration_shuffle()
    })
  
  })
})