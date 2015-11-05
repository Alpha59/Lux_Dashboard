function AssetManagementLib(params){
	switch(params.main_section_lib){
		case "AnalyticsMain":
			this.main = new AnalyticsMain(params.main_section_params);
			break;
		case "TableMain":
			this.main = new TableMain(params.main_section_params);
			break;
		default:
			this.main = new AssetManagementMain(params.main_section_params);
			break;
	}
	if(!params.hasOwnProperty("has_nav") || !params.has_nav){
		this.nav = new AssetManagementNav(params.nav_params);
	}
}

/* DEFAULT VALUES FOR EACH FIELD: 
{
	 placement : "page_body"
	,main_section_lib : "AssetManagementMain" // others include: "AnalyticsMain" | "TableMain"
	,main_section_params: { } // See main section lib entry
	,has_nav : true
	,nav_params : { } // see nav section lib entry
}
*/ 
