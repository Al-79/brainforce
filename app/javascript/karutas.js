document.addEventListener("turbolinks:load", function () {

  $(function() {
    var how_many_card = $('.karuta--reading').length
    ima_nanmonme = -1    
    // スタート
    $('#start_karuta').on('click', function() {
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
        },100)
      }
      count_up()
      // for (let step = 0; step < how_many_card; step++){
      //   text_length = $($('.karuta--reading')[step]).find('.karuta--text').text().length
      //   for (let cursor = 1; cursor <= text_length; cursor++){
      //     time_step += 200
      //     setTimeout(()=>{
      //       karuta_message = $($('.karuta--reading')[step]).find('.karuta--text').text().slice(0,cursor)
      //       $('.karuta--message').text(karuta_message)
      //     }, time_step);
      //     console.log(time_out)
      //     // clearTimeout(time_out);
      //   }
      // }
    })


    $('#stop_karuta').on('click', function() {
      console.log(time_out)
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
