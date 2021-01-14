document.addEventListener("turbolinks:load", function () {

  $(function() {
    var how_many_card = $('.karuta--reading').length
    isStart = false
    ima_nanmonme = -1   
    // スタート
    $('#start_karuta').on('click', function() {
      isStart = true
      // ima_nanmonme = Math.floor( Math.random() * how_many_card )
      ima_nanmonme ++
      cursor = 0
      $('.karuta--comment').text("カードを選んでください")
      function count_up(){
        karuta_text = $($('.karuta--reading')[ima_nanmonme]).find('.karuta--text').text()
        time_out = setTimeout(()=>{
          cursor ++
          $('.karuta--message').text(karuta_text.slice(0,cursor))
          if (cursor < karuta_text.length){
            count_up()
          } 
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
        alert("スタートボタンを押してください")
      } else{
        $($('.concentration--card')[step]).find('.concentration--pair').attr('id')
      }
    })

    $('#stop_karuta').on('click', function() {
      isStart = false
      clearTimeout(time_out);
    })

    document.addEventListener('keydown', (event) => {
      var keyName = event.key;

      if (keyName == 's') {
        // clearTimeout(time_out);
        document.getElementById("start_karuta").click();
      }
    });

  })
})
