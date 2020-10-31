// 题目描述
// •计算一个数字的立方根，不使用库函数
while ((line = readline())) {
  let tri = parseInt(line);
  let l = 0,
    r = tri;
  while (r - l > 0.01) {
    let mid = (l + r) / 2;
    if (mid ** 3 > tri) {
      r = mid;
    } else {
      l = mid;
    }
  }
  console.log(r.toFixed(1));
}


// 题目描述 

//    Redraiment是走梅花桩的高手。Redraiment总是起点不限，从前到后，往高的桩子走，但走的步数最多，不知道为什么？你能替Redraiment研究他最多走的步数吗？
while ((num = readline())) {
  var arr = readline()
    .split(" ")
    .map(item => +item);
  var dp = [];
  var res = 0;
  for (var i = 0; i < num; i++) {
    dp[i] = 1;
    for (var j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    res = Math.max(res, dp[i]);
  }
  console.log(res);
}

// 题目描述
// 如果统计的个数相同，则按照ASCII码由小到大排序输出 。如果有其他字符，则对这些字符不用进行统计。

// 实现以下接口：
// 输入一个字符串，对字符中的各个英文字符，数字，空格进行统计（可反复调用）
// 按照统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASCII码由小到大排序输出
// 清空目前的统计结果，重新统计
// 调用者会保证：
// 输入的字符串以‘\0’结尾。
while ((n = readline())) {
  var obj = {};
  var str = n;
  for (var i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  var keys = Object.keys(obj);
  keys = keys.sort((a, b) => {
    if (obj[a] === obj[b]) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    return obj[b] - obj[a];
  });
  console.log(keys.join(""));
}

// 题目描述
// 输入整型数组和排序标识，对其元素按照升序或降序进行排序（一组测试用例可能会有多组数据）
while(line = readline()){
    var arr=readline().trim().split(' ')
    var flag=readline()
    if(flag==0){
        arr.sort((a,b)=>{
            return a-b
        })
    }else{
            arr.sort((a,b)=>{
                return b-a
            })
        }
    console.log(arr.join(' '))
      }

//       题目描述
// 功能:等差数列 2，5，8，11，14。。。。
// 输入:正整数N >0
// 输出:求等差数列前N项和
// 返回:转换成功返回 0 ,非法输入与异常返回-1
// 本题为多组输入，请使用while(cin>>)等形式读取数据
while ((n = readline())) {
  const diff = 3;
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i * diff - 1;
  }
  console.log(s);
}
// 题目描述
// 自守数是指一个数的平方的尾数等于该数自身的自然数。例如：25^2 = 625，76^2 = 5776，9376^2 = 87909376。请求出n以内的自守数的个数

function getX(n) {
  let s = 0;
  for (let i = 0; i <= n; i++) {
    let xx = i * i + "";
    if (xx.endsWith(i)) {
      s++;
    }
  }
  return s;
}
while ((n = readline())) {
  console.log(getX(n));
}

// 题目描述
// 1 总体说明
// 考生需要模拟实现一个简单的自动售货系统，实现投币、购买商品、退币、查询库存商品及存钱盒信息的功能。
// 系统初始化时自动售货机中商品为6种商品,商品的单价参见1.1规格说明，存钱盒内放置1元、2元、5元、10元钱币，商品数量和钱币张数通过初始化命令设置，参见2.1 系统初始化。
var thingList = [
  {
    name: "A1",
    price: 2,
    num: 0
  },
  {
    name: "A2",
    price: 3,
    num: 0
  },
  {
    name: "A3",
    price: 4,
    num: 0
  },
  {
    name: "A4",
    price: 5,
    num: 0
  },
  {
    name: "A5",
    price: 8,
    num: 0
  },
  {
    name: "A6",
    price: 6,
    num: 0
  }
];

var moneyList = [
  {
    power: 1,
    num: 0
  },
  {
    power: 2,
    num: 0
  },
  {
    power: 5,
    num: 0
  },
  {
    power: 10,
    num: 0
  }
];
var lastMoney = 0;
var error = "";
while ((str = readline())) {
  var actList = str.split(";");
  for (let item of actList) {
    if (item) {
      switch (item[0]) {
        case "r":
          init(item);
          break;
        case "p":
          setCoin(item);
          break;
        case "b":
          buy(item);
          break;
        case "c":
          getCoin(item);
          break;
        case "q":
          search(item);
      }
    }
  }
}
if (error) {
  console.log(error);
}

function init(str) {
  var goodsList = str.split(" ")[1].split("-");
  for (var i = 0; i < goodsList.length; i++) {
    thingList[i].num = +goodsList[i];
  }
  var coinList = str.split(" ")[2].split("-");
  for (var i = 0; i < coinList.length; i++) {
    moneyList[i].num = +coinList[i];
  }
  lastMoney = 0;
  console.log(error + "S001:Initialization is successful");
  error = "";
}

function setCoin(str) {
  var m = +str.split(" ")[1];
  if (m !== 1 && m !== 2 && m !== 5 && m !== 10) {
    console.log(error + "E002:Denomination error");
    error = "";
    return;
  }
  if (m !== 1 && m !== 2) {
    var ac =
      moneyList[0].power * moneyList[0].num +
      moneyList[1].power * moneyList[1].num;
    if (ac < m) {
      console.log(error + "E003:Change is not enough, pay fail");
      error = "";
      return;
    }
  }

  lastMoney += m;
  for (let item of moneyList) {
    if (item.power === m) {
      item.num++;
    }
  }
  console.log(error + "S002:Pay success,balance=" + lastMoney);
  error = "";
}

function buy(str) {
  var name = str.split(" ")[1];
  for (let item of thingList) {
    if (item.name === name) {
      if (item.num <= 0) {
        console.log(error + "E007:The goods sold out");
        error = "";
        return;
      } else if (lastMoney < item.price) {
        console.log(error + "E008:Lack of balance");
        error = "";
        return;
      } else {
        item.num--;
        lastMoney -= item.price;
        console.log(error + "S003:Buy success,balance=" + lastMoney);
        error = "";
        return;
      }
    }
  }
  console.log(error + "E006:Goods does not exist");
  error = "";
}

function getCoin(str) {
  if (lastMoney <= 0) {
    error += "E009:Work failure";
    return;
  }
  var param = [];
  for (var i = 0; i < moneyList.length; i++) {
    while (true) {
      if (
        moneyList[moneyList.length - 1 - i].num > 1 &&
        lastMoney >= moneyList[moneyList.length - 1 - i].power
      ) {
        moneyList[moneyList.length - 1 - i].num--;
        param[moneyList.length - 1 - i] =
          (param[moneyList.length - 1 - i] || 0) + 1;
        lastMoney -= moneyList[moneyList.length - 1 - i].power;
      } else {
        break;
      }
    }
  }
  lastMoney = 0;

  console.log(error + "1 yuan coin number=" + (param[0] || 0));
  error = "";
  console.log("2 yuan coin number=" + (param[1] || 0));
  console.log("5 yuan coin number=" + (param[2] || 0));
  console.log("10 yuan coin number=" + (param[3] || 0));
}

function search(str) {
  var type = +str.split(" ")[1];
  if (type === 0) {
    for (let item of thingList) {
      console.log(error + item.name + " " + item.price + " " + item.num);
      error = "";
    }
  } else if (type === 1) {
    for (let item of moneyList) {
      console.log(error + item.power + " yuan coin number=" + item.num);
      error = "";
    }
  } else {
    error += "E010:Parameter error";
  }
}

// 题目描述 表示数字
// 将一个字符中所有出现的数字前后加上符号“*”，其他字符保持不变
// public static String MarkNum(String pInStr)
// {
// return null;
// }
// 注意：输入数据可能有多行
var lines;
while ((lines = readline())) {
  let flag = 0;
  var res = "";
  for (let i = 0; i < lines.length; i++) {
    if (Number.isNaN(Number(lines[i]))) {
      if (flag) {
        res = res + "*" + lines[i];
        flag = 0;
      } else res = res + lines[i];
    } else {
      if (flag) {
        res = res + lines[i];
      } else {
        res = res + "*" + lines[i];
        flag = 1;
      }
    }
  }
  if (flag) res = res + "*";
  print(res);
}

// 题目描述
// 现在IPV4下用一个32位无符号整数来表示，一般用点分方式来显示，点将IP地址分成4个部分，每个部分为8位，表示成一个无符号整数（因此不需要用正号出现），如10.137.17.1，是我们非常熟悉的IP地址，一个IP地址串中没有空格出现（因为要表示成一个32数字）。

// 现在需要你用程序来判断IP是否合法。
while ((line = readline())) {
  var ip = line.trim();
  var arr = ip.split(".");
  var isIp = true;
  if (arr.length !== 4) {
    isIp = false;
  }
  for (var i = 0; i < 4; i++) {
    if (!Number.isInteger(+arr[i]) || arr[i] > 255 || arr[i] < 0) {
      isIp = false;
      break;
    }
  }
  console.log(isIp ? "YES" : "NO");
}

// 题目描述
// 扑克牌游戏大家应该都比较熟悉了，一副牌由54张组成，含3~A、2各4张，小王1张，大王1张。牌面从小到大用如下字符和字符串表示（其中，小写joker表示小王，大写JOKER表示大王）：
// 3 4 5 6 7 8 9 10 J Q K A 2 joker JOKER
// 输入两手牌，两手牌之间用"-"连接，每手牌的每张牌以空格分隔，"-"两边没有空格，如：4 4 4 4-joker JOKER。
// 请比较两手牌大小，输出较大的牌，如果不存在比较关系则输出ERROR。
// 基本规则：
// （1）输入每手牌可能是个子、对子、顺子（连续5张）、三个、炸弹（四个）和对王中的一种，不存在其他情况，由输入保证两手牌都是合法的，顺子已经从小到大排列；
// （2）除了炸弹和对王可以和所有牌比较之外，其他类型的牌只能跟相同类型的存在比较关系（如，对子跟对子比较，三个跟三个比较），不考虑拆牌情况（如：将对子拆分成个子）；
// （3）大小规则跟大家平时了解的常见规则相同，个子、对子、三个比较牌面大小；顺子比较最小牌大小；炸弹大于前面所有的牌，炸弹之间比较牌面大小；对王是最大的牌；

// （4）输入的两手牌不会出现相等的情况。
function digit(i) {
  let d = parseInt(i);
  switch (i) {
    case "J":
      d = 11;
      break;
    case "Q":
      d = 12;
      break;
    case "K":
      d = 13;
      break;
    case "A":
      d = 14;
      break;
    case "2":
      d = 15;
      break;
  }
  return d;
}

function check(a, b) {
  let one = a.split(" ");
  let two = b.split(" ");

  if (one.length !== two.length) {
    if (one.length === 2 && (one[0] === "joker" || one[1] === "joker")) {
      return a;
    } else if (two.length === 2 && (two[0] === "joker" || two[1] === "joker")) {
      return b;
    } else if (one.length === 4 && one[0] === one[3]) {
      return a;
    } else if (two.length === 4 && two[0] === two[3]) {
      return b;
    } else {
      return "ERROR";
    }
  } else {
    // Same length
    return digit(one[0]) > digit(two[0]) ? a : b;
  }
}
while ((poker = readline())) {
  let two = poker.split("-");
  console.log(check(two[0], two[1]));
}

// 题目描述
// 对于不同的字符串，我们希望能有办法判断相似程度，我们定义了一套操作方法来把两个不相同的字符串变得相同，具体的操作方法如下：
// 1 修改一个字符，如把“a”替换为“b”。
// 2 增加一个字符，如把“abdd”变为“aebdd”。
// 3 删除一个字符，如把“travelling”变为“traveling”。
// 比如，对于“abcdefg”和“abcdef”两个字符串来说，我们认为可以通过增加和减少一个“g”的方式来达到目的。上面的两种方案，都只需要一次操作。把这个操作所需要的次数定义为两个字符串的距离，而相似度等于“距离＋1”的倒数。也就是说，“abcdefg”和“abcdef”的距离为1，相似度为1/2=0.5.
// 给定任意两个字符串，你是否能写出一个算法来计算出它们的相似度呢？
while ((str = readline())) {
  var str1 = str.split("");
  var str2 = readline().split("");
  var dis = fn_dis(str1, str2) + 1;
  var res = 1 + "/" + dis;
  console.log(res);
}
function fn_dis(s1, s2) {
  var m = s1.length;
  var n = s2.length;
  var dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }
  // dp[i][j] 表s1[i-1] => s2[j-1]的代价
  // dp[i][0]第一列
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1),
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }
  return dp[m][n];
}

