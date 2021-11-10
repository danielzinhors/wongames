export default function formatPrice(
  price: number | bigint,
  lang = 'en',
  typeCurrency = 'USD'
): string {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: typeCurrency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(numberify(price))
}

export function numberify(value: number | bigint) {
  const valor = String(value)
  return parseInt(valor.replace('$', ''))
}
