/**
 * Created by H
 * User: huangcan
 * Date: 2021/3/3
 * Time: 5:52 下午
 * tips:
 */

const strToJson = (str) => {
  const sp = str.replace(/\s/g,'').split(';')
  return sp.reduce((prev, next) => {
    const flag = next.split('=')
    if (!prev.hasOwnProperty(flag[0])) {
      prev[flag[0]] = flag[1]
    }
    return prev
  }, {})
}

console.log(strToJson(`uid=5329; email=513416443%40qq.com; expire_in=1617351631; key=9f21897805252c987bab48f1abd1c58253b62027a568e; ip=90df72bd0cf7fdf4e983a9efbee301fe`).expire_in)
