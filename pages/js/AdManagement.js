(function(){
var AdManagement = function(params){
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
var placement = "AdManagement";

// This is the set-up portion, and defines all of the functionality
// EDITABLE:
var params = {
	 placement : placement
	,main_section_lib : "AssetManagementMain"
	,main_section_params :{
		 auto_save : false
		,auto_save_callback : Server[placement].AutoSave
		,save_button : true
		,save_placement : AssetManagementMain_placement.BOTTOM
		,cancel_button : true
		,cancel_placement : AssetManagementMain_placement.BOTTOM
		,populate_default_values: false
		,asset_category : "Advert"
		,save_button_callback : Server[placement].Save
		,allow_arbitrary_fields : false
		,fields : [
			{
				 name : "_id"
				,field_name : "_id"		
				,type: "_id"
				,required : true
				,default_value : ""
				,hidden : true
				,exclude_if_blank: true
			 }
			,{
				 name : "Name"
				,field_name : "name"		
				,description: "The Name for this thing"
				,type: "text"
				,validator : Validators.date
				,required : true
				,default_value : ""
				,hidden : false
				,exclude_if_blank: false
			 }
			,{
				 name: "Restriction Dates"
				,field_name : "restriction_dates"
				,description : "Date range that is permitted"
				,type : "document"
				,hidden : false
				,exclude_if_blank: false
				,requried : false
				,subFields: [
					 { 
						 name: "Start Date"
						,field_name : "start_date"
						,description : "The Available Start Date"
						,type : "date" 
						,validator : Validators.date
						,required : true
						,default_value : ""
						,hidden : false
						,exclude_if_blank: false
					 }
					,{
						 name: "End Date"
						,field_name : "end_date"
						,description : "The Expected End Date"
						,type : "date" 
						,validator : Validators.date
						,required : true
						,default_value : ""
						,hidden : false
						,exclude_if_blank: false
					 }
				]
			 }
		]
	}
	,has_nav : true
	,nav_params : {
		 allow_remove : true
		,remove_button_callback : Server[placement].Remove
		,allow_create : true
		,create_placement : AssetManagementNav_placement.TOP
		,display_unsaved : true
		,nested_navigation : false
		,nested_naviation_field : undefined
		,allow_create_nested : false
		,allow_filter : true
		,allow_filter_field : "name"
		,filter_placement : AssetManagementNav_placement.TOP
		,allow_local_export : true
		,export_placement : AssetManagementNav_placement.BOTTOM
		,allow_rename : true
		,rename_button_callback : Server[placement].Rename
		,rename_placement : AssetManagementNav_placement.BOTTOM
		,show_expired : true // allows filtering by expired values
	}
}

// inhert Static functionailty
AdManagement.prototype = new AssetManagementLib(params);	

// Create a new instance of the Class
var adManagement = new AdManagement(params);
})();
