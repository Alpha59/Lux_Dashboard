(function(){
var AssetManagement = function(params){
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
var placement = "AssetManagement";

// This is the set-up portion, and defines all of the functionality
// EDITABLE:
var params = {
	 placement : placement
	,main_section_params :{
		,save_button_callback : Server[placement].Save
		,allow_arbitrary_fields : true
		,fields : [
			{
				 name : "_id"
				,field_name : "_id"		
				,type: "_id"
				,required : true
				,hidden : true
				,exclude_if_blank: true
			 }
		]
	}
	,nav_params : {
		 remove_button_callback : Server[placement].Remove
		,rename_button_callback : Server[placement].Rename
	}
}

// inhert Static functionailty
AssetManagement.prototype = new AssetManagementLib(params);	

// Create a new instance of the Class
var assetManagement = new AssetManagement(params);
})();
