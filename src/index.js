console.log('%c HI', 'color: orange')

function getImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((response) => response.json())
    .then(data => {
        const imageElements = document.getElementById('dog-image-container')
        data.message.forEach(imageUrl => {
            const imageSource = document.createElement('img')
            imageSource.src = imageUrl
            imageElements.appendChild(imageSource)
        });
    })
    console.log('It works')
}

getImages()

function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then(data => {
        console.log(data)
        const ul = document.getElementById('dog-breeds')
        Object.keys(data.message).forEach(breeds => {
            const breedList = document.createElement('li')
            breedList.textContent = breeds
            ul.appendChild(breedList)
            breedList.classList = 'dog-names'
            })
            const dogNames = document.querySelectorAll('.dog-names')
            dogNames.forEach((name) => {
                name.addEventListener('click', function() {
                    name.style.color = 'orange'
            })
            })
            const dropdown = document.getElementById('breed-dropdown')
            dropdown.addEventListener('change', function() {
                const selectedLetter = dropdown.value
                for (let i = 0; i < dogNames.length; i++) {
                    const breedName = dogNames[i].textContent
                    if (breedName.startsWith(selectedLetter)) {
                        dogNames[i].style.display = 'block'
                    } else {
                        dogNames[i].style.display = 'none'
                    }                   
                }
            })
        })
    .catch(error => {
        console.log('Error:', error)
    })
}

getBreeds()

document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM is here')
})