import axios from 'axios'

export async function register(name, email, phoneNumber, password) {
  // body parameters
  const body = {
    name,
    email,
    phoneNumber,
    password,
  }

  // make API call
  const response = await axios.post(``, body)

  // read JSON data (response)
  return response.data
}

export async function login(email, password) {
  // body parameters
  const body = {
    email,
    password,
  }

  // make API call
  const response = await axios.post(``, body)

  // read JSON data (response)
  return response.data
}
