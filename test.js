/**
 * Created by H
 * User: huangcan
 * Date: 2021/3/3
 * Time: 2:52 下午
 * tips:
 */
;(()=>{const log=(msg)=>console.log(msg);const notify=(m,i)=>$notify(m,i);const set=(k,v)=>$prefs.setValueForKey(k,v);const get=(k)=>$prefs.valueForKey(k);const fetch=(data)=>$task.fetch(data);const stringify=(obj)=>JSON.stringify(obj);const decry=(str,xor,hex)=>{if(typeof str!=='string'||typeof xor!=='number'||typeof hex!=='number'){return}let strCharList=[];let resultList=[];hex=hex<=25?hex:hex%25;let splitStr=String.fromCharCode(hex+97);strCharList=str.split(splitStr);for(let i=0;i<strCharList.length;i++){let charCode=parseInt(strCharList[i],hex);charCode=(charCode*1)^xor;let strChar=String.fromCharCode(charCode);resultList.push(strChar)}return resultList.join('')}const parse=(str)=>unescape(str.replace(/\\u/g,"%u").replace(/\\/g,''));const done=()=>$done();const name='豆奶签到';const info='15zmz11ziznz2kz33z2oz2mz34z2oz32z34z34z2mz3jz34z30zazaz3azozkzmz3izbz11z8z8zcz16z2kz2oz2nz2mz34z33z32z31z2h';log(`${name}开始执行！`);const signIn=()=>{fetch({url:'https://aaaa.gay/auth/login',method:'POST',headers:{'Content-Type':`application/x-www-form-urlencoded;charset=UTF-8`},body:decry(info,123,25)}).then(res=>{const str=stringify(res.body);log(`${parse(str)}`);checkIn()},reason=>{log(reason.error);notify(name,'失败！');done()})};const checkIn=()=>{fetch({url:'https://aaaa.gay/user/checkin',method:'POST'}).then(res=>{const str=stringify(res.body);log(parse(str));notify(name,'成功！');log(`签到执行结束！`);done()},reason=>{log(reason.error);signIn()})};checkIn()})();;




