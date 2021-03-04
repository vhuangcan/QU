/**
 * Created by H
 * User: huangcan
 * Date: 2021/3/3
 * Time: 2:52 下午
 * tips:
 */

(() => {
  // const strToJson = (str) => {
  //   const sp = str.replace(/\s/g,'').split(';')
  //   return sp.reduce((prev, next) => {
  //     const flag = next.split('=')
  //     if (!prev.hasOwnProperty(flag[0])) {
  //       prev[flag[0]] = flag[1]
  //     }
  //     return prev
  //   }, {})
  // }
  const log = (msg) => console.log(msg);
  const notify = (m, i) => $notify(m, i);
  const set = (k, v) => $prefs.setValueForKey(k, v);
  const get = (k) => $prefs.valueForKey(k);
  const fetch = (data) => $task.fetch(data);
  const stringify = (obj) => JSON.stringify(obj);
  const parse = (str) => unescape(str.replace(/\\u/g, "%u").replace(/\\/g, ''));
  const done = () => $done();
  const name = '豆奶签到';
  log(`${name}开始执行！`);
  const signIn = () => {
    fetch({
      url: 'https://aaaa.gay/auth/login',
      method: 'POST',
      headers: {'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`},
      body: 'email=513416443%40qq.com&passwd=12345678'
    }).then(res => {
      const str = stringify(res.body);
      log(`${parse(str)}`);
      checkIn();
      done();
    }, reason => {
      log(reason.error);
      done();
    })
  };
  const checkIn = () => {
    fetch({
      url: 'https://aaaa.gay/user/checkin',
      method: 'POST'
    }).then(res => {
      const str = stringify(res.body);
      log(parse(str));
      notify(name, '成功！');
      log(`签到执行结束！`);
      done();
    }, reason => {
      log(reason.error);
      signIn();
    })
  };
  checkIn();
})();



