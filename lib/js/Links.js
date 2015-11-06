function Links(params){
	this.href = params.href;
	this.alt = params.alt;
	this.element = Helper.createMainDiv(arguments.callee, "A");
	if(params.hasOwnProperty("icon") && params.icon != ""){
		this.icon = params.icon;
		this.img = document.createElement("IMG");
		this.img.src = this.icon;
		this.img.alt = this.alt;
		this.element.appendChild(this.img);
	}else{
		this.icon = "";
		this.element.innerHTML = this.alt;
	}
	this.element.href = this.href;
}

/* Defaults
	{
		 icon : ""
		,href: ""
		,alt : ""
	}
*/
