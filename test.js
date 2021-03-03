/**
 * Created by H
 * User: huangcan
 * Date: 2021/3/3
 * Time: 2:52 下午
 * tips:
 */

!(() => {
  const name = '豆奶签到'
  console.log(`${name}开始执行！`)
  const url = `https://www.v2e.fun/user/checkin`;
  const method = `POST`;
  const headers = {
    'Accept': `application/json, text/javascript, */*; q=0.01`,
    'Accept-Encoding': `gzip, deflate, br`,
    'Origin': `https://www.v2e.fun`,
    'Cookie': `email=304591874%40qq.com; expire_in=1617347672; ip=8351ace6e0cb060a3ff9811ecfa95e7a; key=5e48b96fcb47c0992c2140b5167cb38323825a98d2697; uid=53151; __cfduid=deb2a93203aa2f2b2ed5ac9c80907c50f1614755641`,
    'Connection': `keep-alive`,
    'Host': `www.v2e.fun`,
    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1`,
    'Referer': `https://www.v2e.fun/user/panel`,
    'Accept-Language': `zh-cn`,
    'X-Requested-With': `XMLHttpRequest`
  };
  const body = ``;
  const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
  };
  $task.fetch(myRequest).then(response => {
        const str = JSON.stringify(response.body)
        console.log(`${unescape(str.replace(/\\u/g, "%u").replace(/\\/g, ''))}`)
        $notify(name, '成功！')
        console.log(`签到执行结束！`)
        $done();
      }, response => {
        console.log('',
            `❌ ${name}, 失败! 原因: ${response.error}!`
            , '')
        $notify(name, '失败！')
        $done();
      });
})()





