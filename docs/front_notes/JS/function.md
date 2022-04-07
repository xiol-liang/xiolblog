# 2.函数(function)

## 1.什么是函数

```js
<script>
  // 1. 求1~100的累加和
  var sum = 0;
  for (var i = 0; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);

  // 2. 求10~50的累加和
  var sum = 0;
  for (var i = 10; i <= 50; i++) {
    sum += i;
  }
  console.log(sum);

  // 3.函数方法 函数就是封装了一段可以被重复执行调用的代码块 目的：让大量代码重复使用
  function getSum(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
      sum += i;
    }
    console.log(sum);
  }
  getSum(1, 100);
  getSum(10, 50);
</script>
```

## 2.函数的使用

```js
<script>
  // 函数使用分为两步，声明函数和调用函数
  // 1. 声明函数
  // function 函数名(params) {
  //   // 函数体
  // }
  function sayHi() {
    console.log('hi~~');
  }
  // (1) function 声明函数的关键字 全部小写
  // (2) 函数式做某件事情，函数名一般是动词 sayHi
  // (3) 函数不调用，自己不执行
  // 2. 调用函数
  // 函数名()
  sayHi();
  // 调用函数后不要忘记加()
</script>
```

## 3.使用函数封装求和

```js
<script>
  // 利用函数计算1~100之间的累加和
  // 1. 声明函数
  function getSum() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
      sum += i;
    }
    console.log(sum);
  }
  // 2. 函数调用
  getSum(); 
</script>
```

## 4.带参数的函数

```js
<script>
  // 1. 函数可以重复相同的代码
  // function cook() {
  //   console.log('酸辣土豆丝');
  // }
  // cook();
  // cook();
  // // 2. 我们可以利用函数的参数实现函数重复不同的代码
  // function 函数名(形参1, 形参2...) { // 在声明函数的小括号里面是 形参 （形式上的参数）

  // }
  // 函数名(实参1, 实参2...); // 在函数调用的小括号里面是实参 （实际的参数）
  // 3. 形参和实参的执行过程
  function cook(aru) {  // 形参是接手实参的 aru = '酸辣土豆丝' 形参类似于一个变量
    console.log(aru);
  }
  cook('酸辣土豆丝');
  cook('大肘子');
  // 4. 函数的参数可以有，也可以没有 个数不限
</script>
```

## 5.函数求任意两个数的和

```js
<script>
  // 1. 利用函数求任意两个数的和
  function getSum(num1, num2) {
    console.log(num1 + num2);
  }
  getSum(1, 3);
  getSum(3, 8);
  // 2. 利用函数求任意两个数之间的和
  function getSums(star, end) {
    var sum = 0;
    for (var i = star; i <= end; i++) {
      sum += i;
    }
    console.log(sum);
  }
  getSums(1, 100);
  getSums(1, 10);
  // 3.注意点
  // (1) 多个参数之间用逗号隔开
  // (2) 形参可以看做是不用声明的变量 
</script>
```

## 6.函数形参实参个数匹配

```js
<script>
  // 函数形参实参个数匹配
  function getSum(num1, num2) {
    console.log(num1 + num2);
  }
  // 1. 如果实参的个数和形参的个数一致 则正常输出结果
  getSum(1, 2);
  // 2. 如果实参的个数多余形参的个数 会取到形参的个数
  getSum(1, 2, 3);
  // 3. 如果实参的个数小于形参的个数 多余的形参定义为undefined 最终的结果就是NaN
  // 形参可以看做是不用声明的变量 num2 是一个变量但是没有接收值 结果就是undefined
  getSum(1);  // NaN
  // 建议：我们尽量让实参的个数和形参相匹配
</script>
```

## 7.函数返回值

```js
<script>
  // 1. 函数是做某件事或者实现某种功能
  // function cook(aru) {
  //   console.log(aru);
  // }
  // cook('大肘子');
  // // 2. 函数的返回值格式
  // function 函数名() {
  //   return 需要返回的结果;
  // }
  // 函数名()
  // (1) 我们函数只是实现某种功能，最终的结果需要返回给函数的调用者 函数名() 通过return来实现的
  // (2) 只要函数遇到return 就把后面的结果 返回给函数的调用者 函数名() = return后面的结果
  function getResult() {
    return 666;
  }
  getResult();  // getResult() = 666
  console.log(getResult());

  // function cook(aru) {
  //   return aru;
  // }
  // console.log(cook('大肘子'));
  // 4. 求任意两个数的和
  function getSum(num1, num2) {
    return num1 + num2;
  }
  console.log(getSum(1, 2));
</script>
```

## 8.求两个数的最大值

```js
<script>
  // 利用函数 求两个数的最大值
  function getMax(num1, num2) {
    // if (num1 > num2) {
    //   return num1;
    // } else {
    //   return num2;
    // }
    return num1 > num2 ? num1 : num2;
  }
  console.log(getMax(1, 3));
  console.log(getMax(11, 3));
</script>
```

## 9.求数组中最大值