// 题目描述
// 请设计一个算法完成两个超长正整数的加法。
while ((str1 = readline())) {
  let str2 = readline();
  let length1 = str1.length;
  let length2 = str2.length;
  let flag = 0;
  let sum = 0;
  let result = "";
  for (i = 0; i < Math.abs(length1 - length2); i++) {
    if (length1 < length2) {
      str1 = "0" + str1;
    }
    if (length1 > length2) {
      str2 = "0" + str2;
    }
  }
  for (i = Math.max(length1, length2) - 1; i >= 0; i--) {
    sum = parseInt(str1[i]) + parseInt(str2[i]) + flag;

    if (sum >= 10) {
      flag = 1;
      sum = sum - 10;
    } else {
      flag = 0;
    }
    result = sum + result;
  }
  if (flag == 1) {
    result = "1" + result;
  }
  console.log(result);
}

// 题目描述
// 问题描述：在计算机中，通配符一种特殊语法，广泛应用于文件搜索、数据库、正则表达式等领域。现要求各位实现字符串通配符的算法。
// 要求：
// 实现如下2个通配符：
// *：匹配0个或以上的字符（字符由英文字母和数字0-9组成，不区分大小写。下同）
// ？：匹配1个字符
while ((str = readline())) {
  var strn = readline();
  var reg = str.replace(/\?/g, "[a-zA-Z0-9]?").replace(/\*/g, "[a-zA-Z0-9]*");
  reg = new RegExp(reg);
  console.log(reg.test(strn));
}

