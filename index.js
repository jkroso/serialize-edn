var method = require('method')

var write = method(function(obj){
  if (obj === null) return 'nil'
  if (typeof obj.toEDN == 'function') return obj.toEDN()
  var out = '{'
  for (var key in obj) {
    out += write(key)
    out += ' '
    out += write(obj[key])
  }
  return out + '}'
})

write.define(String.prototype, JSON.stringify)
write.define(Number.prototype, JSON.stringify)
write.define(Boolean.prototype, JSON.stringify)
write.define(Array.prototype, function(arr){
  return '[' + arr.map(write).join(' ') + ']'
})

module.exports = write
