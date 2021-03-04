/**
 * Created by H
 * User: huangcan
 * Date: 2021/3/3
 * Time: 2:52 下午
 * tips:
 */

(async () => {
  const log = (msg) => console.log(msg)
  const notify = (m, i) => $notify(m, i)
  const set = (k, v) => $prefs.setValueForKey(k, v)
  const get = (k) => $prefs.valueForKey(k)
  const fetch = (data) => $task.fetch(data)
  const stringify = (obj) => JSON.stringify(obj)
  const parse = (str) => unescape(str.replace(/\\u/g, "%u").replace(/\\/g, ''))
  const done = () => $done()
  const name = '豆奶签到'
  log(`${name}开始执行！`)
  const signIn = () => {
    return fetch({
      url: 'https://aaaa.gay/auth/login',
      method: 'POST',
      headers: {
        'X-Requested-With': `XMLHttpRequest`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
        'Origin': `https://aaaa.gay`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1`,
        'Host': `aaaa.gay`,
        'Referer': `https://aaaa.gay/auth/login`,
        'Accept-Language': `zh-cn`,
        'Accept': `application/json, text/javascript, */*; q=0.01`
      },
      body: 'email=513416443%40qq.com&passwd=12345678'
    }).then(res => {
      const str = stringify(res.body)
      log(`${parse(str)}`)
      log(stringify(res.headers))
      done()
    })
  }
  const checkIn = () => {
    return fetch({
      url: 'https://aaaa.gay/user/checkin',
      method: 'POST',
      headers: {
        'Accept': `application/json, text/javascript, */*; q=0.01`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Origin': `https://aaaa.gay`,
        'Host': `aaaa.gay`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1`,
        'Referer': `https://aaaa.gay/user/panel`,
        'Accept-Language': `zh-cn`,
        'X-Requested-With': `XMLHttpRequest`
      },
      body: ''
    }).then(res => {
      log(stringify(res.headers))
      const str = stringify(res.body)
      log(parse(str))
      notify(name, '成功！')
      log(`签到执行结束！`)
      done()
    })
  }
  // signIn()
  checkIn()
  // const ex = get('expire')
  // if (ex) {
  //
  // }
  // log(isExpire)
})()
    .catch((e) => {
      console.log('失败原因:', e)
    })