// 题目描述
// 矩阵乘法的运算量与矩阵乘法的顺序强相关。
// 例如：
//     A是一个50×10的矩阵，B是10×20的矩阵，C是20×5的矩阵
// 计算A*B*C有两种顺序：（（AB）C）或者（A（BC）），前者需要计算15000次乘法，后者只需要3500次。
// 编写程序计算不同的计算顺序需要进行的乘法次数
var n;
var oStart;
while ((n = readline())) {
  var count = 0;
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(
      readline()
        .split(" ")
        .map(item => +item)
    );
  }
  var rule = readline();

  if (rule.charAt(1) == "A") {
    // 将最后一个弹出开始计算
    oStart = arr.pop();

    for (let i = 0; i < n - 1; i++) {
      count += arr[i][0] * arr[i][1] * oStart[1];
    }
    console.log(count);
  } else {
    // 将第一个弹出开始计算
    oStart = arr.shift();
    for (let i = 0; i < n - 1; i++) {
      count += arr[i][0] * arr[i][1] * oStart[0];
    }
    console.log(count);
  }
}

// 查找两个字符串a,b中的最长公共子串。若有多个，输出在较短串中最先出现的那个。
while ((str1 = readline())) {
  var str2 = readline();
  if (str1.length < str2.length) {
    [str1, str2] = [str2, str1];
  }
  var maxstr = "";
  var str = "";
  for (var i = 0; i < str2.length; i++) {
    str += str2[i];
    if (str1.indexOf(str) !== -1) {
      if (str.length > maxstr.length) {
        maxstr = str;
      }
      continue;
    }
    str = str.substr(1);
  }
  console.log(maxstr);
}

