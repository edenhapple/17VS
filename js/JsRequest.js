/**
* JavaScript从请求的url中获取参数值
*/
var JsRequest ={
	$ : function(){
		var obj = {};
		var url=decodeURI(location.search); //获取url中"?"符后的字串
		obj.theRequest=new Object();
		obj.refresh=function(){
			obj.theRequest=new Object();
			if (url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				
				for (var i = 0; i < strs.length; i++) {
					obj.theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
					
				}
			}
		}
		obj.get=function(name){
			var v=obj.theRequest[name]; 
			if(typeof(v) == "undefined" || v==null)
				v="";
			return v;
		}
		obj.getContextPath=function(){
			var pathName = document.location.pathname;
			var index = pathName.substr(1).indexOf("/");
		    var result = pathName.substr(0,index+1);
		    return result;
		}
		obj.refresh();
		return obj;
	}
	
}