var Helper = {
    	require: function(file, reload, callback) {
		var scripts = document.getElementsByTagName('script');
		var found = false;

		// This is incase the reload parameter
		// is not included, but the callback parameter is. 
		if(Helper.isFunction(reload)){
			callback = reload;
			reload = false;
		}
		
		for (var i = 0; i < scripts.length; i++) {
			if (scripts[i].src == file) {
				found = true;
				break;
			}
		}
		
		if (reload || !found){
			var script = scripts[0];
			var newfile;
			if(file.substr(-3) == ".js"){	
				newfile = document.createElement('script');
				newfile.type = 'text/JavaScript';
				newfile.src = file;
			}else if(file.substr(-3) == "css"){
				newfile = document.createElement('link');
				newfile.type = 'text/css';
				newfile.rel = 'stylesheet';
				newfile.href = file;
			}else{
				return false;
			}

			// IE
			newfile.onreadystatechange = function() {
			console.log("Loading a file IE");
				if (newfile.readyState === 'loaded' || newfile.readyState === 'complete') {
					if(Helper.isFunction(callback)){
						callback();
					}
				}
			};

			// others
			newfile.onload = function () {
			console.log("Loading a file Chrome");
				if(Helper.isFunction(callback)){
					callback();
				}
			};
			Helper.insertAfter(newfile, script);
		}
        	return true;
	}
	,insertAfter: function(newNode, referenceNode) {
		// Find the parent, and the next element
		// User the parent to insert before the next element. 
		// TODO: check if this works if the referenceNode is the last child.
        	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
	,getJsonFromUrl: function() {// done and functional
		var query = location.search.substr(1);
		var result = {};
		result["#"] = location.hash.substr(1);
		query.split("&").forEach(function(part) {
			var item = part.split("=");
			result[item[0]] = decodeURIComponent(item[1]);
		});
		return result;
    	}
    	,Ajax: function(urlCall, data, callback) {
		var url = Helper.getJsonFromUrl();
		var http = new XMLHttpRequest();
			
		http.onreadystatechange = function() {
		    if (http.readyState == 4 && http.status == 200) {
			try {
			    callback(JSON.parse(http.responseText));
			    console.log(JSON.parse(http.responseText));
			} catch(err) {
			    callback(http.responseText);
			    console.log(http.responseText);
			}
		    }
		}
			
		if(url.hasOwnProperty("access_token")) {
		    console.log(JSON.stringify(data) + " ?access_token="+url.access_token);
		    urlCall = urlCall + "?access_token="+url.access_token; 
		} else {
		    console.log(JSON.stringify(data));
		    urlCall = urlCall;
		}
			
		console.log(urlCall);
		http.open("POST", urlCall, true);
		http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        	http.send(JSON.stringify(data));
    	}
	,isFunction: function(functionName){
		return (Object.prototype.toString.call(functionName) == '[object Function]');	
	}
	,placeHTML: function(pageName, pageContent, callback){
		if(Helper.isFunction(callback)){
		    callback(pageContent);
		}else{
			if(callback == undefined){
				callback = "wrap_page";
			}
			var placement = document.getElementById(callback); 
			placement.innerHTML = pageContent;
		}
	}
	,loadHTML: function(pageName, callback){
		var http = new XMLHttpRequest();
			
		http.onreadystatechange = function(){
		    if (http.readyState == 4 && http.status == 200){
			Helper.placeHTML(pageName, http.responseText, callback);
		    }else if(http.status == 404 || http.status == 403){
			// Handle if HTML page does not exist
			var pageContent = "<div id="+pageName.split("/")[3].split(".")[0]+" ></div>";
			Helper.placeHTML(pageName, pageContent, callback);
		    }
		}
		http.open("GET", pageName, true);
		http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        	http.send();
	}
	,loadPage: function(pageName){
		Helper.loadHTML('./pages/html/'+ pageName + '.html');
		Helper.require('./pages/js/'+ pageName + '.js');
		Helper.require('./pages/css/+'+ pageName + '.css');
	}
	,createMainDiv: function(className, divType){
		if(divType == undefined){
			divType = "DIV";
		}
		if(className == undefined){
			className = ""
		}
		var element = document.createElement(divType);
		element.className = className;
		return element;
	}
	,callbackStr2FunctionRef: function(k,v){
		if(k.match(/callback$/)){
			var v_array = v.split(".");
			return window[v_array[0]][v_array[1]][v_array[2]];
		}else{
			return v;
		}
	}

}