// 题目描述
// MP3 Player因为屏幕较小，显示歌曲列表的时候每屏只能显示几首歌曲，用户要通过上下键才能浏览所有的歌曲。为了简化处理，假设每屏只能显示4首歌曲，光标初始的位置为第1首歌。
while ((num = readline())) {
  let pointer = 1;
  let start = 1;
  let end = 4;
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr[i] = i;
  }
  let ops = readline().split("");
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] == "U") {
      if (pointer == 1) {
        pointer = num;
        start = Math.max(num - 3, 1);
        end = num;
      } else {
        pointer--;
        if (pointer < start) {
          start--;
          end--;
        }
      }
    } else if (ops[i] == "D") {
      if (pointer == num) {
        pointer = 1;
        start = 1;
        end = Math.min(start + 3, num);
      } else {
        pointer++;
        if (pointer > end) {
          start++;
          end++;
        }
      }
    }
  }
  let ans = "";
  for (let i = start; i <= end; i++) {
    ans += arr[i] + " ";
  }
  console.log(ans);
  console.log(arr[pointer]);
}

// 题目描述
// 一个DNA序列由A/C/G/T四个字母的排列组合组成。G和C的比例（定义为GC-Ratio）是序列中G和C两个字母的总的出现次数除以总的字母数目（也就是序列长度）。在基因工程中，这个比例非常重要。因为高的GC-Ratio可能是基因的起始点。

