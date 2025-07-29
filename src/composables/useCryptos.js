import { coins } from '@/assets/data/coins'

export const getCryptos = (filterObj) => {
  let result = coins
  let { filter, search } = filterObj || {}

  if (filter) {
    if (filter.filterType === 'activeCryptos') {
      result = filtereActiveCryptos(filter.value)
    }
  }

  if (search) {
    const regex = createWholeWordRegex(search.query)
    result = result.filter((c) => c.name.match(regex) || c.symbol.match(regex))
  }

  return result
}

const filtereActiveCryptos = (value) => {
  if (value === 'all') {
    return getCryptos()
  } else if (value === 'active') {
    return getCryptos().filter((c) => c.isActive)
  } else {
    return getCryptos().filter((c) => !c.isActive)
  }
}

function createWholeWordRegex(keyword) {
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?i:).*${keyword}.*`, 'i')
}
