class FontColor < ActiveHash::Base
  self.data = [
      {code: '#000000', content: '黒'}, {code: '#FF0000', content: '赤'}, {code: '#0000FF', content: '青'}
  ]
end