// 给定一个很长的DNA序列，以及要求的最小子序列长度，研究人员经常会需要在其中找出GC-Ratio最高的子序列。
while ((dna = readline())) {
  var len = readline();
  var arr = dna.split("");

  var tag = 0;
  var maxSum = 0;
  for (var i = 0; i <= arr.length - len; i++) {
    var sum = 0;
    for (var j = 0; j < len; j++) {
      var index = i + j;
      if (arr[index] == "G" || arr[index] == "C") {
        sum++;
      }
    }
    if (sum > maxSum) {
      maxSum = sum;
      tag = i;
    }
  }
  console.log(dna.substr(tag, len));
}

// 题目描述
// 任意一个偶数（大于2）都可以由2个素数组成，组成偶数的2个素数有很多种情况，本题目要求输出组成指定偶数的两个素数差值最小的素数对
while ((line = readline())) {
  var data = parseInt(line);
  for (var i = data / 2; i < data; i++) {
    var j = data - i;
    if (isPrime(i) && isPrime(j)) {
      console.log(j + "\n" + i);
      break;
    }
  }
}

function isPrime(n) {
  if (n >= 2) {
    for (var i = 2; i < Math.ceil(n / 2); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// 题目描述
// 找出字符串中第一个只出现一次的字符
let n;
while ((n = readline())) {
  let s = "";
  let obj = {};
  for (var i = 0; i < n.length; i++) {
    if (!obj[n[i]]) {
      obj[n[i]] = 1;
    } else {
      obj[n[i]] = obj[n[i]] + 1;
    }
  }
  Object.values(obj).forEach((ele, i) => {
    if (ele == 1) {
      s += Object.keys(obj)[i];
    }
  });
  s = s[0];
  if (s == undefined) s = "-1";
  console.log(s);
}

// 题目描述
// 在计算机中，由于处理器位宽限制，只能处理有限精度的十进制整数加减法，比如在32位宽处理器计算机中，
// 参与运算的操作数和结果必须在-2^31~2^31-1之间。如果需要进行更大范围的十进制整数加法，需要使用特殊
// 的方式实现，比如使用字符串保存操作数和结果，采取逐位运算的方式。如下：
// 9876543210 + 1234567890 = ?
// 让字符串 num1="9876543210"，字符串 num2="1234567890"，结果保存在字符串 result = "11111111100"。
// -9876543210 + (-1234567890) = ?
// 让字符串 num1="-9876543210"，字符串 num2="-1234567890"，结果保存在字符串 result = "-11111111100"。
let line;
while ((line = readline())) {
  let m = line.trim();
  let n = readline().trim();
  let arr1 = m.split("").reverse();
  let arr2 = n.split("").reverse();
  var len = m.length > n.length ? m.length : n.length;
  var arr = [];
  var s = 0;
  for (var i = 0; i < len; i++) {
    let a = isNaN(arr1[i]) ? 0 : +arr1[i];
    let b = isNaN(arr2[i]) ? 0 : +arr2[i];
    let sum = a + b + s;
    if (sum >= 10) {
      arr[i] = sum % 10;
      s = 1;
    } else {
      arr[i] = sum;
      s = 0;
    }
  }
  if (s > 0) arr.push(s);
  console.log(arr.reverse().join(""));
}

// 题目描述
// 输出7有关数字的个数，包括7的倍数，还有包含7的数字（如17，27，37...70，71，72，73...）的个数（一组测试用例里可能有多组数据，请注意处理）
while ((line = readline())) {
  let n = Number(line);
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 7 == 0 || (i + "").indexOf("7") != -1) {
      count++;
    }
  }

  console.log(count);
}

// 题目描述
// Levenshtein 距离，又称编辑距离，指的是两个字符串之间，由一个转换成另一个所需的最少编辑操作次数。许可的编辑操作包括将一个字符替换成另一个字符，插入一个字符，删除一个字符。编辑距离的算法是首先由俄国科学家Levenshtein提出的，故又叫Levenshtein Distance。

// Ex：

// 字符串A:abcdefg

// 字符串B: abcdef

// 通过增加或是删掉字符”g”的方式达到目的。这两种方案都需要一次操作。把这个操作所需要的次数定义为两个字符串的距离。

// 要求：

// 给定任意两个字符串，写出一个算法计算它们的编辑距离。
function Ldistance(ch1, ch2) {
  let m = ch1.length;
  let n = ch2.length;
  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (ch1[i - 1] === ch2[j - 1])
        //如果i,j位相同，则不用变化，与上一轮结果是一样的
        dp[i][j] = dp[i - 1][j - 1];
      else {
        //如果i,j位不同，那么就需要从给ch1增加一个字母，给ch2增加一个字母或者把ch1一个字母变成和ch2一样来选一个最小的作为这个点的改变距离
        dp[i][j] = Math.min(
          Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1),
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n];
}
while ((line = readline())) {
  let str1 = line.split("");
  let str2 = readline().split("");
  let distance = Ldistance(str1, str2);
  console.log(distance);
}

// 题目描述
// 假设一个球从任意高度自由落下，每次落地后反跳回原高度的一半; 再落下, 求它在第5次落地时，共经历多少米?第5次反弹多高？

// 最后的误差判断是小数点6位
while ((n = readline())) {
  console.log(parseFloat((23 * n) / 8).toFixed(6));
  console.log(parseFloat(n / 32).toFixed(6));
}

// 题目描述
// 有一种技巧可以对数据进行加密，它使用一个单词作为它的密匙。下面是它的工作原理：首先，选择一个单词作为密匙，如TRAILBLAZERS。如果单词中包含有重复的字母，只保留第1个，其余几个丢弃。现在，修改过的那个单词属于字母表的下面，如下所示：
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// T R A I L B Z E S C D F G H J K M N O P Q U V W X Y
// 上面其他用字母表中剩余的字母填充完整。在对信息进行加密时，信息中的每个字母被固定于顶上那行，并用下面那行的对应字母一一取代原文的字母(字母字符的大小写状态应该保留)。因此，使用这个密匙，Attack AT DAWN(黎明时攻击)就会被加密为Tpptad TP ITVH。
// 请实现下述接口，通过指定的密匙和明文得到密文。
// 详细描述：
// 接口说明
// 原型：
// voidencrypt(char * key,char * data,char * encrypt);
// 输入参数：
// char * key：密匙
// char * data：明文
// 输出参数：
// char * encrypt：密文
// 返回值：
// void
// 本题有多组输入数据，请使用while(cin>>)读取
while ((key = readline())) {
  let target = readline();
  const str = "abcdefghijklmnopqrstuvwxyz";
  key += str;

  let model = "";
  let res = "";
  for (let i = 0; i < key.length; i++) {
    if (i === key.indexOf(key[i])) {
      model += key[i];
    }
  }

  for (let k = 0; k < target.length; k++) {
    res += model[str.indexOf(target[k])];
  }
  console.log(res);
}

/**
 * 题目描述
题目说明
蛇形矩阵是由1开始的自然数依次排列成的一个矩阵上三角形。
样例输入
5
样例输出
1 3 6 10 15
2 5 9 14
4 8 13
7 12
11
 */
while ((n = +readline())) {
  var arr = [];
  var count = 1;
  for (var i = 0; i < n; i++) {
    arr.push([]);
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= i; j++) {
      arr[i - j][j] = count;
      count++;
    }
  }
  for (var i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
  }
}

