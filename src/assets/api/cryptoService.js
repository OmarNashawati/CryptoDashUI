import client from './client.js'

export const getCrtpyos = () => {
  let url = `/asset/v1/top/list?page=${1}&page_size=${20}&sort_by=${'CIRCULATING_MKT_CAP_USD'}&sort_direction=${'DESC'}&groups=${'ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK'}&toplist_quote_asset=${'USD'}`
  return client.get(url)
}
