export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n
}

export const isEmpty = o => {
  return typeof o == "undefined" || o == null || o == "" || o.toString().replace(/\s/g, "").length == 0;
}


export const isNotEmpty = o => {
  return !isEmpty(o);
}
export const toTree = (list, idKey, pidKey, childrenKey = 'children', parId = 0) => {
  let len = list.length

  function loop(parId) {
    let res = [];
    for (let i = 0; i < len; i++) {
      let item = list[i]
      if (item[pidKey] == parId) {
        item[childrenKey] = loop(item[idKey])
        res.push(item)
      }
    }
    return res
  }
  return loop(parId)
}

//输入保留2位小数
export const inputMoney = function (e) {
  let val = e.target.value + ''
  if (val == '00') {
    val = '0';
  }
  val = val.replace(/[^\d.]/g, "");
  val = val.replace(/^\./g, "");
  val = val.replace(/\.{2,}/g, ".");
  val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  val = val.replace(/^()*(\d+)\.(\d\d).*$/, '$1$2.$3');
  return val
}

//输入整数
export const inputNumber = function (e) {
  let val = e.target.value + ''
  val = val.replace(/\D/g, '')
  return val
}
export const formatTime = (date, time) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  if (time) {
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
  } else {
    return [year, month, day].map(formatNumber).join('-');
  }
}