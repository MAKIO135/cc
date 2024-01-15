document.addEventListener('DOMContentLoaded', e => document.querySelectorAll('img').forEach(img => img.onerror = function(){
    this.style.display = 'none'
}))

document.querySelector('.container').innerHTML = hashes.map((hash,i) => {
    let title = `#${hash}`
    
    return {
        html: `<div class="box"><img src="images/${hash}.png" title="${title}" loading="lazy"></div>`
    }
})
// .sort((a, b) => a.paletteId - b.paletteId)
.sort((a, b) => 1 - Math.random()*2)
.map(d => d.html).join('')


const imgs = document.querySelectorAll('.box')

imgs.forEach(img => img.addEventListener('click', e => console.log(img.dataset)))

mediumZoom('img', {
    margin: 10,
    background: 'rgba(10, 10, 10, .9)'
})