export const getSrcImg = (prSrc: string) => {
  if (typeof prSrc === 'string' && prSrc.includes('http')) {
    return prSrc
  } else {
    return `http://localhost:1337${prSrc}`
  }
}
