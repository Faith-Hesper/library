/*
 * @Author: Faith
 * @Date: 2023-03-10 14:56
 * @LastAuthor: Faith
 * @LastEditTime: 2023-03-10 14:56
 * @Description:
 */
/*
 * @Author: Faith
 * @Date: 2022-09-24 18:52
 * @LastAuthor: Faith
 * @LastEditTime: 2022-09-24 18:52
 * @Description:
 */

// 该服务为 vercel serve跨域处理
import { createProxyMiddleware } from 'http-proxy-middleware'

export default (req, res) => {
  let target = ''

  // 代理目标地址
  // xxxxx 替换为你跨域请求的服务器 如： http://baidu.com
  if (req.url.startsWith('/wx')) {
    // 这里填目标地址
    target = 'https://qyapi.weixin.qq.com'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/api`
      // 例如 /api/user/login 将被转发到 http://target/user/login
      '^/wx/': '/',
    },
  })(req, res)
}
