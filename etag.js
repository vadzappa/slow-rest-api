var crypto = require('crypto')


module.exports = etag

function etag (entity, opts) {
  if (Object(entity) === entity) {
    opts = entity
    entity = opts.entity
  }

  opts = opts || {}
  opts.algorithm = opts.algorithm || 'md5'
  opts.encoding = opts.encoding || 'utf8'
  opts.output = opts.output || 'base64'

  var hash


  hash = crypto
      .createHash(opts.algorithm)
      .update(entity, opts.encoding)

  if (!opts.output || opts.output === 'base64') {
    hash = hash
        .digest('base64')
        .replace(/=+$/, '')

    return hash
  }

  hash = hash.digest(opts.output)

  return hash
}
