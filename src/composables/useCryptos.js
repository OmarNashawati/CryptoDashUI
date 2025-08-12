import { coins } from '@/assets/data/coins'

export const getCryptos = (filter) => {
  let result = coins
  let { activityFilter, search } = filter || {}

  if (activityFilter) {
    if (activityFilter === 'active') {
      result = result.filter((c) => c.isActive)
    } else if (activityFilter === 'inactive') {
      result = result.filter((c) => !c.isActive)
    }
  }

  if (search) {
    const regex = createWholeWordRegex(search)
    result = result.filter((c) => c.name.match(regex) || c.symbol.match(regex))
  }

  return result
}

function createWholeWordRegex(keyword) {
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?i:).*${escapedKeyword}.*`, 'i')
}
