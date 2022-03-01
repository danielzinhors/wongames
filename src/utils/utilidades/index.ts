export const getSrcImg = (prSrc: string | undefined) => {
  if (!prSrc) {
    return 'http://localhost:3000/img/logo.svg'
  } else if (typeof prSrc === 'string' && prSrc.includes('http')) {
    return prSrc
  } else {
    return `http://localhost:1337${prSrc}`
  }
}
