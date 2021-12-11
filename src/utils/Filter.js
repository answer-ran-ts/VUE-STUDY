export function setName (name) {
  if (name) {
    const length = name.length
    return name.slice(length - 1, length)
  }
  return ''
}
