/*
 * @Author: Faith
 * @Date: 2022-09-24 09:40
 * @LastAuthor: Faith
 * @LastEditTime: 2022-09-26 16:16
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
  console.log(arguments)
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
export default api
export { excel }
