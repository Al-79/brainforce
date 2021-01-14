document.addEventListener("turbolinks:load", function () {

  $(function() {
    var how_many_card = $('.karuta--reading').length
    isStart = false
    ima_nanmonme = -1   
    // スタート
    $('#start__karuta').on('click', function() {
      isStart = true
      $('#start__karuta').css('display','none')
      $('#pass__karuta').css('display','block')
      $('#stop__karuta').css('display','block')
      karuta_frame = 300
      $('.karuta--time').text("残り時間：" + karuta_frame / 5)
      ima_nanmonme = Math.floor( Math.random() * how_many_card )
      // ima_nanmonme ++
      cursor = 0
      $('.karuta--comment').text("カードを選んでください")
      function count_up(){
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
          // if (cursor < karuta_text.length){
          //   count_up()
          // } 
          // else{
          //   $('.karuta--comment').text("時間切れ！")
          //   setTimeout(()=>{
          //     $('.karuta--comment').text("スタートボタンを押してください")
          //   }, 1000);
          // }
        },200)
      }
      count_up()
    })

    $('.karuta--tail').on('click', function() {
      if (!isStart) {
        alert("スタート(S)を押してください")
      } else{
        if ($(this).find('.karuta--id').attr('id') == $($('.karuta--head')[ima_nanmonme]).find('.karuta--id').attr('id')) {
          $('.karuta--comment').text("正解！")
          clearTimeout(time_out);
        } else{
          $('.karuta--comment').text("残念！")
        }

      }
    })

    $('#stop__karuta').on('click', function() {
      isStart = false
      clearTimeout(time_out);
    })

    document.addEventListener('keydown', (event) => {
      var keyName = event.key;

      if (keyName == 's') {
        document.getElementById("start__karuta").click();
      }
    });

  })
})
