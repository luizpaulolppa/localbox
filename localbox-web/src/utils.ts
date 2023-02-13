export function limitCaracteres(
  text: string | null,
  length: number,
  addEllipsis?: boolean
) {
  const textLength = (text || '').length
  let str = (text || '').substring(0, length)
  if (textLength > str.length && addEllipsis) {
    str += '...'
  }
  return str
}