# geek-client-mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###  npm i `npm ERR! code ERESOLVE`

```js
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: @vue/eslint-config-standard@6.1.0
npm ERR! Found: eslint-plugin-vue@8.7.1
npm ERR! node_modules/eslint-plugin-vue
npm ERR!   dev eslint-plugin-vue@"^8.0.3" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer eslint-plugin-vue@"^7.0.0" from @vue/eslint-config-standard@6.1.0
npm ERR! node_modules/@vue/eslint-config-standard
npm ERR!   dev @vue/eslint-config-standard@"^6.1.0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: eslint-plugin-vue@7.20.0
npm ERR! node_modules/eslint-plugin-vue
npm ERR!   peer eslint-plugin-vue@"^7.0.0" from @vue/eslint-config-standard@6.1.0
npm ERR!   node_modules/@vue/eslint-config-standard
npm ERR!     dev @vue/eslint-config-standard@"^6.1.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See D:\Development\nodejs\node_cache\eresolve-report.txt for a full report.
```

###  resolve dependency tree

```
npm install eslint-plugin-vue@7.20.0 --force
npm i vant@latest-v2
```
### 根据项目功能调整下目录结构

``` 
根目录和配置文件
├─node_modules
├─public
├─src
├─.browserslistrc     # 适配浏览器列表
├─.editorconfig       # 提供给编辑器的配置
├─.eslintrc.js        # eslint代码风格配置
├─.gitignore          # git忽略文件配置
├─.babel.config.js    # babelES降级配置
├─.postcssrc.js       # 
├─package-lock.json   # 包下载版本说明文件
├─package.json        # 项目包说明文件
├─postcss.config.js   # postcss，css预处理器后处理器配置
├─README.md           # 说明MD文件
└─vue.config.js       # vue-cli的配置文件
```

``` 
src 目录结构如下，仅供参考 （分模块的思维才重要）
├─api              # 接口函数
├─assets           # 项目资源
│  ├─images          # 图片 
│  └─styles          # less代码
├─components       # 全局组件，通用组件
├─router           # 路由
├─store            # 状态
├─utils            # 工具
└─views            # 路由组件（页面）
    ├─article        # 文章详情
    ├─home           # 首页
    ├─question       # 问答
    ├─user           # 用户模块
    └─video          # 视频
```

### 适配单位
`移动端适配方案，实现这些适配方案用到的尺寸单位。`
``` 
大致步骤：
回忆下移动端等比例适配的单位，rem 或者 vw+vh
在项目中使用 vw 来演示下适配的过程
总结 vw 单位在做适配的方法
```
### 约定路由
| 路径    | 组件    | 功能 |
|---------|----------|--------|
| /    | Home+Tabbar    | 首页 |
| /question    | Question+Tabbar    | 问答 |
| /video    | Video+Tabbar    | 视频 |
| /user    | User+Tabbar    | 用户 |
| /user/profile    | UserProfile    | 用户资料 |
| /user/chat    | UserChat    | 小智同学 |
| /article    | Article    | 文章详情 |

*总结： 全部采用一级路由来实现，不使用嵌套路由。（方便后续做组件缓存）*
