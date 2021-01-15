document.addEventListener("turbolinks:load", function () {
  function count_up(){// この動作を二つに分割しろ
    karuta_frame --
    $('.karuta--time').text("残り時間：" + Math.ceil(karuta_frame / 5))
    karuta_text = $($('.karuta--reading')[ima_nanmonme]).find('.karuta--text').text()
    time_out = setTimeout(()=>{
      cursor ++
      $('.karuta--message').text(karuta_text.slice(0,cursor))
      if (karuta_frame >= 0){
        count_up()
      } else{
        $('.karuta--comment').text("タイムオーバー！")
      }
    },200)
  }

  $(function() {
    var how_many_card = $('.karuta--reading').length
    isStart = false
    isCount = false
    ima_nanmonme = -1   
    // スタート
    $('#start__karuta').on('click', function() {
      isStart = true
      $('#start__karuta').css('display','none')
      $('#pass__karuta').css('display','block')
      $('#stop__karuta').css('display','block')
      if (isCount) {
      } else{
        isCount = true
        karuta_frame = 300
        $('.karuta--time').text("残り時間：" + karuta_frame / 5)
      }
      ima_nanmonme ++
      cursor = 0
      $('.karuta--comment').text("カードを選んでください")
      count_up()
      console.log("あっそっかぁ")
    })

    $('.karuta--tail').on('click', function() {
      if (!isStart) {
        alert("スタート(s)を押してください")
      } else{
        if ($(this).find('.karuta--id').attr('id') == $($('.karuta--head')[ima_nanmonme]).find('.karuta--id').attr('id')) {
          $('.karuta--comment').text("正解！")
          clearTimeout(time_out);
        } else{
          $('.karuta--comment').text("残念！")
        }

      }
    })

    $('#pass__karuta').on('click', function() {
      $('.karuta--comment').text("パスします")
      stopTimeout(time_out);
      setTimeout(()=>{
        $('.karuta--comment').text("カードを選んでください")
        ima_nanmonme ++
        cursor = 0
      },1000)
    })

    $('#stop__karuta').on('click', function() {
      isStart = false
      $('#start__karuta').css('display','block')
      $('#pass__karuta').css('display','none')
      $('#stop__karuta').css('display','none')
      $('.karuta--message').text("　")
      $('.karuta--time').text("　")
      $('.karuta--comment').text("ストップしました！")
      setTimeout(()=>{
        $('.karuta--comment').text("スタート(s)を押してください")
      },1000)
      clearTimeout(time_out);
    })

    document.addEventListener('keydown', (event) => {
      var keyName = event.key;
      if (keyName == 's') {
        if (isStart) {
          document.getElementById("stop__karuta").click();
        } else{
          document.getElementById("start__karuta").click();
        }
      } else if (keyName == 'p') {
        if (isStart) {
          document.getElementById("pass__karuta").click();
        }
      }
    });

  })
})
