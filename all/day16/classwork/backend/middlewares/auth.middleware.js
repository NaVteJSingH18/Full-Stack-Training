jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: '1h' });