// 题目描述
// Lily上课时使用字母数字图片教小朋友们学习英语单词，每次都需要把这些图片按照大小（ASCII码值从小到大）排列收好。请大家给Lily帮忙，通过C语言解决。
while ((line = readline())) {
  let arr = line.trim().split("");
  arr = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  let result = arr.join("");
  console.log(result);
}

// 题目描述
// 编写一个程序，将输入字符串中的字符按如下规则排序。
// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
// 如，输入： Type 输出： epTy
// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
// 如，输入： BabA 输出： aABb
// 规则 3 ：非英文字母的其它字符保持原来的位置。
// 如，输入： By?e 输出： Be?y
while ((str = readline())) {
  let arr = str.split("");
  let obj = {};
  arr.forEach((t, i) => {
    let res = t.toLowerCase();
    if (res > "z" || res < "a") {
      return;
    }
    if (obj[res]) {
      obj[res].push(t);
    } else {
      obj[res] = [t];
    }
    arr[i] = "";
  });
  let letters = [];
  Object.keys(obj)
    .sort()
    .forEach(t => {
      letters = letters.concat(obj[t]);
    });
  arr.forEach((el, i) => {
    if (!el) {
      arr[i] = letters.shift();
    }
  });
  console.log(arr.join(""));
}

// 题目描述
// 密码是我们生活中非常重要的东东，我们的那么一点不能说的秘密就全靠它了。哇哈哈. 接下来渊子要在密码之上再加一套密码，虽然简单但也安全。
// 假设渊子原来一个BBS上的密码为zvbo9441987,为了方便记忆，他通过一种算法把这个密码变换成YUANzhi1987，这个密码是他的名字和出生年份，怎么忘都忘不了，而且可以明目张胆地放在显眼的地方而不被别人知道真正的密码。
// 他是这么变换的，大家都知道手机上的字母： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0,就这么简单，渊子把密码中出现的小写字母都变成对应的数字，数字和其他的符号都不做变换，
// 声明：密码中没有空格，而密码中出现的大写字母则变成小写之后往后移一位，如：X，先变成小写，再往后移一位，不就是y了嘛，简单吧。记住，z往后移是a哦
let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let str2 = "bcdefghijklmnopqrstuvwxyza22233344455566677778889999";
let input = readline();
let res = "";
for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
    char = str2[str1.indexOf(char)];
  }
  res += char;
}
console.log(res);

