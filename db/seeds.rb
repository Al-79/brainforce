# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
if User.exists?(email: 'donald@trump.com')
  user = User.where(email: 'donald@trump.com')[0]
else
  user = User.create(nickname: 'ドナルド', email: 'donald@trump.com', password: 'donaldtrump')
end
book = Book.create(name: 'トランプ', genre_id: 99, font_size: 10, comment: 'マーク', user_id: user.id)
book.questions.create(content: '♠', cont_color: '#000000', answer: '♠︎', ans_color: '#000000')
book.questions.create(content: '☘', cont_color: '#000000', answer: '☘', ans_color: '#000000')
book.questions.create(content: '❤︎', cont_color: '#FF0000', answer: '❤︎', ans_color: '#FF0000')
book.questions.create(content: '♦︎', cont_color: '#FF0000', answer: '♦️', ans_color: '#FF0000')

if User.exists?(email: 'john@stroop.com')
  user = User.where(email: 'john@stroop.com')[0]
else
  user = User.create(nickname: 'ジョン', email: 'john@stroop.com', password: 'johnstroop')
end
book = Book.create(name: 'ストループ', genre_id: 99, font_size: 50, comment: '色と文字のペア', user_id: user.id)
book.questions.create(content: 'くろ', cont_color: '#000000', answer: 'くろ', ans_color: '#000000')
book.questions.create(content: 'あか', cont_color: '#FF0000', answer: 'あか', ans_color: '#FF0000')
book.questions.create(content: 'あお', cont_color: '#0000FF', answer: 'あお', ans_color: '#0000FF')
book.questions.create(content: 'くろ', cont_color: '#FF0000', answer: 'あか', ans_color: '#000000')
book.questions.create(content: 'あか', cont_color: '#0000FF', answer: 'あお', ans_color: '#FF0000')
book.questions.create(content: 'あお', cont_color: '#000000', answer: 'くろ', ans_color: '#0000FF')

if User.exists?(email: 'teika@teika.com')
  user = User.where(email: 'teika@teika.com')[0]
else
  user = User.create(nickname: '定家', email: 'teika@teika.com', password: 'teikateika')
end
book = Book.create(name: '百人一首', genre_id: 1, font_size: 10, comment: '一字決まり', user_id: user.id)
book.questions.create(content: 'む', cont_color: '#000000', answer: 'きりたちのほるあきのゆふくれ', ans_color: '#000000')
book.questions.create(content: 'す', cont_color: '#000000', answer: 'ゆめのかよひちひとめよくらむ', ans_color: '#000000')
book.questions.create(content: 'め', cont_color: '#000000', answer: 'くもかくれにしよはのつきかな', ans_color: '#000000')
book.questions.create(content: 'ふ', cont_color: '#000000', answer: 'むへやまかせをあらしといふらむ', ans_color: '#000000')
book.questions.create(content: 'さ', cont_color: '#000000', answer: 'いつこもおなしあきのゆふくれ', ans_color: '#000000')
book.questions.create(content: 'ほ', cont_color: '#000000', answer: 'たたありあけのつきそのこれる', ans_color: '#000000')
book.questions.create(content: 'せ', cont_color: '#000000', answer: 'われてもすゑにあはむとそおもふ', ans_color: '#000000')

