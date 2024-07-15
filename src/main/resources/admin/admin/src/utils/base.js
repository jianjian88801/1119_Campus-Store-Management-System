const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanshangpuguanli/",
            name: "xiaoyuanshangpuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanshangpuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园商铺管理系统"
        } 
    }
}
export default base
