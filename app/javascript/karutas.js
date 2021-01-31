document.addEventListener("turbolinks:load", function () {
  function count_up(){// この動作を二つに分割しろ
    karuta_frame --
    $('.karuta__time').text("残り時間：" + Math.ceil(karuta_frame / 5))
    karuta_text = $($('.karuta__reading')[ima_nanmonme]).find('.karuta__text').text()
    time_out = setTimeout(()=>{
      cursor ++
      $('.karuta__message').text(karuta_text.slice(0,cursor))
      if (karuta_frame >= 0){
        count_up()
      } else{
        $('.karuta__comment').text("タイムオーバー！")
      }
    },200)
  }

  $(function() {
    var how_many_card = $('.karuta__reading').length
    isStart = false
    isCount = false
    ima_nanmonme = -1   
    // スタート
    $('#karuta--start').on('click', function() {
      isStart = true
      $('#karuta--start').css('display','none')
      $('#karuta--pass').css('display','block')
      $('#karuta--stop').css('display','block')
      if (isCount) {
      } else{
        isCount = true
        karuta_frame = 300
        $('.karuta__time').text("残り時間：" + karuta_frame / 5)
      }
      ima_nanmonme ++
      cursor = 0
      $('.karuta__comment').text("カードを選んでください")
      count_up()
      console.log("あっそっかぁ")
    })

    $('.karuta__tail').on('click', function() {
      if (!isStart) {
        alert("スタート(s)を押してください")
      } else{
        if ($(this).find('.karuta__id').attr('id') == $($('.karuta__head')[ima_nanmonme]).find('.karuta__id').attr('id')) {
          $('.karuta__comment').text("正解！")
          clearTimeout(time_out);
        } else{
          $('.karuta__comment').text("残念！")
        }

      }
    })

    $('#karuta--pass').on('click', function() {
      $('.karuta__comment').text("パスします")
      stopTimeout(time_out);
      setTimeout(()=>{
        $('.karuta__comment').text("カードを選んでください")
        ima_nanmonme ++
        cursor = 0
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
      clearTimeout(time_out);
    })

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
