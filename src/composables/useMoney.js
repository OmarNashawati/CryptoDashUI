export const formatMoney = (value, format) => {
  if (format) {
    if (format.isBigNum) return `$${formatBigNumber(value)}`
  }
  return `$${value}`
}

function formatBigNumber(num) {
  if (num >= 1000000000000) {
    return `${(num / 1000000000000).toFixed(2).replace(/\.00$/, '')}T`
  } else if (num >= 1000000000) {
    return `${Math.floor(num / 1000000000)
      .toFixed(2)
      .replace(/\.00$/, '')}B`
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2).replace(/\.00$/, '')}M`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2).replace(/\.00$/, '')}K`
  } else {
    return `${(num / 1).toFixed(2).replace(/\.00$/, '')}`
  }
}

export const formatNumber = (value) => {
  return (value / 1).toFixed(4).replace(/\.00$/, '')
}
