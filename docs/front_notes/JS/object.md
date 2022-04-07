# 5.object

## 1.对象介绍

### 01.创建对象

```js
<script>
  // 利用对象字面量创建对象{}
  // var obj = {};  // 创建了一个空的对象
  var obj = {
    uname: '张三疯',
    age: 18,
    sex: '男',
    sayHi: function () {
      console.log('hi~');
    }
  }
  // (1) 里面的属性或者方法我们采取键值对的形式：键 属性名 : 值 属性值
  // (2) 多个属性或者方法中间用逗号隔开
  // (3) 方法冒号后面跟的是一个匿名函数
  // 2. 使用对象
  // (1) 调用对象的属性 我们采取 对象名.属性名    .我们理解为 的
  console.log(obj.uname);
  // (2) 调用属性还有一种方法 对象名['属性名']
  console.log(obj['age']);
  // (3) 调用对象的方法sayHi    对象名.方法名() 千万别忘记添加小括号
  obj.sayHi();
</script>
```

### 02.变量、属性、函数、方法的区别

```js
<script>
  // 变量、属性、函数、方法的区别
  // 1. 变量和属性的相同点：他们都是用来存储数据的
  var num = 10;
  var obj = {
    age: 18,
    fn: function () {

    }
  }
  function fn() {

  }
  console.log(obj.age);
  // console.log(age);

  // 变量：单独声明并赋值，使用的时候直接变量名  单独存在
  // 属性：在对象里面的不需要声明的，使用的时候必须是：对象名.属性名
  // 2. 函数和方法的相同点：都是实现某种功能 做某件事
  // 函数：是单独声明，并且调用的：函数名() 单独存在的
  // 方法：在对象里面 调用的时候：对象名.方法名()
</script>
```

### 03.new Object 创建对象

```js
<script>
  // 利用 new Object 创建对象
  var obj = new Object();   //创建了一个空的对象
  obj.uname = '张三疯';
  obj.age = '18';
  obj.sex = '男';
  obj.sayHi = function () {
    console.log('hi~');
  }
  // (1) 我们利用 等号 = 赋值的方法 添加对象的属性和方法
  // (2) 每个属性和方法之间用 分号结束
  console.log(obj.uname);
  console.log(obj['sex']);
  obj.sayHi();
</script>
```

## 2.构造函数

### 01.为什么需要构造函数

```js
<script>
  // 我们为什么需要构造函数
  // 就是因为我们前面两种创建对象的方式一次只能创建一个对象
  var ldh = {
    uname: '刘德华',
    age: '55',
    sing: function () {
      console.log('冰雨');
    }
  }
  var zxy = {
    uname: '张学友',
    age: '58',
    sing: function () {
      console.log('李香兰');
    }
  }
  // 因为我们一次创建一个对象，里面的很多的属性和方法是大量相同的我们只能复制
  // 因此我们可以利用函数的方法 重复这些相同的代码 我们就把这个函数称为 构造函数
  // 又因为这个函数不一样，里面封装的不是普通代码，而是 对象
  // 构造函数：就是把我们对象里面一些相同的属性和方法抽象出阿莱封装到函数里面
</script>
```

### 02.利用构造函数创建对象

```js
<script>
  // 利用构造函数创建对象
  // 我们需要创建四大天王的对象   相同的属性：名字 年龄 性别    相同的方法：唱歌
  // 构造函数的语法格式
  // function 构造函数名(属性值){
  //     this.属性 = 值;
  //     this.方法 = function(){}
  // }
  // new 构造函数名();
  function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
      console.log(sang);
    }
  }
  var ldh = new Srar('刘德华', '18', '男');   // 调用构造函数返回的是一个对象
  // console.log(typeof ldh);   // object
  console.log(ldh.name);
  console.log(ldh['sex']);
  ldh.sing('冰雨');
  var zxy = new Star('张学友', '19', '男')
  console.log(zxy.name);
  console.log(zxy.age);
  zxy.sing('李香兰');


  // 1. 构造函数名字首字母要大写
  // 2. 我们构造函数不需要return 就可以返回结果
  // 3. 我们调用构造函数 必须使用 new
  // 4. 我们只要 new Star() 调用函数就创建了一个对象 ldh {}
  // 5. 我们的属性和方法前面必须添加 this
</script>
```

### 03.构造函数和对象的区别

```js
<script>
  // 构造函数和对象
  // 1. 构造函数 明星 泛指某一大类 它类似于 java 里面的 类(class)
  function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
      console.log(sang);
    }
  }
  // 2. 对象 特指 是一个具体的事物 刘德华 == {name: '刘德华', age: '18', sex: '男', sing: ƒ}
  var ldh = new Star('刘德华', '18', '男');   // 调用构造函数返回的是一个对象
  console.log(ldh);
  // 3. 我们利用构造函数创建对象的过程我们也称为对象的实例化
</script>
```

