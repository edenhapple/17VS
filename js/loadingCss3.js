/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 10:01:19
 * @version $Id$
 */
function loadding() {
    var warp = document.createElement("div");
    
    warp.id = "loadingWarp";
    var load = document.createElement("div");
    load.className = "load-container2 load8";
    var container= document.getElementsByClassName("load-container2");
    //load.style.cssText="width: 120px;height: 120px;margin-left: 1.15rem;margin-top: 1.25rem;padding-top: .04rem;background-color: rgba(0,0,0,.7);border-radius: 5px;"
    var loader = document.createElement("div");
    loader.className = "loader";
    var p = document.createElement("p");

    document.body.appendChild(warp);
    warp.appendChild(load);
    load.appendChild(loader);
    load.appendChild(p);
    loader.innerHtml = "Loading...";
    p.innerText = "正在加载";
    
    document.onreadystatechange = completeLoading;
    
    function completeLoading() {
        if (document.readyState == "complete") {
//        	var remDom=function(){
//        		document.body.removeChild(warp)
//        	}
//        	setTimeout(remDom,500);
        	document.body.removeChild(warp)
        }
    }
    
}
loadding() 
