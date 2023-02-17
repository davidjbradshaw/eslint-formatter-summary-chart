const formatter = require('./formatter')
const display = require('./display')

const identity = (x) => x

const sorted = data => Object.keys(data)
  .sort()
  // eslint-disable-next-line unicorn/no-array-reduce
  .reduce((acc, key) => {
    acc[key] = data[key]
    return acc
  }, {})

module.exports = (results) => {
  const { files, rules } = formatter(results)
  const foundFiles = Object.values(files).find(identity)
  const foundRules = Object.values(rules).find(identity)

  if (foundFiles) {
    console.log('==== Files ====')
    display(files)
  }

  if (foundRules) {
    if (foundFiles) {
      console.log('\n\n')
    }
    console.log('==== Rules ====')
    display(sorted(rules))
  }
}
