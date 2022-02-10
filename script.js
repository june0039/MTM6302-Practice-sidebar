/* style sidebar
-link sidebar headings
-highlight current headings
-float sidebar to the side*/

const $content = document.getElementById('content')
const headings = document.querySelectorAll('h1, h2, h3')

document.getElementById('sidebar')

for(const $heading of headings) {
  
  const id  = $heading.textContent
  $heading.setAttribute('id', 
