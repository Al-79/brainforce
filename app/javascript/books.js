document.addEventListener("turbolinks:load", function () {
  $(function() {
    var question_num = $('.js-question').length;
    $('#add_question').on('click', function() {
      var input = `<div class="js-question">
      <input placeholder="問題" type="text" name="book[questions_attributes][${question_num}][content]" id="book_questions_attributes_${question_num}_content">
      <input placeholder="答え" type="text" name="book[questions_attributes][${question_num}][answer]" id="book_questions_attributes_${question_num}_answer">
      </div>`
      $('.js-book').append(input);
      question_num ++
    })
  })
})