## 3.new关键字执行过程

```js
<script>
  // new关键字执行过程
  // 1. new 构造函数可以在内存中创建了一个空的对象
  // 2. this 就会指向刚才创建的空对象
  // 3. 执行构造函数里面的代码 给这个空的对象添加属性和方法
  // 4. 返回这个对象（所以构造函数不需要return）
  function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
      console.log(sang);
    }
  }
  var ldh = new Star('刘德华', '18', '男');
</script>
```

## 4.遍历对象

```js
<script>
  // 遍历对象
  var obj = {
    name: '熊亮',
    age: 18,
    sex: '男',
    fn: function () { }
  }
  // console.log(obj.name);
  // console.log(obj.age);
  // console.log(obj.sex);
  // for in 遍历我们的对象
  // for (变量 in 对象) {

  //   }
  for (k in obj) {
    console.log(k);   // k 变量 输出 得到的是 属性名
    console.log(obj[k]);  // obj[k] 得到的是 属性值
  }
  // 我们使用 for in 里面的变量 我们喜欢写 k 或者 key
</script>
```

## 5.对象小结作业

```js
<script>
  // 1. 创建一个电脑对象
  function Computer(color, weight, brand) {
    this.color = color;
    this.weight = weight;
    this.brand = brand;
    this.doing = function () {
      console.log('watch TV');
      console.log('listen to music');
      console.log('play games');
      console.log('type the code');
    }
  }
  var computer1 = new Computer('black', '1kg', '戴尔');
  console.log(computer1);
  // 2. 函数实现反转任意数组
  function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr[newArr.length] = arr[i];
    }
    return newArr;
  }
  var result = reverse([1, 2, 3, 4, 5]);
  console.log(result);
  // 3. 函数实现数字数组的排序
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
  var arr1 = sort([45, 2, 77, 15, 9]);
  console.log(arr1);
</script>
```

## 6.Math 对象

### 01.Math对象最大值

```js
<script>
  // Math数学对象 不是一个构造函数，所以我们不需啊哟new来调用，而是直接使用里面的属性和方法即可
  console.log(Math.PI);   // 一个属性 圆周率
  console.log(Math.max(1, 99, 3));   // 99
  console.log(Math.max(-1, -10));   // -1
  console.log(Math.max(1, 99, 'pink老师'));   // NaN
  console.log(Math.max());    // -Infinity 
</script>
```

### 02.封装自己的数学对象

```js
<script>
  // 利用对象封装自己的数学对象 里面有 PI 最大值和最小值
  var maMath = {
    PI: 3.141592653,
    max: function () {
      var max = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
          max = arguments[i];
        }
      }
      return max;
    },
    max: function () {
      var min = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
          min = arguments[i];
        }
      }
      return min;
    }
  }
  console.log(myMath.PI);
  console.log(myMath.max(1, 5, 99));
  console.log(maMath.min(1, 5, 99));
</script>
```

### 03.Math绝对值和三个取整方法

```js
<script>
  // 1. 绝对值方法
  console.log(Math.abs(1));   // 1
  console.log(Math.abs(-1));   // 1
  console.log(Math.abs(-'1'));   // 1 隐式转换 会把字符串型 -1 转换为数字型
  console.log(Math.abs(1));   // NaN

  // 2. 三个取整方法
  // (1) Math.floor() 地板 向下取整 往最小了取值
  console.log(Math.floor(1.1));   // 1
  console.log(Math.floor(1.9));   // 1
  // (2) Math.ceil() ceil 天花板 向上取整 往最大了取值
  console.log(Math.ceil(1.1));   // 2
  console.log(Math.ceil(1.9));   // 2
  // (3) Math.round() 四舍五入 其他数字都是四舍五入，但是 .5 特殊 它往大了取 特别注意负数
  console.log(Math.round(1.1));   // 1
  console.log(Math.round(1.5));   // 2
  console.log(Math.round(1.9));   // 2
  console.log(Math.round(-1.1));   // -1
  console.log(Math.round(-1.5));   // -1
</script>
```

### 04.Math 随机数方法

```js
<script>
  // 1. Math 对象随机数方法  random()返回一个随机的小数 0 =< x <1
  // 2. 这个方法里面不跟参数
  // 3.代码验证
  console.log(Math.random());
  // 4. 我们想要得到两个数之间的随机整数 并且包含 这两个整数
  // Math.floor(Math.random() * (max - min + 1)) + min;
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandom(1, 10));
  // 5. 随机点名
  var arr = ['张三', '张三丰', '张三疯子', '李四', '李思思'];
  // console.log(arr[0]);
  console.log(arr[getRandom(0, 4)]);
  console.log(arr[getRandom(0, arr.length - 1)]);
</script>
```

### 05.猜数字游戏

