const cryptoMockData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 64123.45,
    change24h: -2.14,
    marketCap: 1250432000000,
    volume24h: 29843000000,
    icon: "bitcoin-btc-logo.png",
    isActive: false
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 3432.22,
    change24h: 1.75,
    marketCap: 412430000000,
    volume24h: 19200000000,
    icon: "ethereum-eth-logo.png", 
    isActive: false
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: 145.67,
    change24h: 0.84,
    marketCap: 67500000000,
    volume24h: 4300000000,
    icon: "solana-sol-logo.png", 
    isActive: true
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    price: 0.58,
    change24h: -1.12,
    marketCap: 20500000000,
    volume24h: 1100000000,
    icon: "cardano-ada-logo.png", 
    isActive: false
  },
  {
    id: 5,
    name: "Ripple",
    symbol: "XRP",
    price: 0.69,
    change24h: 2.35,
    marketCap: 37200000000,
    volume24h: 870000000,
    icon: "xrp-xrp-logo.png", 
    isActive: false
  },
  {
    id: 6,
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.13,
    change24h: -0.85,
    marketCap: 18000000000,
    volume24h: 1200000000,
    icon: "dogecoin-doge-logo.png", 
    isActive: false
  },
  {
    id: 7,
    name: "Polkadot",
    symbol: "DOT",
    price: 6.48,
    change24h: 1.02,
    marketCap: 8100000000,
    volume24h: 340000000,
    icon: "polkadot-new-dot-logo.png", 
    isActive: true
  },
  {
    id: 8,
    name: "Litecoin",
    symbol: "LTC",
    price: 96.21,
    change24h: -3.45,
    marketCap: 7100000000,
    volume24h: 200000000,
    icon: "litecoin-ltc-logo.png", 
    isActive: false
  }
];


export const getCryptos = () => {
  return cryptoMockData;
}

export const filteredCryptos = (filterType, value) => {
  if(filterType === 'activeCryptos') {
    if(value === 'all'){
      return getCryptos();
    }else if(value === 'active'){
      return getCryptos().filter(c => c.isActive);
    }else{
      return getCryptos().filter(c => !c.isActive);
    }
  }
}

export const searchcryptos = (query) => {
    const regex = createWholeWordRegex(query);
    return getCryptos().filter(c => (c.name.match(regex) || c.symbol.match(regex)));
}

function createWholeWordRegex(keyword) {
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(?i:).*${keyword}.*`, 'i');
}

