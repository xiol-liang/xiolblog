# 4.预解析

## 1.预解析、代码执行

```js
<script>
  // 1问
  // console.log(num); // 报错
  // 2问
  console.log(num);   // undefined 坑1
  var num = 10;
  // 相当于执行了以下代码
  // var num;
  // console.log(num);
  // num = 10;
  // 3问
  fn();
  function fn() {
    console.log(11);
  }
  // 4问
  fun();  // 报错 坑2
  var fun = function () {
    console.log(22);
  }
  // 函数表达式 调用必须写在函数表达式的下面
  // 相当于执行了以下代码
  // var fun;
  // fun();
  // fun = function () {
  //   console.log(22);
  // }


  // 1.我们js 引擎运行js代码分为两步：预解析    代码执行
  // (1). 预解析：js引擎会把js里面所有的 var 还有 function 提升到当前作用域的最前面
  // (2). 代码执行：按照代码书写的顺序从上往下执行
  // 2.预解析分为 变量预解析（变量提升）和 函数预解析（函数提升）
  // (1). 变量提升：就是把所有的变量声明提升到当前作用域的最前面  不提升赋值操作
  // (2). 函数提升：就是把所有的函数声明提升到当前作用域的最前面  不调用函数
</script>
```

## 2.预解析案例

```js
<script>
  // 预解析案例
  // 案例1
  var num = 10;
  fun();

  function fun() {
    console.log(num);
    var num = 20;
  }

  // 经过预解析 相当于执行了以下代码
  // var num;    // 变量提升

  // function fun() {    // 函数提升
  //   var num;  // 函数内部作用域 变量提升


  //   console.log(num);
  //   num = 20;
  // }
  // num = 10;
  // fun();

  // 案例2
  var num = 10;
  function fn() {
    console.log(num);
    var num = 20;
    console.log(num);
  }
  fn();

  // 经过预解析 相当于执行了以下代码
  // var num;
  // function fn() {
  //   var num;
  //   console.log(num);   // undefined
  //   num = 20;
  //   console.log(num);   // 20
  // }
  // num = 10;
  // fn();

  // 案例3
  var a = 18;
  f1();

  function f1() {
    var b = 9;
    console.log(a);   // undefined
    console.log(b);   // 9
    var a = '123';
  }

  // 经过预解析 相当于执行了已下代码
  // var a;
  // function f1() {
  //   var b;
  //   var a;
  //   b = 9;
  //   console.log(a);   // undefined
  //   console.log(b);   // 9
  //   a = '123';
  // }
  // a = 18;
  // f1();

  // 案例4
  f1();
  console.log(c);
  console.log(b);
  console.log(a);

  function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
  }

  // 经过预解析 相当于执行了以下代码
  function f1() {
    var a;
    a = b = c = 9;
    // 相当于 var a = 9; b = 9; c = 9; b 和 c 直接赋值，没有 var 声明 当全局变量看
    // 集体声明 var a = 9,b = 9,c = 9; 和上面一句不一样
    console.log(a);
    console.log(b);
    console.log(c);
  }
  f1();
  console.log(c);
  console.log(b);
  console.log(a);
</script>
```