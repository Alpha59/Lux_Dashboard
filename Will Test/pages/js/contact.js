function Contact(divId, options) {
	
	// Initial setup
	this.placement = document.getElementById(divId);
	this.placement.innerHTML = '';
	
	// Backend functions
	this.server = {
		adjust: function(data, callback) {
			
		},
		query: function(data, callback) {
			
		},
		sendmail: function(data, callback) {
			
		}
	}
	
	// Replace/add functions on the backend when necessary
	if (typeof options === 'object') {
		for (var key in in options) {
			if (options.hasOwnProperty(key) && Object.prototype.toString.call(options[key]) == '[object Function]')
				this.server[key] = options[key];
		}
	}
	
	// Functions
	this.addElement = function(name, options) {
		
	}
}