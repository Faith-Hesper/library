/*
 * @Author: Faith
 * @Date: 2023-03-10 15:22
 * @LastAuthor: Faith
 * @LastEditTime: 2023-03-10 15:39
 * @Description:
 */
import axios from 'axios'

async function getToken() {
  const url =
    '/wx/gettoken?corpid=ww4c473bae36e79fba&corpsecret=812X_C2XtaUCL8mVa8w6nsnb2w0WwEY2-Q5rDewUEuE'
  const { data } = await axios.get(url, {
    responseType: 'json',
  })
  console.log(data)
  return data
}

export default async function handler(req, res) {
  res.send('dataD')
  const token = await getToken()
  const msg = 'jo'
  const url = `/wx/message/send?access_token=${token}`
  const { data } = await axios.post(url, {
    data: {
      touser: '@all',
      agentid: '1000002',
      msgtype: 'text',
      text: {
        content: msg || '延迟',
      },
    },
  })
  console.log(data)
  return res.send(data)
}
