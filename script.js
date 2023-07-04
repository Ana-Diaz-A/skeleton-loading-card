const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() { //FUNCIÓN OBTENER DATOS
  header.innerHTML =
    '<img src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg" alt="" />'
  title.innerHTML = 'Lorem ipsum'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere venenatis nisl et volutpat.'
  profile_img.innerHTML =
    '<img src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg" alt="" />'
  name.innerHTML = 'Jane Doe'
  date.innerHTML = 'Jul 09, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
