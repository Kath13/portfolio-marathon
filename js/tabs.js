let mainDirectById = document.getElementById('main')
let mainById = document.querySelector('#main')
let mainByClass = document.querySelector('.main')
let mainByTag = document.querySelector('section')

let sectionsByTag = document.querySelectorAll('section')

console.log('### getElementById', mainDirectById)
console.log('### querySelector by id', mainById)
console.log('### querySelector by class', mainByClass)
console.log('### querySelector by tag', mainByTag)

console.log('### querySelectorAll by tag', sectionsByTag)
console.log('### first querySelectorAll by tag', sectionsByTag[0])

for (let i = 0; i < sectionsByTag.length; i++) {
    console.log(sectionsByTag[i])
}

console.dir(sectionsByTag)

// Array iteration
sectionsByTag.forEach((element, index, array) => {
    console.log('### element:', element)
    console.log('### index:', index)
    console.log('### array:', array)
})