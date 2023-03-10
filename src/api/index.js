/*
 * @Author: Faith
 * @Date: 2022-09-24 09:40
 * @LastAuthor: Faith
 * @LastEditTime: 2023-03-10 15:17
 * @Description:
 */

import axios from 'axios'
import qs from 'qs'

async function api(
  currentPage = 1,
  selectType = {
    zwlbdm: ['1004'],
  }
) {
  // console.log(arguments)
  const a =
    'send_by_bootstrap_table=true&searchModel.inputType=%7B%22zpzt%22%3A%5B%22%22%5D%2C%22zwmc%22%3A%5B%22%22%5D%2C%22dwmc%22%3A%5B%22%22%5D%7D&searchModel.selectType=%7B%22zwlbdm%22%3A%5B%221004%22%5D%7D&searchModel.dateType=%7B%7D&searchModel.numberType=%7B%7D&searchModel.inputSqlType=0&queryModel.showCount=10&queryModel.currentPage=1'
  const customData = {
    send_by_bootstrap_table: 'true',
    'searchModel.inputType': "{ zpzt: [''], zwmc: [''], dwmc: [''] }",
    'searchModel.selectType': JSON.stringify(selectType),
    'searchModel.dateType': '{}',
    'searchModel.numberType': '{}',
    'searchModel.inputSqlType': 0,
    'queryModel.showCount': 15,
    'queryModel.currentPage': currentPage,
  }
  const { data } = await axios.post(
    '/api/jyxt/sczp/zpztgl/getZpztdwList.zf',
    qs.stringify(customData)
  )

  console.log(data)
  return data
}

async function excel() {
  const url =
    '/doc/dop-api/get/sheet?padId=300000000%24ZkiUdeXEWjJW&subId=BB08J2&startrow=2062&endrow=2258&xsrf=424d7ea16b2c236d&_r=0.8430574967827611&outformat=1&normal=1&preview_token=&nowb=1&enableSmartsheetSplit=1&rev=1933'
  const { data } = await axios.get(url, {
    responseType: 'json',
  })
  console.log(data)
  return data
}

async function getToken() {
  const url =
    '/wx/gettoken?corpid=ww4c473bae36e79fba&corpsecret=812X_C2XtaUCL8mVa8w6nsnb2w0WwEY2-Q5rDewUEuE'
  const { data } = await axios.get(url, {
    responseType: 'json',
  })
  console.log(data)
  return data
}

async function sendMsg(req,res) {
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
  res.status(200).end(data);
}
export default api
export { excel,sendMsg }
