# vDialog

  简单、易用、轻量级 js 对话框组件.

## 引用

```html
<script src="./js/vDialog.min.js"></script>
```

## 语法

```js
vDialog({
  title: '欢迎消息',
  content: '欢迎使用 vDialog 对话框组件！',
  ok: function(){
    alert('你点了确定按钮');
  },
  cancel: function(){
    alert('你点了取消按钮');
  },
  width: 800,
  height: 300
}).showModal();
```

### 属性

* title：对话框标题
* content：对话框内容
* ok：点确定按钮执行的回调
* cancel：点取消按钮执行的回调
* okVal：确定按钮文字
* cancelVal：取消按钮文字
* width：对话框宽度
* height：对话框高度

### 方法

* showModal：对话框锁屏



## License

  [MIT](LICENSE)