# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
if User.exists?(nickname: 'ドナルド')
  user = User.where(nickname: 'ドナルド')[0]
else
  user = User.create(nickname: 'ドナルド', email: 'donald@trump.com', password: 'donaldtrump')
end
book = Book.create(name: 'トランプ', genre_id: 99, font_size: 10, comment: 'マーク', user_id: user.id)
book.questions.create(content: '♠', cont_color: '#000000', answer: '♠︎', ans_color: '#000000')
book.questions.create(content: '☘', cont_color: '#000000', answer: '☘', ans_color: '#000000')
book.questions.create(content: '❤︎', cont_color: '#FF0000', answer: '❤︎', ans_color: '#FF0000')
book.questions.create(content: '♦︎', cont_color: '#FF0000', answer: '♦️', ans_color: '#FF0000')

if User.exists?(nickname: '定家')
  user = User.where(nickname: '定家')[0]
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

