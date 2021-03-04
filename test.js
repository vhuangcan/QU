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
        'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
        'Origin': `https://aaaa.gay`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1`,
        'Host': `aaaa.gay`,
        'Referer': `https://aaaa.gay/auth/login`
      },
      body: 'email=513416443%40qq.com&passwd=12345678'
    }).then(res => {
      const str = stringify(res.body)
      log(stringify(res.headers))
      log(`${parse(str)}`)
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
        'Origin': `https://www.v2e.fun`,
        'Cookie': `uid=5329; email=513416443%40qq.com; key=9f21897805252c987bab48f1abd1c58253b62027a568e; ip=90df72bd0cf7fdf4e983a9efbee301fe; expire_in=1617351631`,
        'Connection': `keep-alive`,
        'Host': `www.v2e.fun`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1`,
        'Referer': `https://www.v2e.fun/user/panel`,
        'Accept-Language': `zh-cn`,
        'X-Requested-With': `XMLHttpRequest`
      },
      body: ''
    }).then(res => {
      console.log(JSON.stringify(res.headers))
      const str = JSON.stringify(es.body)
      log(`${unescape(str.replace(/\\u/g, "%u").replace(/\\/g, ''))}`)
      notify(name, '成功！')
      log(`签到执行结束！`)
      done()
    })
  }
  signIn()
  // const ex = get('expire')
  // if (ex) {
  //
  // }
  // log(isExpire)
})()
    .catch((e) => {
      console.log('失败原因:', e)
    })