// 题目描述
// 王强今天很开心，公司发给N元的年终奖。王强决定把年终奖用于购物，他把想买的物品分为两类：主件与附件，附件是从属于某个主件的，下表就是一些主件与附件的例子：
// 主件	附件
// 电脑	打印机，扫描仪
// 书柜	图书
// 书桌	台灯，文具
// 工作椅	无
// 如果要买归类为附件的物品，必须先买该附件所属的主件。每个主件可以有 0 个、 1 个或 2 个附件。附件不再有从属于自己的附件。王强想买的东西很多，为了不超出预算，他把每件物品规定了一个重要度，分为 5 等：用整数 1 ~ 5 表示，第 5 等最重要。他还从因特网上查到了每件物品的价格（都是 10 元的整数倍）。他希望在不超过 N 元（可以等于 N 元）的前提下，使每件物品的价格与重要度的乘积的总和最大。
//     设第 j 件物品的价格为 v[j] ，重要度为 w[j] ，共选中了 k 件物品，编号依次为 j 1 ， j 2 ，……， j k ，则所求的总和为：
// v[j 1 ]*w[j 1 ]+v[j 2 ]*w[j 2 ]+ … +v[j k ]*w[j k ] 。（其中 * 为乘号）
//     请你帮助王强设计一个满足要求的购物单。
while ((str1 = readline())) {
  var arr = str1.split(" ");
  //总钱数
  var m = parseInt(arr[0]) / 10;
  //希望购买物品的件数
  var n = parseInt(arr[1]);
  var goods = [],
    count = 1;
  // 第j行数据表示编号j-1的物品的基本数据 价格 重要度 主附件（0 主件 >0 附件值为其所属主件的编号）
  while (count <= n) {
    var item = readline()
      .split(" ")
      .map(val => parseInt(val));
    // 是主件
    if (item[2] == 0) {
      goods[count] = [{ v: item[0] / 10, w: (item[0] / 10) * item[1] }];
      // 是附件， 同时必须购买相应的主件
    } else {
      var add = goods[item[2]].map(val => {
        return {
          v: item[0] / 10 + val.v,
          w: (item[0] / 10) * item[1] + val.w
        };
      });
      goods[item[2]] = [...goods[item[2]], ...add];
    }
    count++;
  }
  console.log(choose(goods));
}
function choose(goods) {
  var res = Array(m + 1).fill(0);
  for (var i = 0; i < goods.length; i++) {
    for (var j = m; j >= 0; j--) {
      if (goods[i]) {
        goods[i].forEach(val => {
          if (val.v <= j) {
            // 买权重较高的物品
            res[j] = Math.max(res[j], res[j - val.v] + val.w);
          }
        });
      }
    }
  }
  return res[m] * 10;
}