```js
<script>
  // 猜数字游戏
  // 1. 随机生成一个1~10 的整数 我们需要用到 Math.random() 方法
  // 2. 需要一直猜到正确为止，所以需要一直循环
  // 3. while 循环更简单
  // 4. 核心算法：使用 if else if 多分支语句来判断大于、小于、等于。
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var random = getRandom(1, 10);
  while (true) {  // 死循环 所以后面要有break
    var num = prompt('你来猜？输入1~10之间的一个数字');
    if (num > random) {
      alert('你猜大了');
    } else if (num < random) {
      alert('你猜小了');
    } else {
      alert('你好帅哦，猜对了');
      break;
    }
  }
  // 要求用户猜 1~50 之间的一个数字 但是只有10 次机会
  var random = getRandom(1, 50);
  for (var i = 0; i < 11; i++) {
    if (i == 10) {
      alert('抱歉，你的十次机会已用完');
      break;
    }
    var num = prompt('你来猜？输入1~50之间的一个数字，有10次机会');
    if (num < random) {
      alert('你猜小了');
    } else if (num > random) {
      alert('你猜大了');
    } else {
      alert('你好帅哦，猜对了');
      break;
    }
  }
</script>
```

## 7.Date 对象

### 01.Date对象的使用

```js
<script>
  // Date() 日期对象：是一个构造函数，必须使用new 来调用创建我们的日期对象
  var arr = new Array();  // 创建一个数组对象
  var obj = new Object();   // 创建一个对象实例
  // 1. 使用Date 如果没有参数，返回当前系统的当前时间
  var date = new Date();
  console.log(date);
  // 2. 参数常用的写法：数字型 2022,3,10  或者是  字符串型 '2022-3-10 8:8:8'
  var date1 = new Date(2022, 3, 10);
  console.log(date1);  // 返回的是 11月 不是10月
  var date2 = new Date('2022-3-10 8:8:8');
  console.log(date2);
</script>
```

### 02.日期格式化

```js
<script>
  // 格式化日期 年月日
  var date = new Date();
  console.log(date.getFullYear());  // 返回当前日期的年 2022
  console.log(date.getMonth() + 1);   // 月份 返回的月份小1个月 记得月份+1
  console.log(date.getDate());  // 返回的是 几号
  console.log(date.getDay());   // 3 周一返回的是1 周六返回的是 6 但是周日返回的是
  // 我们写一个2022年3月10日 星期四
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dates = date.getDate();
  var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期五', '星期六'];
  var day = date.getDay();
  console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
</script>
```

### 03.格式化时分秒

```js
<script>
  // 格式化日期时分秒
  var date = new Date();
  console.log(date.getHours());   // 时
  console.log(date.getMinutes());   // 分
  console.log(date.getSeconds());   // 秒
  // 要求封装一个函数返回当前的时分秒 格式 08:08:08
  function getTime() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
  }
  console.log(getTime());
</script>
```

### 04.时间戳

```js
<script>
  // 获得Date总的毫秒数（时间戳）   不是当前时间的毫秒数  而是距离1970年1月1日过了多少毫秒数
  // 1. 通过 valueOf()  getTime()
  var date = new Date();
  console.log(date.valueOf());  // 就是我们现在时间距离1970.1.1总的毫秒数
  console.log(date.getTime());
  // 2. 简单的写法(最常用的写法)
  var date1 = +new Date();  // +new Date() 返回的是总的毫秒数
  console.log(date1);
  // 3. H5新增的 获得总的毫秒数
  console.log(Date.now());
</script>
```

### 05.倒计时

```js
<script>
  // 倒计时效果
  // 1. 核心算法∶输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒
  //    相减，比如05分减去25分，结果会是负数的。
  // 2. 用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。
  // 3. 把剩余时间总的毫秒数转换为天、时、分、秒（时间戳转换为时分秒)
  //   转换公式如下:
  // d = parselnt(总秒数 / 60 / 60 / 24); // 计算天数
  // h = parselnt(总秒数/60 / 60 % 24);   // 计算小时
  // m = parseInt(总秒数 / 60 % 60);      // 计算分数
  // s = parselnt(总秒数 % 60);           // 计算当前秒数
  function countDown(time) {
    var nowTime = +new Date();// 返回的是当前时间总的毫秒数
    var inputTime = +new Date(time);//返回的是用户输入时间总的毫秒数
    var times = (inputTime - nowTime) / 1000;// times是剩余时间总的秒数
    var d = parseInt(times / 60 / 60 / 24);//天
    d = d < 10 ? '0' + d : d;
    var h = parseInt(times / 60 / 60 % 24);//时
    h = h < 10 ? '0' + h : h;
    var m = parseInt(times / 60 % 60);//分
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60);//当前的秒
    s = s < 10 ? '0' + s : s;
    return d + '天' + h + '时' + m + '分' + s + '秒';
  }
  console.log(countDown('2022-3-11 18:00:00'));
  var date = new Date();
  console.log(date);
</script>
```