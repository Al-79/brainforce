# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(nickname: '定家', email: 'teika@teika.com', password: 'teikateika')
book = Book.create(name: '百人一首', genre_id: 1, comment: '一字決まり', user_id: user.id)
book.questions.create(content: 'む', answer: 'きりたちのほるあきのゆふくれ')
book.questions.create(content: 'す', answer: 'ゆめのかよひちひとめよくらむ')
book.questions.create(content: 'め', answer: 'くもかくれにしよはのつきかな')
book.questions.create(content: 'ふ', answer: 'むへやまかせをあらしといふらむ')
book.questions.create(content: 'さ', answer: 'いつこもおなしあきのゆふくれ')
book.questions.create(content: 'ほ', answer: 'たたありあけのつきそのこれる')
book.questions.create(content: 'せ', answer: 'われてもすゑにあはむとそおもふ')

