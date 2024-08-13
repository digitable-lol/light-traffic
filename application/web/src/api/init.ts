import axios from "axios"

const setupApiInstance = () => {
  return axios.create({
    baseURL: `${window.location.origin}/api/`,
    timeout: 8000,
    headers: {
      Accept: "application/json",
    },
  })
}

export const api = setupApiInstance()
