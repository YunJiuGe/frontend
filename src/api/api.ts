import { Request } from './request'

export function post (url: string,data: any)  {
  return Request.axiosInstance({
    url: url,
    method: 'post',
    data: data
  }).then(function(){
    console.log("111")
  }).catch(function (error) {
    console.log(error)
  })
}