// 题目描述
// 给定n个字符串，请对n个字符串按照字典序排列。
let str;
let count = 0;
let arr = [];
while ((str = readline())) {
  if (count === 0) {
    count++;
    continue;
  }
  arr.push(str);
}
arr.sort();
for (let s of arr) {
  console.log(s);
}

// 题目描述
// 编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
// 输入
// abaca
// 输出
// 3
let str = readline();
let arr = [];
for (let i in str) {
  if (!arr.includes(str[i])) {
    arr.push(str[i]);
  }
}

console.log(arr.length);

// 题目描述
// 输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
let num = readline();
num = (num + "").split("").reverse();
let arr = [];

num.forEach(val => {
  if (!arr.includes(val)) {
    arr.push(val);
  }
});

console.log(Number(arr.join("")));

// 题目描述
// 数据表记录包含表索引和数值（int范围的整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。
let n = readline();
let obj = {};
while ((num = readline())) {
  let arr = num.split(" ");
  if (obj[arr[0]] === undefined) {
    obj[arr[0]] = arr[1];
  } else {
    obj[arr[0]] = Number(arr[1]) + Number(obj[arr[0]]);
  }
}
for (let i in obj) {
  console.log(i + " " + obj[i]);
}

// 题目描述
// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）
// 最后一个数后面也要有空格
var data = readline();
let str = "";
for (let i = 2; i < Math.sqrt(data); i++) {
  while (data % i == 0) {
    str += i + " ";
    data /= i;
  }
}
if (data > 1) {
  str += data + " ";
}
console.log(str);

// 题目描述
// 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。（多组同时输入 ）
let str;
while ((str = readline())) {
  let res = parseInt(str).toString();
  console.log(res);
}
