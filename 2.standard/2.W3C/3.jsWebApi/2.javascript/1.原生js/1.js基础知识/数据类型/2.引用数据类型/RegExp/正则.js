//正则：它是一个规则，用来处理字符串的一个规则（正则就是用来处理字符串的）
//处理：
//1、判断一个字符串是否符合我们制定的规则
var reg = /\d/; //包含一个0-9之间的数字
console.log(reg.test("珠")); //false
console.log(reg.test("1")); //true
console.log(reg.test("珠峰2015")); //true

//2、把字符串中符合我们正则规则的内容捕获到
var reg = /\d/; //包含一个0-9之间的数字
console.log(reg.exec("珠")); //-->null
console.log(reg.exec("1")); //-->[ '1', index: 0, input: '1' ]

//2-->如何创建一个正则：
//字面量方式
var reg = /\d/;

//实列创建方式
var reg = new RegExp("");

/* 正则的元字符和一些简单的应用 */
//元字符：
//每一个正则表达式都是由元字符和修饰符组成的

//[元字符]-->在//之间具有意义的一些字符
//1、具有特殊意义的元字符
//\：转义字符，转译后面字符所代表的含义
//^：以某一个元字符开始
//$：以某一个元字符结束
//\n：匹配一个换行符
//.：除了\n以外的任意字符

//()：分组-->把一个大正则本身划分为几个小的正则
var reg = /^(\d+)zhufeng(\d+)$/;

//x|y：x或者y中的一个
//[xyz]：x或者y或者y中的一个
//[^xyz]除了三个以外的任何一个字符
//[a-z]：a-z之间的任何一个字符
//[^a-z]：除了a-z之间的任何一个字符
//\d：一个0-9之间的数组  \D:除了0-9之间的数字以外的任何字符
//\b:一个边界符 "w1 w2 w3"
//\w：数字、字母、下划线中的任意一个字符  [0-9a-zA-Z_]
//\s：匹配一个空白字符 空格、一个制表符（TAB键）、换页符...

var reg = /\d/; //-->包含一个0-9之间的数字
console.log(reg.test("zh0023")); //-->true
var reg = /^\d$/; //-->只能是一个0-9之间的数字
console.log(reg.test("9")); //-->true
console.log(reg.test("012")); //-->false

//2、代表出现次数的量词元字符
//*：出现零到多次
//+：出现一到多次
//?：出现零次或者一次
//{n}：出现n此
//{n,}：出现n到多次
//{n,m}：出现n到m次

var reg = /^\d+$/;
console.log(reg.test("2015"));

/* 元字符应用 */
//1、有效数字的正则 正数、负数、零、小数
//"."可以出现也可以不出现，一旦出现，后面必须跟着一个或者多个数字
//最开始可以有+/-也可以没有
//整数部分，一位数可以是0-9之间的一个，多位数不能以0开头

//[]
//在[]中出现的所有字符都是代表本身意思的字符

var reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;

/* 正则创建方式的区别 */
var name = "zhufeng";
//在字面量方式中，我们//之间包起来的所有内容都是元字符，有的具有特殊的意义，大部分都是代表本身含义的普通的元字符
var reg = /^\d+"+name+"\d+$/;
console.log(reg.test("2015zhufeng2016")); //-->false
console.log(reg.test('015"""nameeee"2016')); //-->true
//对于这样的需求，我们只能用实列创建的方式了
var reg = new RegExp("^\\d+" + name + "\\d+$", "g");
console.log(reg.test("2015zhufeng2016")); //-->true
//字面量方式和实列创建的方式在正则中的区别
//1、字面量方式出现的一切都是元字符，所以不能进行变量值的拼接，而实列创建的方式可以
//2、字面量方式中直接写\d就可以，而在实列中需要把它转译\\d

/* 编写简单的正则表达式 */
//年龄介于18~65之间（18-19、20-59、60-65）
//[]中不识别两位数 /^[12]$/-->1或者2
///^[\w-]$/-->数字、字母、下划线、中杆中的一个

var reg = /^[12-68]$/; //-->1、2-6中的一个、8 三个中的一个
var reg = /^(1[8-9]|[2-5]\d|6[0-5])$/;

//验证邮箱的正则
var reg = /^[\w.-]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,4})$/;

