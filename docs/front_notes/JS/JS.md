# 1.JavaScript 基础

>推荐书籍：
> - 《JavaScript权威指南(第六版)》
> - 《JavaScript高级程序设计（第3版）》
> - 《学习JavaScript数据结构与算法第3版》
>
>推荐视频：[黑马前端JavaScript基础语法](https://www.bilibili.com/video/BV1Sy4y1C7ha?spm_id_from=333.788.top_right_bar_window_custom_collection.content.click)

## 1.变量、数据类型

### 01.弹出用户名

```js
<script>
    //1.用户输入姓名，存储到一个myname变量里面。
    var myname = prompt('请输入您的名字');
    //输出这个用户名
    alert(myname);
</script>
```

### 02.变量语法扩展

```js
<script>
    //1.更新变量
    var myname = 'pink老师';
    console.log(myname);
    myname = '迪丽热巴';
    console.log(myname);
    //2.声明多个变量
    // var age = 18;
    // var address = '火影村';
    // var gz = 2000;
    var age = 18,
        address = '火影村',
        gz = 2000;
    //3.声明变量的特殊情况
    //3.1只声明不赋值 结果是
    var sex;
    console.log(sex);//undefined
    //3.2不声明 不赋值 直接使用某个变量会报错
</script>
```

### 03.交换变量

```js
<script>
        var temp;
        apple1 = '红苹果';
        apple2 = '青苹果';
        console.log(apple1, apple2);
        temp = apple1;
        apple1 = apple2;
        apple2 = temp;
        console.log('交换后：');
        console.log(apple1, apple2);
</script>
```

### 04.显示年龄

```js
<script>
  // 弹出一个输入框(prompt),让用户输入年龄(用户输入)
  // 把用户输入的值用变量保存起来，把刚才输入的年龄与所要输出的字符串拼接（程序内部处理）
  // 使用alert语句弹出提示框（输出结果）
  var age = prompt('请输入您的年龄');
  var str = '您今年已经' + age + '岁了';
  alert(str);
</script>
```

### 05.计算年龄

```js
<script>
  // 弹出一个输入框（prompt），让用户输入年份（用户输入）
  // 把用户输入的值用变量保存起来，然后用今年的年份减去变量值，结果就是现在的年龄（程序内部处理）
  // 弹出警示框（alert），把计算的结果输出（输出结果）
  var year = prompt('请输入您的出生年份');
  var age = 2022 - year; // year取过来的是字符串类型 但是这里用的减法 有隐式转换
  alert('您今年已经' + age + '岁了')
</script>
```

### 06.简单加法器

```js
<script>
  // 先弹出第一个输入框，提示用户输入第一个值 保存起来
  // 再弹出第二个框，提示用户输入第二个值 保存起来
  // 把这两个值相加，并将结果赋值给新的变量（注意数据类型转换）
  // 弹出提示框（alert），把计算的结果输出（输出结果）
  var num1 = prompt('请您输入第一个值：');
  var num2 = prompt('请您输入第二个值：');
  var result = parseFloat(num1) + parseFloat(num2);
  alert('您的结果是：' + result);
</script>
```

### 07.数据类型

```js
<script>
  var name = prompt('请输入您的姓名：');
  var age = prompt('请输入您的年龄：');
  var sex = prompt('请输入您的性别：');
  alert('您的姓名是：' + name + '\n' + '您的年龄是：' + age + '\n' + '您的性别是：' + sex);
</script>
```

### 08.递增运算符练习

```js
<script>
  var a = 10;
  ++a;  // a = 11   ++a = 11
  var b = ++a + 2;  // a = 12   ++a = 12 
  console.log(b);   // b = 14

  var c = 10;
  c++;  //  c++ = 11    c = 11
  var d = c++ + 2;    // c++ = 11     c = 12 
  console.log(d);    // d = 13

  var e = 10;
  var f = e++ + ++e;    // 1. e++ = 10   e = 11  2. e = 12  ++e = 12
  console.log(f);     // f = 22
</script>
```

## 2.语句

### 01.if 语句

```js
<script>
  // 弹出prompt输入框，用户输入年龄，程序把这个值取过来保存到变量中
  // 使用 if 语句来判断年龄，结果年龄大于18 就执行if大括号里面的输出语句
  var age = prompt('请输入您的年龄：');
  if (age >= 18) {
    alert('我想带你去网吧偷耳机');
  }
</script>
```

### 02.if	else	语句

```js
<script>
  // 1. 算法：能被4整除且不能整除100的为闰年（如2004年就是闰年，1901年不是闰年）或者能被400整除的就是闰年
  // 2. 弹出prompt输入框，让用户输入年份，把这个值取过来保存到变量中
  // 3. 使用if语句来判断是否是闰年，如果是闰年，就执行if大括号里面的输出语句，否则就执行else里面的输出语句
  // 4. 一定要注意里面的且&& 还有或者||的写法，同时注意判断整除的方法是取余为0
  var year = prompt('请您输入年份：');
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert('您输入的年份是闰年');
  } else {
    alert('您输入的年份是平年');
  }
</script>
```

### 03.if 	else if	多分支语句

```js
<script>
  // 伪代码     按照从小到大判断的思路
  // 弹出prompt输入框，让用户输入分数，把这个值取过来保存到变量中
  // 使用多分支 if else if语句来分别判断输出不同的值
  var score = prompt('请您输入分数：');
  if (score >= 90) {
    alert('宝贝，你是我的骄傲！');
  } else if (score >= 80) {
    alert('宝贝，你已经很出色了');
  } else if (score >= 70) {
    alert('你要继续加油咯');
  } else if (score >= 60) {
    alert('孩子，你很危险');
  } else {
    alert('熊孩子，我不想和你说话，我只想用鞭子抽你');
  }
</script>
```

### 04.三元表达式

```js
<script>
  // 1. 由三元运算符组成的式子我们称为三元表达式
  // 2. ++num   3+5   ? :
  // 3. 语法结构
  // 条件表达式 ? 表达式1 : 表达式2
  // 4. 执行思路
  // 如果条件表达式为真，则返回表达式1的值，如果条件表达式结果为假，则返回 表达式2的值
  // 代码体验
  var num = 10;
  var result = num > 5 ? '是的' : '不是的'; // 我们知道表达式是有返回值得
  console.log(result);
  // if (num > 5) {
  //   result = '是的';
  // } else {
  //   result = '不是的';
  // }
  // console.log(result);
</script>
```

### 05.数字补0

```js
<script>
  // 用户输入0~59之间的一个数字
  // 如果数字小于10，则在这个数字前面补0，(加0) 否则 不做操作
  // 用一个变量接受这个返回值，输出
  var time = prompt('请输入一个0 ~ 59之间的一个数字');
  // 三元表达式    表达式 ? 表达式1 : 表达式2
  var result = time < 10 ? '0' + time : time;  // 把返回值赋值给一个变量
  alert(result);
</script>
```

### 06.switch	case 语句

```js
<script>
  // 弹出prompt输入框，让用户输入水果名称，把这个值取过来保存到变量中。
  // 将这个变量作为 switch 括号里面的表达式。
  // case 后面的值写几个不同的水果名称，注意一定要加引号，因为必须是全等匹配。
  // 弹出不同价格即可，注意每个 case 之后加上 break ，以便退出 switch 语句。
  // 将 default 设置为没有此水果。
  var fruit = prompt('请输入查询的水果：');
  switch (fruit) {
    case '苹果':
      alert('苹果的价格是3.5/斤');
      break;
    case '榴莲':
      alert('榴莲的价格是35/斤');
      break;
    default:
      alert('没有此水果');
      break;
  }
</script>
```

### 07.for 循环

```js
<script>
  // 1. 求1-100之间所有数的平均值 需要一个 sum 和的变量 还需要一个平均值 average 变量
  var sum = 0;
  var average = 0;
  for (var i = 1; i <= 100; i++) {
    // sum = sum + i;
    sum += i;
  }
  average = sum / 100;
  console.log(average);
  // 2. 求1-100之间所有偶数和奇数的和   我们需要一个偶数的和变量 even 还需要一个奇数 odd
  var even = 0;
  var odd = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      even += i;
    } else {
      odd += i;
    }
  }
  console.log('1~100之间所有的偶数和是：' + even);
  console.log('1~100之间所有的奇数和是：' + odd);

  // 3. 求1-100之间所有能被3整除的数字的和 
  var result = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      result += i;
    }
  }
  console.log('1~100之间能够被3整除的数的和是：' + result);
</script>
```

### 08.求学生成绩

```js
<sCript>
  // 弹出输入框输入总的班级人数(num)
  // 依次输入学生的成绩(保存起来score)，此时我们需要用到
  // for循环，弹出的次数更班级总人数有关系，条件表达式i <= num
  // 进行业务处理：计算成绩。先求总成绩(sum)，之后求平均成绩(average)
  // 弹出结果
  var num = prompt('请输入班级的总人数：');
  var sum = 0; // 求和的变量
  var average = 0; // 求平均值的变量 
  for (var i = 1; i <= num; i++) {
    var score = prompt('请输入第' + i + '个学生成绩');
    // 因为从prompt取过来的数据是字符串类型的需要转换为数字型
    sum = sum + parseFloat(score);
  }
  average = sum / num;
  alert('班级的总成绩是：' + sum);
  alert('班级的平均成绩是：' + average);
</script>
```

### 09.一行打印五个星星

```js
<script>
  // 一行打印五个星星
  // console.log('★★★★★');
  // for (var i = 1;i <= 5; i++){
  //   console.log('★')；
  // }
  // var str = '';
  // for (var i = 1; i <= 5; i++) {
  //   str += '★';
  // }
  // console.log(str);
  var num = prompt('请输入星星的个数');
  var str = '';
  for (var i = 1; i <= num; i++) {
    str += '★';
  }
  console.log(str);
</script>
```

### 10.打印五行五列星星

```js
<script>
  // 打印五行五列星星
  var str = '';
  for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
      str += '★';
    }
    str += '\n';
  }
  console.log(str);
</script>
```

### 11.打印n行n列星星

```js
<script>
  // 打印n行n列星星
  var rows = prompt('请输入行数：');
  var cols = prompt('请输入列数：');
  var str = '';
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
      str += '★';
    }
    str += '\n';
  }
  console.log(str);
</script>
```

### 12.打印倒三角星星

```js
<script>
  var str = '';
  for (i = 1; i <= 10; i++) {
    for (j = i; j <= 10; j++) {
      str += '★';
    }
    str += '\n';
  }
  console.log(str);
</script>
```

### 13.打印正三角星星

```js
<script>
  var str = '';
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= i; j++) {
      str += '★';
    }
    str += '\n';
  }
  console.log(str);
</script>
```

### 14.打印九九乘法表

```js
<script>
  // 1. 一共有9行，但是每行的个数不一样，因此需要用到双重for循环
  // 2. 外层的for循环控制行数i，循环9次，可以打印9行
  // 3. 内层的for循环控制每行公式j
  // 4. 核心算法：每一行公式的个数正好和行数一致，j<=i;
  // 5. 每行打印完毕， 都需要重新换一行
  var str = '';
  for (var i = 1; i <= 9; i++) {  // 外层循环控制行数
    for (var j = 1; j <= i; j++) {  // 里层循环控制每一行的个数
      str += j + '×' + i + '=' + i * j + '\t';
    }
    str += '\n';
  }
  console.log(str);
</script>
```

### 15.while 循环

```js
<script>
  // while循环案例
  // 1. 打印人的一生，从1岁到100岁
  var i = 1;
  while (i <= 100) {
    console.log('这个人今年' + i + '岁了');
    i++;
  }
  // 2. 计算1~100之间所有整数的和
  var sum = 0;
  var j = 1;
  while (j <= 100) {
    sum += j;
    j++;
  }
  console.log(sum);
  // 3. 弹出一个提示框，你爱我吗？  如果输入我爱你，就提示结束，否则，就一直询问。
  // 分析：
  //    1. 弹出输入框，要求用户输入。
  //    2. 判断条件比较复杂我们使用while循环。
  //    3. while循环语句中的条件表达式只要输入的不是我爱你，就一直循环。
  var str = prompt('你爱我吗？')
  while (str !== '我爱你' && str !== '爱你' && str !== '爱') {
    str = prompt('你爱我吗？')
  }
  alert('我也爱你啊')
</script>
```

### 16.do-while 循环

```js
<script>
  // while循环案例
  // 1. 打印人的一生，从1岁到100岁
  var i = 1;
  do {
    console.log('这个人今年' + i + '岁了');
    i++;
  } while (i <= 100)
  // 2. 计算1~100之间所有整数的和
  var sum = 0;
  var j = 1;
  do {
    sum += j;
    j++;
  } while (j <= 100)
  console.log(sum);
  // 弹出一个提示框， 你爱我吗？  如果输入我爱你，就提示结束，否则，一直询问。
  do {
    var message = prompt('你爱我吗？');
  } while (message !== '我爱你' && message !== '爱你' && message !== '爱')
  alert('我也爱你啊');
</script>
```

### 17.continue 关键字

```js
<script>
  // continue 关键字  退出本次循环（当前次的循环）    继续执行剩余次数循环
  for (var i = 1; i <= 5; i++) {
    if (i == 3) {
      continue; // 只要遇见continue 就退出本次循环 直接跳到 i++
    }
    console.log('我正在吃第' + i + '个包子');
  }
  // 求1~100之间，除了能被7整除之外的整数和
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
      continue;
    }
    sum += i;
  }
  console.log(sum);
</script>
```

### 18.break 关键字

```js
<script>
  // break 关键字     退出整个循环
  for (var i = 1; i <= 5; i++) {
    if (i == 3) {
      break;
    }
    console.log('我正在吃第' + i + '个包子');
  }
</script>
```

## 3.数组

### 01.访问数组元素

```js
<script>
  // 1. 数组(Array)：就是一组数据的集合，存储在单个变量下的优雅方式
  // 2. 利用new创建数组
  var arr = new Array();// 创建了一个空的数组
  // 3. 利用数组字面量创建的数组 []
  var arr = []; // 创建了一个空的数组
  var arr1 = [1, 2, 'pink老师', true];
  // 4. 我们数组里面的数据一定用逗号分隔
  // 5. 数组里面的数据 比如1,2. 我们称为数组元素
  // 6. 获取数组元素 格式 数组名[索引号] 索引号从0开始的
  console.log(arr1);
  console.log(arr1[2]);   // pink老师
  console.log(arr1[3]);   // true
  var arr2 = ['迪丽热巴', '古力娜扎', '佟丽娅呀'];
  console.log(arr2[0]);
  console.log(arr2[1]);
  console.log(arr2[2]);
  console.log(arr2[3]);   // 因为没有这个数组元素 所以输出的结果是 undefined
</script>
```

### 02.遍历数组

```js
<script>
  // 遍历数组：就是把数组里面的元素从头到尾访问一次
  var arr = ['red', 'green', 'blue'];
  for (var i = 0; i < 3; i++) {
    console.log(arr[i]);
  }
  // 1. 因为我们数组的索引号从0开始，所以i必须从0开始 i < 3
  // 2. 输出的时候arr[i] i计数器当索引号来用
</script>
```

### 03.数组长度

```js
<script>
  // 数组长度 数组名.length
  var arr = ['关羽', '张飞', '马超', '赵云', '黄忠', '刘备', '姜维', 'pink老师'];
  for (var i = 0; i < 7; i++) {
    console.log(arr[i]);
  }
  console.log(arr.length);
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // 1. 数组的长度是元素个数  不要跟索引号混淆
  // 2. arr.length 动态检测数组元素的个数
</script>
```

### 04.数组元素的和及平均值

```js
<script>
  // 1. 求数组[2,6,1,7,4]里面所有元素的和及平均值。
  // (1)声明一个求和变量sum。
  // (2)遍历这个数组，把里面每个数组元素加到sum里面。
  // (3)用求和变量sum 除以数组的长度就可以得到数组的平均值。
  var arr = [2, 6, 1, 7, 4];
  var sum = 0;
  var average = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];  // 我们加的是数组元素 arr[i]，不是计数器i
  }
  average = sum / arr.length;
  console.log(sum, average);   // 想要输出多个变量，用逗号分隔即可
  console.log(average);
</script>
```

### 05.求数组最大值

```js
<script>
  // 求数组[2,6,1,77,52,7]中的最大值
  // 声明一个保存最大元素的变量max。
  // 默认是最大值可以取数组中的第一个元素。
  // 遍历这个数组，把里面每个数组元素和max相比较。
  // 如果这个数组元素大于max就把这个数组元素存到max里面，否则继续下一轮比较。
  // 最后输出这个max。
  var arr = [2, 6, 1, 77, 52, 7];
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log('该数组里面的最大值是' + max);
</script>
```

### 06.数组转换为字符串

```js
<script>
  // 将数组['red','green','blue','pink']转换为字符串，并且用 | 或其他符号分隔
  // 1. 需要一个新变量用于存放转换完的字符串str。
  // 2. 遍历原来的数组，分别把里面数据取出来，加到字符串里面。
  // 3. 同时在后面多加一个分隔符
  var arr = ['red', 'green', 'blue', 'pink'];
  var str = '';
  var sep = '*'
  for (var i = 0; i < arr.length; i++) {
    str += arr[i] + sep;
  }
  console.log(str);
</script>
```

### 07.数组新增元素

```js
<script>
  // 1. 新增数组元素  修改length长度
  var arr = ['red', 'green', 'blue'];
  console.log(arr.length);
  arr.length = 5;   // 把我们数组的长度修改为了 5 里面应该有5个元素
  console.log(arr);
  console.log(arr[3]);  //undefined
  console.log(arr[4]);  //undefined

  //  2. 新增数组元素 修改索引号
  var arr1 = ['red', 'green', 'blue'];
  arr1[3] = 'pink';
  console.log(arr1);
  arr1[4] = 'hotpink';
  console.log(arr1);
  arr1[0] = 'yellow';   // 这里是替换原来的数组元素
  console.log(arr1);
  arr1 = '有点意思';
  console.log(arr1);  // 不要直接给 数组名赋值  否则里面的数组元素都没有了
</script>
```

### 08.数组存10个整数

```js
<script>
  // 新建一个数组，里面存放10个整数（1~10）
  // 核心原理：使用循环来追加数组。
  // 1. 声明一个空数组arr。
  // 2. 循环中的技术器i 可以作为数组元素存入。
  // 3. 由于数组的索引号是从0开始的，因此计数器从0开始更合适，存入的数组袁术要+1。
  var arr = [];
  for (var i = 0; i < 10; i++) {
    // arr = i; 不要直接给数组名赋值  否则以前的元素就都没了
    arr[i] = i + 1;
  }
  console.log(arr);
</script>
```

### 09.筛选数组

```js
<script>
  // 将数组[2,0,6,1,77,0,52,0,25,7]中大于等于10的元素选出来，放入新数组。
  // 1. 声明一个新的数组用于存放新数据newArr。
  // 2. 遍历原来的旧数组，找出大于等于10的元素。
  // 3. 一次追加给新数组newArr。
  // 方法1
  var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  var newArr = [];
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      //新数组应该从0开始 依次递增
      newArr[j] = arr[i];
      j++;
    }
  }
  console.log(newArr);
  // 方法2
  var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  var newArr = [];
  // 刚开始newArry.length就是0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      //新数组应该从0开始 依次递增
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
</script>
```

### 10.删除数组指定元素

```js
<script>
  //将数组[2,0,6,1,77,0,52,0,25,7]中的0去掉后，形成一个不包含0的新数组。
  // 1. 需要一个新数组用于存放筛选之后的数据。
  // 2. 遍历原来的数组，把不是0的数据添加到新数组里面(此时要注意采用属猪名 + 索引的格式接收数据)。
  // 3. 新数组里面的个数，用length 不断累加。
  var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
</script>
```

### 11.翻转数组

```js
<script>
  // 将数组['red','green','blue','pink','purple']的元素反过来存放
  // 1. 声明一个新数组newArr
  // 2. 把就数组索引号第4个取过来（arr.length-1）,给新数组索引号第0个元素（newArr.length）
  // 3. 我们采取递减的方式 i--
  var arr = ['red', 'green', 'blue', 'pink', 'purple'];
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr[newArr.length] = arr[i];
  }
  console.log(newArr);
</script>
```

### 12.冒泡排序

```js
<script>
  // 冒泡排序
  var arr = [5, 4, 3, 2, 1];
  for (var i = 0; i <= arr.length - 1; i++) {  //外层循环管趟数
    for (var j = 0; j <= arr.length - i - 1; j++) {  // 里面的循环管 每一趟交换的次数
      // 内部交换2个变量的值   前一个和后一个数组元素相比较
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
</script>
```