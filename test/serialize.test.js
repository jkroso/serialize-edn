var write = require('..')

it('nil', function(){
  assert(write(null) == 'nil')
})

it('string', function(){
  assert(write('a') == '"a"')
})

it('number', function(){
  assert(write(1) == '1')
  assert(write(-1) == '-1')
  assert(write(-1.1) == '-1.1')
})

it('boolean', function(){
  assert(write(false) == 'false')
  assert(write(true) == 'true')
})

it('vector', function(){
  assert(write([]) == '[]')
  assert(write([1]) == '[1]')
  assert(write([1,2]) == '[1 2]')
  assert(write([1,2,{a:1}]) == '[1 2 {"a" 1}]')
})

it('map', function(){
  assert(write({}) == '{}')
  assert(write({a:1}) == '{"a" 1}')
})