/* 懒惰性和贪婪性 */
//exec-->正则捕获
//每一次捕获的时候都是先进行默认的匹配，如果没有匹配成功，捕获的结果是null，只有匹配的内容我们才能捕获到
//1、捕获到的内容时一个数组，数组中的第一项是当前大正则捕获的内容
//index：捕获内容在字符串中开始的索引位置
//input：捕获的原始字符串
var reg = /\d+/;
var str = "zhufeng2015peixun2016";
var res = reg.exec(str);
console.log(reg.lastIndex);
console.log(res); //[ '2015', index: 7, input: 'zhufeng2015peixun2016' ]
console.log(reg.lastIndex); //-->0 说明我们第二次捕获的时候也是要从字符串索引0处开始查找

//2、如何解决懒惰性 在正则的末尾加一个修饰符"g"
//修饰符：g、i、m
//global（g）：全局匹配
//ignoreCase(i)：忽略大小写匹配
//multiline（m）：多行匹配
var reg = /\d+/g;
var str = "zhufeng2015peixun2016";
var res = reg.exec(str);
console.log(res);
console.log(reg.exec(str));
console.log(reg.exec(str));

var reg = /\d+/g;
var str = "zhufsd32zhang234asd";
var ary = [];
var res = reg.exec(str);
while (res) {
  ary.push(res[0]);
  res = reg.exec(str);
}
console.log(ary);

//4、贪婪性：正则的每一次捕获都是按照匹配嘴唇的结果捕获的，例如2符合正则2015也符合正则，我们默认捕获2015
//5、如何解决正则的贪婪性-->在量词元字符后面添加一个？即可
//?在正则中有很多的作用
//放在一个普通的元字符后面代表出现0-1次 /\d?/ -->数字可能出现也可能不出现
//放在一个量词的元字符后面是取消捕获时的贪婪性
var reg = /\d+?/g;
var ary = [],
  res = reg.exec(str);
while (res) {
  ary.push(res[0]);
  res = reg.exec(str);
}

//字符串中的match方法 -->把所有和正则匹配的字符都获取到
var reg = /\d+?/g;
var str = "fasd11212asdf1211sd";
var ary = str.match(reg);

//虽然在当前的情况下match比我们的exec简洁但是match中存在一些自己处理不了的问题：在分组捕获的情况下，match只能捕获到大正则匹配的内容，而对于小正则捕获的内容时无法捕获的

/* 分组捕获 */
//正则分组：
//1、改变优先级
//2、分组引用
//\2代表和第二个分组出现一模一样的内容 ；\1和第一个分组出现一模一样的内容；
//一模一样：和对应的分组中的内容的值都要一样
var reg = /^(\w)\1(\w)\2$/;
console.log(reg.test("zzff")); //-->true
console.log(reg.test("z0f_")); //-->false

//3、分组捕获-->正则在捕获的时候，不仅仅把大正则匹配的内容捕获到，而且还把小分组匹配的内容捕获到
//?: 在分组中 ？： 的意思是只匹配不捕获
var reg = /^/;
var str = "";
console.log(str.exec(reg));
console.log(str.match(reg)); //-->和exec的结果是一样的

//
var reg = /zhufeng(\d+)/g;
var str = "zhufeng1234z";

/* replace */
//replace：把原有的字符替换成新的字符
//在不使用正则的情况下，每当执行一次只能替换一个字符
var str = "zhufeng2015zhufeng2016";
// str = str.replace("zhufeng","zhufengpeixun").replace("zhufeng","zhufengpeixun")没有实现需求
str = str.replace(/zhufeng/g, "zhufengpeixun");
//replace第一项的值是一个正则，它的实现原理
//首先我们和exec捕获一样，把所有和我们正则匹配的都捕获到，然后把捕获的内容替换成我们需要替换的新内容
///zhufeng/g 按照这个正则把str中所有可以匹配的都捕获到，然后统一都替换成我们""zhufengpeixuan"
str = str.replace(/zhufeng/g, function() {
  console, log("ok");
  return "zhufengpeixun";
});
//第二个参数换成一个函数
//1、匿名函数执行多少次，取决于正则能在字符串中捕获多少次 -->正则捕获两次，所以我们的匿名函数也执行两次
//2、每一次执行匿名函数，里面传递的参数值arguments和我们自己通过exec捕获到的结果是非常类似的（即使正则有分组，我们同样可以通过arguments捕获到的内容）
//3、return ：你返回的结果是啥，就相当于把当前这一次大正则捕获的内容替换成你返回的内容
var str = "zhufeng2015zhufeng2016";
str = str.replace(/\d+/g, function() {
  console.log(RegExp.$1); //获取第一个分组捕获的内容
  return 1; //我返回的 1把每一次大正则匹配捕获的内容都替换了
});
console.log(str);

/* 正则捕获专题复习 */
