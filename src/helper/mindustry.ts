const named = new Map<string, string>()

named.set('red', '#ff0000').set('orange', '#ff8000')

const hex = new Set<string>()
  .add('0')
  .add('1')
  .add('2')
  .add('3')
  .add('4')
  .add('5')
  .add('6')
  .add('7')
  .add('8')
  .add('9')
  .add('A')
  .add('B')
  .add('C')
  .add('D')
  .add('E')
  .add('F')

function isValidMindustryHex(value: string): boolean {
  if (value.length == 0 || value.length > 8 || value.length == 7) {
    return false
  }
  for (let i = 0; i < value.length; i++) {
    if (!hex.has(value[i].toUpperCase())) {
      return false
    }
  }
  return true
}

function mindustryStyleToHTML(text: String): String {
  const buffer = Array<String>()
  let depth = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '[') {
      if (text[i + 1] === '[') {
        buffer.push('[')
        i++
        continue
      } else if (text[i + 1] === ']') {
        if (depth > 0) {
          depth--
          buffer.push('<span/>')
          i++
          continue
        }
      }

      const closing = text.indexOf(']', i + 1)
      if (closing === -1) {
        buffer.push(text.slice(i + 1))
        break
      }

      let content = text.slice(i + 1, closing)
      if (content.startsWith('#')) {
        content = content.substring(1)
        const color = content.substring(1)
        if (isValidMindustryHex(color)) {
          depth++
          buffer.push("<span style='color:", color, "'>")
        } else {
          buffer.push(content)
        }
      } else if (named.has(content.toLowerCase())) {
        depth++
        buffer.push("<span style='color:", content, "'>")
      } else {
        buffer.push('[', content, ']')
      }
      i = closing
    } else {
      buffer.push(text[i])
    }
  }

  while (depth > 0) {
    depth--
    buffer.push('<span/>')
  }

  console.log(buffer.join(''))
  return buffer.join('')
}

export { mindustryStyleToHTML }
