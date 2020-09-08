const reverse = function (x) {
  let neg = false // save variable for if num is negative

  let split = String(x).split('')
  if (split[0] === '-') {
    neg = true
    split = split.slice(1)
  }
  let revStr = split.reverse().join('')
  if (neg) {
    revStr = '-' + revStr
  }
  if (Number(revStr) > 2147483648 || Number(revStr) < -2147483648) {
    return 0
  }
  return Number(revStr)
}
