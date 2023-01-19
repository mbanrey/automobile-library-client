const indexCarContainer = document.querySelector('#index-car-container')
const messageContainer = document.querySelector('#message-container')
const showCarContainer = document.querySelector('#show-car-container')

export const onIndexCarSuccess = (car) => {
        car.forEach(car =>{
            const div = document.createElement('div')
            div.innerHTML = `
            <h3>${car.make} ${car.model}</h3>
            <button data-id="${car._id}">Show Car</button>
            `


            indexCarContainer.appendChild(div)
        })
}

export const onFailure = (error) =>{
    messageContainer.innerHTML = `
    <h3>Youve got an error! :(</h3>
    <p>${error}</p>`
}

export const onCreateCarSuccess = () =>{
    messageContainer.innerText = 'You have created a character!! :)'
}

export const onShowCarSuccess = (car) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${car.make}  ${car.model}</h3>
        <p>${car.class}</p>
        <p>${car.drive}</p>
        <p>${car._id}</p>
    `
    showCarContainer.appendChild(div)
}