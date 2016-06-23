/* 首页 */
$('#btn-index-1').on('click', function() {
  vdialog({
    title: '欢迎使用',
    content: '我是一个脱俗的 vdialog 对话框',
    ok: true
  }).showModal();
});
$('#btn-index-2').on('click', function() {
  vdialog()
    .title('哈喽')
    .type('alert')
    .content('我给你变一个戏法吧')
    .ok(function() {
      this
        .type('confirm')
        .title('问一问')
        .content('你的名字：<input type="text" data-returnable="true" />')
        .ok(true)
        .close(function() {
          vdialog.alert('欢迎你，' + this.returnValue + '，我叫 vdialog');
        });
      return false;
    });
});

/* 标题 */
$('#btn-options-title-string').on('click', function() {
  vdialog({
    title: '欢迎'
  });
});
$('#btn-options-title-false').on('click', function() {
  vdialog({
    title: false,
    content: '这是一个没有标题的 vdialog'
  });
});
$('#btn-options-title-get').on('click', function() {
  var d = vdialog({
    title: '欢迎'
  });
  setTimeout(function() {
    // 改变 title
    d.title('快看，我变了');
    setTimeout(function() {
      // 隐藏 title
      d.title(false);
      setTimeout(function() {
        // 显示 title
        d.title(true).title('快看，我又变了');
        setTimeout(function() {
          // 获取 title
          alert(d.title());
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
/* 内容 */
$('#btn-options-content').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框'
  });
});
$('#btn-options-content-get').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框'
  });
  setTimeout(function() {
    alert(d.content().html());
  }, 1000);
});
/* 确定按钮 */
$('#btn-options-ok').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: function() {
      alert('你点了确定按钮');
    }
  });
});
$('#btn-options-ok-true').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true
  });
});
$('#btn-options-ok-fn-false').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: function() {
      return false;
    }
  });
});
$('#btn-options-ok-fn-method').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框'
  }).ok(function() {
    alert('你点了确定按钮');
  });
});
$('#btn-options-ok-fn-method-ok').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: function() {
      alert('你点了确定按钮');
    }
  });
  setTimeout(function() {
    d.ok();
  }, 1000);
});
/* 确定按钮文本 */
$('#btn-options-okValue').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    okValue: '我知道了',
    ok: function() {
      alert('你点了确定按钮');
    }
  });
});
/* 取消按钮 */
$('#btn-options-cancel').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: function() {
      alert('你点了取消按钮');
    }
  });
});
$('#btn-options-cancel-true').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true
  });
});
$('#btn-options-cancel-fn-false').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: function() {
      return false;
    }
  });
});
$('#btn-options-cancel-fn-method').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true
  }).cancel(function() {
    alert('你点了取消按钮');
  });
});
$('#btn-options-cancel-fn-method-cancel').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: function() {
      alert('你点了取消按钮');
    }
  });
  setTimeout(function() {
    d.cancel();
  }, 1000);
});
/* 取消按钮文本 */
$('#btn-options-cancelValue').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancelValue: '我不需要',
    cancel: function() {
      alert('你点了取消按钮');
    }
  });
});
/* 对话框图标 */
$('#btn-options-type').on('click', function() {
  vdialog({
    type: 'alert',
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    modal: true,
    ok: true,
    cancel: true
  });
});
$('#btn-options-type-list').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    modal: true,
    ok: true,
    cancel: true
  });
  setTimeout(function() {
    d.type('alert').content('我是提示信息！');
    setTimeout(function() {
      d.type('success').content('恭喜：操作成功！');
      setTimeout(function() {
        d.type('error').content('操作失败，服务器忙！');
        setTimeout(function() {
          d.type('confirm').content('你确定要删除该条记录吗？');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
/* 对话框尺寸 */
$('#btn-options-size').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    width: 300,
    height: 200
  });
});
$('#btn-options-size-method').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true
  }).width(400).height(100);
});
/* 对话框位置 */
$('#btn-options-left-top').on('click', function() {
  var _left = document.documentElement.scrollLeft,
    _top = document.documentElement.scrollTop;
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    left: _left + 300,
    top: _top + 200
  });
});
/* 模态窗口 */
$('#btn-options-modal').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true
  });
});
/* 自动关闭 */
$('#btn-options-time').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    time: 3
  });
});
$('#btn-options-time-method').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true
  }).time(3);
});
/* 随屏滚动 */
$('#btn-options-fixed').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    fixed: true
  });
});
/* ESC键控制 */
$('#btn-options-esc').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true,
    esc: false
  });
});
/* init */
$('#btn-options-init').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    init: function() {
      alert('vdialog inited.');
    }
  });
});
/* 关闭对话框 */
$('#btn-options-close').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true,
    close: function() {
      alert('你关闭了对话框');
    }
  });
});
$('#btn-options-close-fn').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true
  }).close(function() {
    alert('你关闭了对话框');
  });
});
$('#btn-options-close-fn-method').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true,
    close: function() {
      alert('你关闭了对话框');
    }
  });
  setTimeout(function() {
    d.close();
  }, 1000);
});
$('#btn-options-close-hide').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true,
    close: false
  });
});
/* 顶层对话框 */
var propsTopDialogCount = 0,
  propsTopDialogIndex = 0;
