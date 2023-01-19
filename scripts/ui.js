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

        <form data-id="${car._id}">
            <input type="text" name="make" value="${car.make}" />
            <input type="text" name="model" value="${car.model}" />
            <input type="text" name="class" value="${car.class}" />
            <input type="number" name="drive" value="${car.drive}" />
            <input type="submit" value="Update Car" />
        </form>

        <button type="button" data-id="${car._id}">Delete Car</button>
    `
    showCarContainer.appendChild(div)
}

export const onUpdateCarSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteCarSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}