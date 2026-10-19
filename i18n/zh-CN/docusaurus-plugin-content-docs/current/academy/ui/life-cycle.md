---
sidebar_position: 7
id: life-cycle
title: 界面生命周期事件
sidebar_label: 生命周期事件
---

## 用户界面（`ui`）

在 Netuno 的数据管理界面中，可以注入自定义代码，以实现定制化的修改和操作。

开发工作是在应用程序根目录下的 `ui` 文件夹内编写的代码中完成的。

### addPageLoad()

在应用程序“就绪”之前，无法安全地操作页面。

当页面加载完成时，将调用该方法。

```javascript
netuno.addPageLoad(() => {
   console.log('做一些事情');
});
```

### addContentLoad()

当表单或报表被加载时，界面会随之改变，相应地显示其中的内容，无论是数据表单、搜索，还是对某个报表的数据进行筛选。

一旦有内容被加载，就会调用该方法，并传入将要承载所呈现内容的容器。

```javascript
netuno.addContentLoad((container) => {
   if (container.is('[netuno-form-search]')) {
       console.log('当元素存在时做一些事情');
   }
});
```