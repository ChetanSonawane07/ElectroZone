import axios from 'axios'

export async function register(name, email, phoneNumber, password) {
  // body parameters
  const body = {
    name,
    email,
    phoneNo:phoneNumber,
    password,
  }

  // make API call
  const response = await axios.post(`http://localhost:8080/api/users/register`, body)

  // read JSON data (response)
  return response
}

export async function login(email, password) {
  // body parameters
  const body = {
    email,
    password,
  }

  // make API call
  const response = await axios.post(`http://localhost:8080/api/users/login`, body)

  // read JSON data (response)
  return response.data
}
