
(function(){
var UserAnalytics = function(params){
	// inhert non-static functionality
	AssetManagementLib.apply(this, params);

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
var placement = "UserAnalytics";

// This is the set-up portion, and defines all of the functionality
// EDITABLE:
var params = {
	 placement : placement
	,main_section_lib : "AnalyticsMain"
	,main_section_params :{
		,fields : [
			{
			}
		]
	}
	,nav_params : {
		 allow_remove : false
		,allow_rename : false
		,allow_filter_field : "username"
		,allow_local_export : false
	}
}

// inhert Static functionailty
UserAnalytics.prototype = new AssetManagementLib(params);	

// Create a new instance of the Class
var userAnalytics = new UserAnalytics(params);
})();
