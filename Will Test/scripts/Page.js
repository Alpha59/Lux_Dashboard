var Page = function (elementId, options) {
	// Initial setup
	this.placement = document.getElementById(elementId);
	
	// Empty the element
	if (this.placement == null)
		console.error('cannot find element with id: ' + elementId);
	else {
		while (this.placement.childNodes.length > 0)
			this.placement.removeChild(this.placement.childNodes[0]);
	}
	
	// Replace/add functions on the backend when necessary
	if (typeof options === 'object') {
		for (var key in options) {
			if (options.hasOwnProperty(key) && Object.prototype.toString.call(options[key]) == '[object Function]')
				this.server[key] = options[key];
		}
	}
	
	this.addElement = function(tagName) {
		var element = document.createElement(tagName);
		this.placement.appendChild(element);
		
		return element;
	}
};