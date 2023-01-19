
export const indexCar = () =>{
    return fetch('http://localhost:8000/cars')
    
}

export const createCar = (data) =>{
    return fetch(`http://localhost:8000/cars`,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showCar = (id) =>{
    return fetch(`http://localhost:8000/cars/${id}`)
}

export const updateCar = (data, id) => {
    return fetch(`http://localhost:8000/cars/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteCar = (id) => {
    return fetch(`http://localhost:8000/cars/${id}`, {
        method: 'DELETE'
    })
}