$('#btn-props-top-open').on('click', function() {
  var left = document.documentElement.scrollLeft,
    top = document.documentElement.scrollTop;
  propsTopDialogIndex++;
  propsTopDialogCount++;
  if (propsTopDialogIndex % 6 === 0) {
    propsTopDialogIndex = 1;
  }
  vdialog({
    title: '欢迎',
    content: '我是对话框 ' + propsTopDialogCount + '，请点击页面链接关闭我',
    ok: true,
    left: left + 10,
    top: top + propsTopDialogIndex * 50
  });
});
$('#btn-props-top-close').on('click', function() {
  vdialog.top && vdialog.top.close();
});
/* returnValue */
$('#btn-props-returnValue').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '您的姓名：<input type="text" data-returnable="true" />',
    ok: true,
    cancel: true,
    close: function() {
      alert(this.returnValue);
    }
  });
});
$('#btn-props-returnValue-on').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '您的姓名：<input type="text" data-returnable="true" />',
    ok: true,
    cancel: true
  });
  d.on('close', function() {
    alert(this.returnValue);
  });
});
/* show */
$('#btn-method-show').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true
  }).show();
});
$('#btn-method-show-anchor').on('click', function() {
  console.log(1);
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true
  }).show(document.getElementById('method-show-mark'));
});
/* showModal */
$('#btn-method-showmodal').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true
  }).showModal();
});
$('#btn-method-showmodal-anchor').on('click', function() {
  vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true
  }).showModal(document.getElementById('method-showmodal-mark'));
});
/* hide */
$('#btn-method-hide').on('click', function() {
  var btn = $(this);
  btn.hide();
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    close: function() {
      btn.show();
    }
  });
  $('#btn-method-hide-hide').on('click', function() {
    console.log(d);
    d.hide();
  });
  $('#btn-method-hide-show').on('click', function() {
    console.log(d);
    d.show();
  });
});
/* event */
$('#btn-event-on-close').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true
  });
  d.on('close', function() {
    alert('你关闭了对话框');
  });
});
$('#btn-event-on-close-fn').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: true,
    cancel: true,
    modal: true
  });
  d.close(function() {
    alert('你关闭了对话框');
  });
});
/* emit */
$('#btn-event-emit').on('click', function() {
  var d = vdialog({
    title: '欢迎',
    content: '我是一个优雅的 HTML5 对话框',
    ok: function() {
      alert(this.content().html());
      this.emit('myEvent');
    }
  });
  d.on('myEvent', function() {
    alert('这是一个自己定义的事件 myEvent');
  });
});

/* alert */
$('#btn-others-alert').on('click', function() {
  vdialog.alert('我是一个优雅的 HTML5 对话框');
});
$('#btn-others-success').on('click', function() {
  vdialog.success('恭喜：操作成功！');
});
$('#btn-others-error').on('click', function() {
  vdialog.error('操作失败，服务器忙！');
});
$('#btn-others-confirm').on('click', function() {
  vdialog.confirm('你确定要删除该条记录吗？', function() {
    alert('你点了确定按钮');
  });
});