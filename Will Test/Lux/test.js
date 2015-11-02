var data = '[{"name":"contact","css":"contact.css","js":"contact.js","lib":"contact_lib.js","html":"contact.html","icon":"contact.ico","anchor":"#contact","description":"Contact Page"}]';

window.onload = function() {
	Helper.loadNav(JSON.parse(data), 'nav');
	Helper.loadBody('landing', 'Page');
}

/*function loadPage(div, path) {
    var xhr = new XMLHttpRequest();
	var data = '';
	
	div.innerHTML = ''; // Clear div
	
    xhr.open("GET", path);
	xhr.onload = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 0) // 0 for local files
				div.innerHTML = xhr.responseText;
			else
				console.error(xhr.statusText);
		}
	};
	
	xhr.onerror = function(e) {
		console.error(xhr.statusText);
	}
	
	xhr.send(null);
	
	return data;
}

function loadJS(path) {
	var script = document.createElement('script');
	var head = document.getElementsByTagName('head')[0];
	
	script.type = 'text/JavaScript';
	script.src = path;
	head.appendChild(script);
}

function removeJS(path) {
	var scripts = document.getElementsByTagName('script');
	
	for (var i = 0; i < scripts.length; i++) {
		if (scripts[i].src == path) {
			scripts[i].parentNode.removeChild(scripts[i]);
			break;
		}
	}
}*/