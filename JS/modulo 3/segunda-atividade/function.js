const js = 'javaScript Is the Best LanGuage in the world'

const lowercase = str => str.toLowerCase()

const newJs = lowercase(js)

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ')
  return [first.replace(first[0], first[0].toUpperCase()), ...others].join(' ')
}

function view() {
  console.log(newJs)
  console.log(upperFirstWord(newJs))
}

view()
