# 极客时间ServerLess专栏，"待办任务"前端项目

这个项目用 [Ant Design Pro](https://pro.ant.design)，[Umi.js](https://umijs.org/)，[React](https://zh-hans.reactjs.org/) 开发。
这个仓库是前端项目代码，接口采用Mock数据本地拦截模拟，Mock代码在 `mock` 目录里。

## 环境准备

安装 Node.js依赖包 `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## 提供脚本

我们将提供你几个常用脚本，具体脚本放在 `package.json`。

### 启动项目

```bash
npm start
```
启动后，你可以通过浏览器地址栏：<http://127.0.0.1:8000>访问你的本地代码；
### 构建项目

```bash
npm run build
```

### 检查代码规范

```bash
npm run lint
```

你也可以检查代码规范并自动修复代码规范错误:

```bash
npm run lint:fix
```

### 测试代码

```bash
npm test
```
