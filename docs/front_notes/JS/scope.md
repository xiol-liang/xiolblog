# 3.作用域(scope)

## 1.js 作用域

```js
<script>
  // 1. JavaScript 作用域：就是代码名字（变量）在某个范围内起作用和效果 目的是为了提高程序的可靠性更重要的是减少命名冲突
  // 2. js 的作用域（es6）之前：全局作用域 局部作用域
  // 3. 全局作用域：整个script标签 或者是一个单独的js文件
  var num = 10;
  var num = 30;
  console.log(num);
  // 4. 局部作用域（函数作用域）在函数内部就是局部作用域 这个代码的名字只在函数内部起效果和作用
  function fn() {
    // 局部作用域
    var num = 20;
    console.log(num);
  }
  fn();
</script>
```

## 2.变量的作用域

```js
<script>
  // 变量的作用域：根据作用域的不同我们变量分为全局变量和局部变量
  // 1. 全局变量：在全局作用域下的变量，在全局下都可以使用
  // 注意：如果在函数内部，没有声明直接赋值的变量也属于全局变量
  var num = 10;   // num 是一个全局变量
  console.log(num);
  function fn() {
    console.log(num);
  }
  fn();

  // console.log(aru);
  // 2. 局部变量：在局部作用域下的变量，或者在函数内部的变量就是局部变量
  // 注意：函数的形参也可以看成是局部变量
  function fun() {
    var num1 = 10; // num1就是局部变量，只能在函数内部使用
    num2 = 20;
  }
  fun();
  // console.log(num1);
  // console.log(num2);
  // 3. 从执行效率来看全局变量和局部变量
  // (1) 全局变量只有浏览器关闭的时候才会销毁，比较占内存
  // (2) 局部变量，当我们程序执行完毕就会销毁，比较节约内存资源
</script>
```

## 3.js没有块级作用域

```js
<script>
  // js中没有块级作用域 js的作用域：全局作用域  局部作用域  现阶段我们js没有块级作用域
  // 我们js 也是在es6 的时候新增的块级作用域
  // 块级作用域 {}  if {}   for{}
  // java
  // if (xx) {
  //         int num = 10;
  // }
  // 外面的是不能调用num的
  if (3 < 5) {
    var num = 10;
  }
  console.log(num);
</script>
```

## 4.作用域链

```js
<script>
  // 作用域：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取哪个值，这种结构我们称为作用域链 就近原则
  var num = 10;
  function fn() {   // 外部函数
    var num = 20;
    function fun() {  // 内部函数
      console.log(num);
    }
    fun();
  }
  fn();
  // 案例1：结果是几？
  function f1() {
    var num = 123;
    function f2() {
      var num = 0;
      console.log(num);   // 站在目标出发，一层一层的往外找
    }
    f2();
  }
  var num = 456;
  f1();
  // 案例2：结果是几？
  var a = 1;
  var b = '22';
  function fn1() {
    var a = 2;
    // var b = '22';
    fn2();
    function fn2() {
      var a = 3;
      fn3();
      function fn3() {
        var a = 4;
        console.log(a);   // a的值？
        console.log(b);   // b的值？  undefined 因为当前作用域 变量提升 只声明不赋值
        var b = '22';     // 如果没有这一句 b 的值就是22 
      }
    }
  }
  fn1();
</script>
```