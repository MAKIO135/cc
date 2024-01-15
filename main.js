document.addEventListener('DOMContentLoaded', e => document.querySelectorAll('img').forEach(img => img.onerror = function(){
    this.style.display = 'none'
}))

document.querySelector('.container').innerHTML = hashes.map(hash => {
    return `<div class="box"><img src="images/${hash}.png" title="${hash}" loading="lazy"></div>`
}).sort((a, b) => 1 - Math.random()*2).join('')

mediumZoom('img', {
    margin: 10,
    background: 'rgba(10, 10, 10, .9)'
})