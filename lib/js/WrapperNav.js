function WrapperNav(params){
	console.log(params);
	var placement = document.getElementById(params.placement);
		
	this.element = Helper.createMainDiv(arguments.callee);
	this.element.appendChild(createUL(params.nav_object));
	placement.appendChild(this.element);
	
	function createUL(object){
		var ul = document.createElement("UL");
		for(link in object){
			var li = document.createElement("LI");
			li.onclick = function(base){
				return function(){ Helper.loadPage(base) };
			}(object[link].base);
			var link_element = new Links({
				 href : "#" + object[link].base
				,alt : object[link].name
			});
			li.appendChild(link_element.element);
			ul.appendChild(li);
			if(object[link].hasOwnProperty("elements")){
				ul.appendChild(arguments.callee(object[link].elements));
			}
		}
		return ul;
	}
}
/* Defaults:
	{
		nav_object : [] // pulled from JSON file
	}
*/

