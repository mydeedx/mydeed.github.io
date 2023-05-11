mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 普通表格1 = new 普通表格("普通表格1",null);
var 网络操作1 = new 网络操作("网络操作1",网络操作1_发送完毕);
var 对话框1 = new 对话框("对话框1",null,null,null);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

function 主窗口_创建完毕(){
		按钮组1.置样式(0,"mui-btn mui-btn-success");
		按钮组1.置样式(1,"mui-btn mui-btn-warning");
		按钮组1.置标题(0,"刷新列表");
		按钮组1.置标题(1,"切换到邮箱");
		获取列表数据();
}
function 按钮组1_被单击(按钮索引){
	if(按钮索引 == 0 ){
		获取列表数据();
	}
	if(按钮索引 == 1 ){
		窗口操作.切换窗口("chuangkou1.html","123");
	}
}

function 获取列表数据(){
	对话框1.显示等待框("正在发送请求");
	网络操作1.发送网络请求(窗口操作.取当前页面地址(),"post","text","mm=qdxcadd123&type=1",15000);
}
function 网络操作1_发送完毕(发送结果,返回信息){
	对话框1.关闭等待框();
	if(发送结果 == false ){
		对话框1.信息框("结果","发送失败,错误信息：" + 返回信息);
	}
	var json= 转换操作.文本转json(返回信息);
	普通表格1.清空表项();
	普通表格1.添加表头("#0099FF",["索引","服务器IP","端口","状态","延迟","备注"]);
	var 计次= 0;
	while(计次 < json.data.length){
		普通表格1.添加表项("",[json.data[计次].sy,json.data[计次].ip,json.data[计次].dk,json.data[计次].zt,json.data[计次].yc,json.data[计次].bz]);
		计次 = 计次 + 1;
	}
}