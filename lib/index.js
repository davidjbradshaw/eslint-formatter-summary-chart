const formatter = require('./formatter')
const display = require('./display')

const sorted = data => Object.keys(data)
  .sort()
  .reduce((acc, key) => {
    acc[key] = data[key]
    return acc
  }, {})

module.exports = (results) => {
  const { files, rules } = formatter(results)

  console.log('==== Files ====')
  display(files)

  console.log('\n\n==== Rules ====')
  display(sorted(rules))
}
