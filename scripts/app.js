import { indexCar, createCar, showCar, updateCar, deleteCar } from "./api.js";
import { onIndexCarSuccess, onFailure, onCreateCarSuccess, onShowCarSuccess,onUpdateCarSuccess,
	onDeleteCarSuccess } from "./ui.js";

const createCarForm = document.querySelector('#create-car-form')
const indexCarContainer = document.querySelector('#index-car-container')
const showCarContainer = document.querySelector('#show-car-container')

    indexCar()
	.then((res) => res.json())
	.then(res => {
        console.log(res)
        onIndexCarSuccess(res.cars)
    })
	.catch(onFailure)


createCarForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    const carData = {
        car: {
            make: event.target['make'].value,
            model: event.target['model'].value,
            class: event.target['class'].value,
            drive: event.target['drive'].value
        },
    }
   createCar(carData)
   .then(onCreateCarSuccess)
   .catch(onFailure)
})

indexCarContainer.addEventListener('click', (event) =>{
    const id = event.target.getAttribute('data-id')
    // console.log(id)

    showCar(id)
        .then((res)=> res.json())
        .then((res)=>onShowCarSuccess(res.car))
        .catch(onFailure)
})

showCarContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const characterData = {
		character: {
			make: event.target['make'].value,
			model: event.target['model'].value,
			class: event.target['class'].value,
			drive: event.target['drive'].value,
		},
	}

	if (!id) return

	updateCar(carData, id)
		// this function (onUpdateCharacterSuccess) does not need anything to run. NO params
		.then(onUpdateCarSuccess)
		.catch(onFailure)
})

showCarContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCar(id)
		.then(onDeleteCarSuccess)
		.catch(onFailure)
})