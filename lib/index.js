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
  const files_non_zero = Object.values(files).find(x => x)
  const rules_non_zero = Object.values(rules).find(x => x)

  if (files_non_zero) {
    console.log('==== Files ====')
    display(files)
  }

  if (rules_non_zero) {
    if (files_non_zero) {
      console.log('\n\n')
    }
    console.log('==== Rules ====')
    display(sorted(rules))
  }
}
