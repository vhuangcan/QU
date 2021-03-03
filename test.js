/**
 * Created by H
 * User: huangcan
 * Date: 2021/3/3
 * Time: 2:52 下午
 * tips:
 */
const $ = new Env('豆奶签到')

!(async () => {
  $.log('', `🔔 ${$.name}, 开始!`, '')
  await sign()
  await showMsg()
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.msg($.name, $.subt)
      $.log('', `🔔 ${$.name}, 结束!`, '')
      $.done()
    })

function sign() {
  return new Promise((resolve) => {
    const data = {
      'url': 'https://www.v2e.fun/user/checkin',
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
    $.log(`${data}`)
    $.post(data, (error, response, data) => {
      try {
        $.log(`${data.msg}`,`${JSON.stringify(response)}`)
      } catch (e) {
        $.log(`❗️ ${$.name}, 执行失败!`, ` error = ${error || e}`, `response = ${JSON.stringify(response)}`, '')
      } finally {
        resolve()
      }
    })
  })
}

function showMsg() {
  return new Promise((resolve) => {
    $.subt = '签到成功！'
    resolve()
  })
}

// prettier-ignore
function Env(t) {
  this.name = t, this.logs = [], this.isSurge = (() => "undefined" != typeof $httpClient), this.isQuanX = (() => "undefined" != typeof $task), this.log = ((...t) => {
    this.logs = [...this.logs, ...t], t ? console.log(t.join("\n")) : console.log(this.logs.join("\n"))
  }), this.msg = ((t = this.name, s = "", i = "") => {
    this.isSurge() && $notification.post(t, s, i), this.isQuanX() && $notify(t, s, i);
    const e = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
    t && e.push(t), s && e.push(s), i && e.push(i), console.log(e.join("\n"))
  }), this.getdata = (t => this.isSurge() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : void 0), this.setdata = ((t, s) => this.isSurge() ? $persistentStore.write(t, s) : this.isQuanX() ? $prefs.setValueForKey(t, s) : void 0), this.get = ((t, s) => this.send(t, "GET", s)), this.wait = ((t, s = t) => i => setTimeout(() => i(), Math.floor(Math.random() * (s - t + 1) + t))), this.post = ((t, s) => this.send(t, "POST", s)), this.send = ((t, s, i) => {
    if (this.isSurge()) {
      const e = "POST" == s ? $httpClient.post : $httpClient.get;
      e(t, (t, s, e) => {
        s && (s.body = e, s.statusCode = s.status), i(t, s, e)
      })
    }
    this.isQuanX() && (t.method = s, $task.fetch(t).then(t => {
      t.status = t.statusCode, i(null, t, t.body)
    }, t => i(t.error, t, t)))
  }), this.done = ((t = {}) => $done(t))
}


