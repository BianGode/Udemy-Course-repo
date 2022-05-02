const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerHTML = tag

    tagsEl.appendChild(tagEl)
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highightTag(randomTag)

    setTimeout(() => {
      unHighightTag(randomTag)
    }, 100)
  }, 100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highightTag(randomTag)
      tagSizeUp(randomTag)

      randomTag.classList.add('blink')
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')

  return tags[Math.floor(Math.random() * tags.length)]
}

function highightTag(tag) {
  tag.classList.add('highlight')
}

function unHighightTag(tag) {
  tag.classList.remove('highlight')
}

function tagSizeUp(tag) {
  tag.classList.add('sizeUp')
}

function randomColor() {
  if (document.querySelector('.sizeUp')) {
    let el = document.querySelector('.sizeUp')
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    el.style.color = randomColor;
    // console.log(randomColor)
    // document.querySelector('.sizeUp').style.color = randomColor;
    setInterval(() => {
      i++
      // console.log(i)
    }, 1000)
  }
}
let i = 0;

setInterval(randomColor, 750)