```js
<script>
  // 利用函数求数组[5,2,99,101,67,77]中的最大数值。
  function getArrMax(arr) {   // arr接收一个数组 
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  // getArrMax([5, 2, 99, 101, 67, 77]);   // 实参是一个数组送过去
  // 在我们实际开发中，经常用一个变量来接收 函数的返回结果
  var re = getArrMax([5, 2, 99, 101, 67, 77]);
  console.log(re);
</script>
```

## 10.函数返回值注意事项

```js
<script>
  // 函数返回值注意事项
  // 1. return 终止函数
  function getSum(num1, num2) {
    return num1 + num2;   // return 后面的代码不会执行
    alert('我不会被执行的哦！');
  }
  console.log(getSum(1, 2));
  // 2. return 只能返回一个值
  function fn(num1, num2) {
    return num1, num2;   // 返回的结果是最后一个值
  }
  console.log(fn(1, 2));

  // 3. 我们求任意两个数的加减乘除结果
  function getResult(num1, num2) {
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
  }
  var re = getResult(1, 2);
  console.log(re);

  // 4. 我们的函数如果有return 则返回return后面的值，如果函数没有 return 则返回undefined
  function fun1() {
    return 666;
  }
  console.log(fun1());  // 返回666
  function fun2() {

  }
  console.log(fun2());  // 函数返回的结果是undefined
</script>
```

## 11.arguments 使用

```js
<script>
  // arguments 的使用 只有函数才有 argument对象，而且是每个函数都内置好了这个arguments
  function fn() {
    console.log(arguments);   // 里面存储了所有传递过来的实参 arguments = [1,2,3]
    console.log(arguments.length);
    console.log(arguments[2]);
    // 我们可以按照数组的方式遍历arguments
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  fn(1, 2, 3);
  fn(1, 2, 3, 4, 5);
  // 伪数组 并不是真正意义上的数组
  // 1. 具有数组length属性
  // 2. 按照索引的方式进行存储的
  // 3. 它没有真正数组的一些方法 pop() push()等等
</script>
```

## 12.求任意个数的最大值

```js
<script>
  // 利用函数求任意个数的最大值
  function getMax() { //  arguments = [1,2,3]
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
  console.log(getMax(1, 2, 3));
  console.log(getMax(1, 2, 3, 4, 5));
  console.log(getMax(11, 2, 34, 444, 5, 100));
</script>
```

## 13.利用函数翻转任意数组

```js
<script>
  // 利用函数翻转任意数组 reverse 翻转
  function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr[newArr.length] = arr[i];
    }
    return newArr;
  }
  var arr1 = reverse([1, 3, 4, 6, 9]);
  console.log(arr1);
  var arr2 = reverse(['pink', 'bule', 'yellow', 'white']);
  console.log(arr2);
</script>
```

## 14.函数封装冒泡排序

```js
<sCript>
  // 利用函数冒泡排序 sort 排序
  function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  var arr1 = sort([1, 4, 2, 9]);
  console.log(arr1);
  var arr2 = sort([11, 7, 22, 999]);
  console.log(arr2);
</sCript>
```

## 15.判断闰年

```js
<script>
  // 利用函数判断闰年
  /* function yearJudge(year) {
    var year = prompt('请输入年份');
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      alert('您输入的年份是闰年');
    } else {
      alert('您输入的年份是平年');
    }
  }
  yearJudge(); */
  function isRunYear(year) {
    var flag = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      flag = true;
    }
    return flag;
  }
  console.log(isRunYear(2000));
  console.log(isRunYear(1999));
</script>
```

## 16.函数调用函数

```js
<script>
  // 一个函数调用另一个函数
  // function fn1() {
  //   console.log(11);
  //   fn2();
  // }
  // function fn2() {
  //   console.log(22);
  // }
  // fn1();
  function fn1() {
    console.log(111);
    fn2();
    console.log('fn1');
  }
  function fn2() {
    console.log(222);
    console.log('fn2');
  }
  fn1();
</script>
```

## 17.求年份2月份天数

```js
<script>
  // 用户输入年份，输出当前年份2月份的天数
  // function day(year) {
  //   var year = prompt('请输入年份');
  //   if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  //     alert(year + '年2月份的天数是29天');
  //   } else {
  //     alert(year + '年2月份的天数是28天');
  //   }
  // }
  // day();
  function day(year) {
    var year = prompt('请您输入年份');
    if (isRunYear(year)) {
      alert(year + '年2月份的天数是29天');
    } else {
      alert(year + '年2月份的天数是28天');
    }
  }
  day();
  function isRunYear(year) {
    var flag = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      flag = true;
    }
    return flag;
  }
</script>
```

## 18.函数声明的两种方式

```js
<script>
  // 函数的两种声明方式
  // 1. 利用函数关键字自定义函数(命名函数)
  function fn() {

  }
  fn();
  // 2. 函数表达式(匿名函数)
  // var 变量名 = function(){};
  var fun = function (aru) {
    console.log('我是函数表达式');
    console.log(aru);
  }
  fun('pink老师');
    // (1) fun 是变量名 不是函数
    // (2) 函数表达式声明方式跟声明变量差不多，只不过变量里面存的是指 而 函数表达式里面存的是函数
    // (3) 函数表达式也可以用来进行传递参数
</script>
```