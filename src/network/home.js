import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/company/selectCompanyByClientId',
    method:'post',
    responseType:'json',
    params: {
      clientId: 'da07619c-02d4-49ed-a3b6-c811c8b60b70'
    }
  })
}
