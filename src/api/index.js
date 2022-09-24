/*
 * @Author: Faith
 * @Date: 2022-09-24 09:40
 * @LastAuthor: Faith
 * @LastEditTime: 2022-09-24 10:10
 * @Description:
 */

import axios from 'axios'
import qs from 'qs'

async function api() {
  const a =
    'send_by_bootstrap_table=true&searchModel.inputType=%7B%22zpzt%22%3A%5B%22%22%5D%2C%22zwmc%22%3A%5B%22%22%5D%2C%22dwmc%22%3A%5B%22%22%5D%7D&searchModel.selectType=%7B%22zwlbdm%22%3A%5B%221004%22%5D%7D&searchModel.dateType=%7B%7D&searchModel.numberType=%7B%7D&searchModel.inputSqlType=0&queryModel.showCount=10&queryModel.currentPage=1'
  const customData = {
    send_by_bootstrap_table: 'true',
    'searchModel.inputType': "{ zpzt: [''], zwmc: [''], dwmc: [''] }",
    'searchModel.selectType': "{ zwlbdm: ['1004'] }",
    'searchModel.dateType': '{}',
    'searchModel.numberType': '{}',
    'searchModel.inputSqlType': 0,
    'queryModel.showCount': 15,
    'queryModel.currentPage': 1,
  }
  const { data } = await axios.post(
    '/api/jyxt/sczp/zpztgl/getZpztdwList.zf',
    qs.stringify(customData)
  )

  console.log(data)
  return data
}

export default api
