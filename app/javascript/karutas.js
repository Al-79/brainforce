document.addEventListener("turbolinks:load", function () {

  // ランダム数列
  function randArr(l){
    // 0からnまでの数列と空の数列を作る
    indexArr = Array.from({ length: l }).map((_, index) => index)
    randomArr = []
    // 空の数列に数を移し、ランダム数列にする
    while (indexArr.length > 0) {
      n = indexArr.length;
      k = Math.floor(Math.random() * n);
    
      randomArr.push(indexArr[k]);
      indexArr.splice(k, 1);
    };
    return randomArr;
  };

  // 要素シャッフル
  function karuta_shuffle(){
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
      textArr[step]=$($('.card__cell')[step]).find('.karuta__text').text()
      colorArr[step]=$($('.card__cell')[step]).find('.karuta__text').css('color')
      idArr[step]=$($('.card__cell')[step]).find('.karuta__id').attr('id')
      tailArr[step]=$($('.karuta__tail')[step]).css('display')
    }
    // ランダム数列に合わせて要素を割り当てる
    for (let step = 0; step < how_many_card; step++){
      $($('.card__cell')[step]).find('.karuta__text').text(textArr[randomArr[step]])
      $($('.card__cell')[step]).find('.karuta__text').css('color',colorArr[randomArr[step]])
      $($('.card__cell')[step]).find('.karuta__id').attr('id', idArr[randomArr[step]])
      $($('.karuta__tail')[step]).css('display',tailArr[randomArr[step]])
    }
  }

  // タイマー
  function count_up(){
    karuta_frame --
    $('.karuta__time').text("残り時間：" + Math.ceil(karuta_frame / 5) + "　得点：" + ima_nanten)
    karuta_text = $($('.karuta__head')[randomArr[ima_nanmonme]]).find('.karuta__text').text()
    if (karuta_text == ""){
      karuta_text = "　"
    }
    karuta_time_out = setTimeout(()=>{
      cursor ++
      $('.karuta__message').text(karuta_text.slice(0,cursor))
      if (isPass || isInterval){
        setTimeout(()=>{
          $('.karuta__comment').text("カードを選んでください")
          ima_nanmonme ++
          cursor = 0
          count_up()
        },1000)
      } else if (ima_nanmonme >= how_many_card){
        ima_nanten += Math.ceil(karuta_frame / 5)
        $('.karuta__comment').text("読み札がなくなりました。終了です")
        $('.karuta__time').text("得点：" + ima_nanten)
        isStart = false
        $('#karuta--start').css('display','block')
        $('#karuta--pass').css('display','none')
        $('#karuta--stop').css('display','none')
      } else if (karuta_frame >= 0){
        count_up()
      } else{
        $('.karuta__comment').text("タイムオーバー！")
        isStart = false
        $('#karuta--start').css('display','block')
        $('#karuta--pass').css('display','none')
        $('#karuta--stop').css('display','none')
      }
    },200)
  }

  var how_many_card = $('.karuta__head').length
  isStart = false
  isCount = false
  isPass = false
  isInterval = false
  ima_nanmonme = 0
  ima_nanten = 0
  karuta_shuffle()

  $(function() {
    // スタート
    $('#karuta--start').on('click', function() {
      isStart = true
      $('#karuta--start').css('display','none')
      $('#karuta--pass').css('display','block')
      $('#karuta--stop').css('display','block')
      randomArr = randArr(how_many_card);
      if (!isCount) {
        isCount = true
        karuta_frame = 300
        $('.karuta__time').text("残り時間：" + karuta_frame / 5)
      }
      ima_nanmonme = 0
      cursor = 0
      $('.karuta__comment').text("カードを選んでください")
      count_up()
    })

    $('.karuta__tail').on('click', function() {
      if (isPass || isInterval) {
        // 正解判定中、パス中に正解できないように
      } else if (!isStart) {
        alert("スタート(s)を押してください")
      } else{
        if ($(this).find('.karuta__id').attr('id') == $($('.karuta__head')[randomArr[ima_nanmonme]]).find('.karuta__id').attr('id')) {
          $('.karuta__comment').text("正解！")
          ima_nanten += 10
          isInterval = true
          setTimeout(()=>{
            isInterval = false
          },1000)
        } else{
          $('.karuta__comment').text("残念！")
        }

      }
    })

    $('#karuta--pass').on('click', function() {
      $('.karuta__comment').text("パスします")
      isPass = true
      setTimeout(()=>{
        isPass = false
      },1000)
    })

    $('#karuta--stop').on('click', function() {
      isStart = false
      $('#karuta--start').css('display','block')
      $('#karuta--pass').css('display','none')
      $('#karuta--stop').css('display','none')
      $('.karuta__message').text("　")
      $('.karuta__time').text("　")
      $('.karuta__comment').text("ストップしました！")
      setTimeout(()=>{
        $('.karuta__comment').text("スタート(s)を押してください")
      },1000)
      clearTimeout(karuta_time_out);
    })

    // キー操作
    document.addEventListener('keydown', (event) => {
      var keyName = event.key;
      if (keyName == 's') {
        if (isStart) {
          document.getElementById("karuta--stop").click();
        } else{
          document.getElementById("karuta--start").click();
        }
      } else if (keyName == 'p') {
        if (isStart) {
          document.getElementById("karuta--pass").click();
        }
      }
    });

  })
})
