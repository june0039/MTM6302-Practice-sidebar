/* style sidebar
-link sidebar headings
-highlight current headings
-float sidebar to the side*/

const $content = document.getElementById('content')
const headings = document.querySelectorAll('h1, h2, h3')

const $sidebar = document.getElementById('sidebar')

for(const $heading of headings) {
  
  const id  = $heading.textContent
  $heading.setAttribute('id', id)
  
  $sidebar.innerHTML += '
  <a href='#${id}' class='toc-link toc-${heading-tagName}'>${$heading.textContent}</a>'
}

let scrollPosition = 0

document.addEventListener('scroll', function () {
  
  scrollPosition = window.scrollY
  
})
