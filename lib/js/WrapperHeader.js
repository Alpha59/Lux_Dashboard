function WrapperHeader(params){
	this.element = Helper.createMainDiv(arguments.callee);
	console.log("Header Loaded");	
}
/* Defaults:
	{
		logo : // link object
		links : [ ] // array of link objects
		dropdowns: [ ] // array of link objects
	}
*/
