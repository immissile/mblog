Mblog
=

## 介绍

NodeJs + MongoDB 开发的多用户博客系统

## 安装部署

开发版本:
[io.js](https://iojs.org) v2.3.3，[MongoDB](https://www.mongodb.org) v2.6，[Redis](http://redis.io)  v2.8.9。

```
1. 安装 `Node.js/io.js[必须]` `MongoDB[必须]` `Redis[必须]`
2. 启动 MongoDB 和 Redis
3. `$ make install` 安装 mblog 的依赖包
4. `cp config.default.js config.js` 请根据需要修改配置文件
5. `$ make test` 确保各项服务都正常
6. `$ node app.js`
7. visit `http://localhost:3000`
8. done!
```

## 测试

跑测试

```bash
$ make test
```

## License

MIT
