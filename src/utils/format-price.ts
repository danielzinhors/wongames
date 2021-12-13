// export default function formatPrice(
//   price: number | bigint,
//   lang = 'en',
//   typeCurrency = 'USD'
// ): string {
//   return new Intl.NumberFormat(lang, {
//     style: 'currency',
//     currency: typeCurrency,
//     maximumFractionDigits: 2,
//     minimumFractionDigits: 2
//   }).format(numberify(price))
// }

export default function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export function numberify(value: number | bigint) {
  return formatPrice(value)
}
