export const BASE_URL = 'https://internship.apps.robotbull.com';

const checkResponse = (res) => {
  if (res.ok) return res.json();
}

export const getTotalItems = () => {
  return fetch(`${BASE_URL}/cats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}

export const getInitialCards = (totalItems) => {
  return fetch(`${BASE_URL}/cats?page=1&limit=${totalItems}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}

export const getAvalibleCats = () => {
  return fetch(`${BASE_URL}/cats/get/not_booked_cats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}

export const getBookedCats = () => {
  return fetch(`${BASE_URL}/cats/get/booked_cats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}

export const getAllBreeds = () => {
  return fetch(`${BASE_URL}/cats/get/get_all_breeds`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}

export const getCat = (catId) => {
  return fetch(`${BASE_URL}/cats/${catId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}

export const addCat = (cat) => {
  return fetch(`${BASE_URL}/cats/create_cat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameCat: cat.nameCat,
      color: cat.color,
      price: cat.price,
      age: cat.age,
      nameBreed: cat.nameBreed,
    })
  })
    .then(res => checkResponse(res))
}

export const editCat = (cat) => {
  return fetch(`${BASE_URL}/cats/update_cat/${cat.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameCat: cat.nameCat,
      color: cat.color,
      price: cat.price,
      nameBreed: cat.nameBreed,
    })
  })
    .then(res => checkResponse(res))
}

export const deleteCat = (catId) => {
  return fetch(`${BASE_URL}/cats/delete_cat/${catId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}

export const toggleBookCat = (isBooked, catId) => {
  return fetch(`${BASE_URL}/cats/${isBooked ? 'un' : ''}book_cat/${catId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res))
}