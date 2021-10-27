export function computeDollars(amount) {
  let dollarUSA = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return dollarUSA.format(amount)
}
