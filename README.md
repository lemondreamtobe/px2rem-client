# px2rem-client

一种移动端适配方案：客户端px转rem

>如果不想借助webpack的px2rem-loader 可以尝试本库。ps(因为本人使用craete-react-app或者umi等集成了webpack的库时候，当想扩展成移动端项目时往往需要打开其webpack注入入口，所以试了下客户端的转换方法)

>本库自带flexible.js 你只需要关心你的转换比例即可

>由于用的是ts写的，可能部分情况下无法使用


# npm式引入

```
npm install px2rem-client
```

```
import px2rem from 'px2rem-client';
const px2remer = new px2rem({ratio: 37.5});
px2remer.applyNewTheme();

```

# Api
```

├── ratio  # px转rem的比例基数          
  
```
