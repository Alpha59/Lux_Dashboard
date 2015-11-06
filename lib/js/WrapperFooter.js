function WrapperFooter(params){
	this.element = Helper.createMainDiv(arguments.callee);
	console.log("Footer Loaded");
}
/* Defaults:
	{
		logo : // link object
		links : [ ] // array of link objects
		dropdowns: [ ] // array of link objects
	}
*/
