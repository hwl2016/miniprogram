Page({
    data: {
        arr: [1,2,3,4,5],
        view: "APP",    // WEBVIEW APP MINA
        name: "haha",
        version: ""
    },
    bindViewTap() {
        console.log('parent');
    },
    bindButtonTap(e) {
        console.log(this.data.name);
        // console.log(e.mark)
        const query = this.createSelectorQuery()
        query.select('#haha').boundingClientRect(function(res){
            console.log(res) // #the-id 节点的上边界坐标（相对于显示区域）
        })
        query.selectViewport().scrollOffset(function(res){
            console.log(res) // 显示区域的竖直滚动位置
        })
        query.exec()
    }
})