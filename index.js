// Write your code here! //
const main =document.querySelector ("main#main")
main.remove()
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id='victory'
const YOURName= 'Ephy'
newHeader.textContent=`${YOURName} is the champion`

