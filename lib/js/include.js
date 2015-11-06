var url = Helper.getJsonFromUrl();
window.onload = function(){
	Helper.require('./lib/js/Server.js');
	Helper.require('./lib/js/AssetManagementLib.js');
	Helper.require('./lib/js/AssetManagementMain.js');
	Helper.require('./lib/js/AssetManagementNav.js');
	Helper.require('./lib/js/TableMain.js');
	Helper.require('./lib/js/AnalyticsMain.js');
	Helper.require('./lib/js/Links.js', function(){
		Helper.require('./lib/js/WrapperHeader.js', function(){
			var params = {
				 placement : "wrap_head"
				,logo : new Links({href:"", alt:""})
				,links : [
					 new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
				]
				,dropdowns : [
					 new Links({href:"", alt:""}) // need to be able to add a class here
					,new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
				]
			};
			var wrapperHeader = new WrapperHeader(params);
		});
		Helper.require('./lib/js/WrapperFooter.js', function(){
			var params = {
				 placement : "wrap_foot"
				,logo : new Links({href:"", alt:""})
				,links : [
					 new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
				]
				,dropdowns : [
					 new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
				]
			};
			var wrapperFooter = new WrapperFooter(params);
		});
		Helper.require('./lib/js/WrapperNav.js', function(){
			var params = {
				placement : "wrap_nav"
			};
			Helper.loadHTML('./setup/Nav.json', function(data){
				params.nav_object = JSON.parse(data);
				var wrapperNav = new WrapperNav(params);
			});
		});
	});
	if(url["#"] != ""){
		Helper.loadPage(url["#"]);
	}else{
		Helper.loadPage("Landing");
	}
}



