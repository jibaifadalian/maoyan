import axios from 'axios'
export function http(config) {
  const instance = axios.create({
    baseURL: "https://m.maizuo.com",
    headers: {
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15647165941739461757290","bc":"440300"}'
    },
    timeout:20000
  });
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    return res.data;
  },err => {
    console.log(err)
  })
  return instance(config)
}