import Axios from 'axios'
import { Message } from 'element-ui'

Axios.interceptors.request.use(request => {
  return request
})

Axios.interceptors.response.use(response => {
  if (!response.data.success) {
    Message({
      message: response.data.errorMsg,
      type: 'error'
    })
    return Promise.reject(response.data)
  }
  return response.data
}, error => {
  Message({
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error)
})

export default Axios
