class Genre < ActiveHash::Base
  self.data = [
      {id: 1, content: '国語'}, {id: 2, content: '算数'}, {id: 3, content: '社会'}, {id: 4, content: '理科'},
      {id: 5, content: '英語'}, {id: 6, content: '音楽'}
  ]
end