export const formatMoney = (value) => {
  return formatMoneyShort(value)
}

function formatMoneyShort(num, { currency = 'USD', locale = 'en-US', decimals = 2 } = {}) {
  const absNum = Math.abs(num)
  let suffix = ''
  let value = num

  if (absNum >= 1_000_000_000) {
    value = num / 1_000_000_000
    suffix = 'B'
  } else if (absNum >= 1_000_000) {
    value = num / 1_000_000
    suffix = 'M'
  } else if (absNum >= 1_000) {
    value = num / 1_000
    suffix = 'K'
  }

  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value)

  return formatted + suffix
}

export const formatNumber = (value) => {
  return (value / 1).toFixed(3).replace(/\.00$/, '')
}
