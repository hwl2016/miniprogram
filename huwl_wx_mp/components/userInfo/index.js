Component({
    properties: {
      // 这里定义了innerText属性，属性值可以在组件使用时指定
      innerText: {
        type: String,
        value: 'default value',
      }
    },
    data: {
      // 这里是一些组件内部数据
      someData: {}
    },
    methods: {
      // 这里是一个自定义方法
      customMethod: function(){},
      onTap() {
          const params = {a: 1, b:2};
          this.triggerEvent("myevent", params);
      }
    },
    lifetimes: {
        created: function() {
            console.log("lifetimes created")
        },
        attached: function() {
            console.log("lifetimes attached")
        },
        detached: function() {
            console.log("lifetimes detached")
        },
    },
    // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
    created: function() {
        console.log("created")
    },
    attached: function() {
        console.log("attached")
    },
    detached: function() {
        console.log("detached")
    },
    pageLifetimes: {
        show: function() {
            console.log("pageLifetimes show")
        },
        hide: function() {
            console.log("pageLifetimes hide")
        },
        resize: function(size) {
            console.log("pageLifetimes resize")
        }
    }
})