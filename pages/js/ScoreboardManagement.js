(function(){
var ScoreboardManagement = function(params){
	// inhert non-static functionality
	AssetManagementLib.apply(this, arguments);

	/* 
 *
 *	EDITABLE:
 *	This is where any custom fields and functions go:
 *	Add them with function expressions `this.func = function(){};`
 *	And function scoped variables `this.variable = "";`
 *	Unless you really want them to be private, in which case you can
 *	Use `var _variable = ""` to make them private.
 * 	
  	*/
};

// Name is brought out so I don't have to retype is a bunch
var placement = "ScoreboardManagement";

// This is the set-up portion, and defines all of the functionality
// EDITABLE:
var params = {
	 placement : placement
	,main_section_lib : "TableMain"
	,main_section_params :{
		 save_button_callback : Server[placement].Save
		,fields : [
			{
			}
		]
	}
	,nav_params : {
		 allow_remove : false
		,allow_rename : false
		,allow_filter_field : "username"
		,query_callback : Server[placement].Query
	}
}

// inhert Static functionailty
ScoreboardManagement.prototype = new AssetManagementLib(params);	

// Create a new instance of the Class
var scoreboardManagement = new ScoreboardManagement(params);
})();
