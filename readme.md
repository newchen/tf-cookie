## Cookie 相关操作

### API 风格模拟 localStorage，方法名称和使用基本一模一样使用如下

```javascript
import Cookie from "tf-cookie";

// 设置cookie
Cookie.setItem(key, val /*,expires,domain*/);

// 获取cookie
Cookie.getItem(key);

// 获取所有cookie
Cookie.getAll();

// 移除某个cookie
Cookie.removeItem(key /*, domain*/);

// 移除所有cookie
Cookie.clear(/*domain*/);
```
