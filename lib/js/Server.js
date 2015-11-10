var Server = {
	Helper: {
		Ajax : function(urlCall, data, success, failure){
			var url = Helper.getJsonFromUrl();
			var http = new XMLHttpRequest();
			urlCall = '../Lux/'+urlCall + '/index.php';			

			http.onreadystatechange = function() {
			    if (http.readyState == 4 && http.status == 200) {
				try {
				   var json = JSON.parse(http.responseText));
					// possible success- need to check for error
				    if(json.hasOwnProperty("error")){
					failure(json);
				    }else{
					success(json);
				    }
				    console.log(json);
				} catch(err) {
					// definitently an error
				    failure({"error": "JSON Parsing error", "message": "Server-side code contains error", "code": -1});
				    console.log(http.responseText);
				}
			    }
			}
				
			if(url.hasOwnProperty("access_token")) {
			    console.log(JSON.stringify(data));
			    urlCall = urlCall + "?access_token="+url.access_token; 
			} else {
			    console.log(JSON.stringify(data));
			}
				
			console.log(urlCall);
			http.open("POST", urlCall, true);
			http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			http.send(JSON.stringify(data));

		}
		,FileUpload: function(urlCall, data, success, failure){


		}
	}
	,AdManagement : {
		 Save : function(data, success, failure){
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/query', {}, success, failure);
		}
	}
	,FileManagement : {
		 Save : function(data, success, failure){
			data.collection = "Files";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
			Server.Helper.FileUpload('Files/upload', data, success, failure);
		}
		,makeDirectory : funtion(data, success, failure){
			Server.Helper.Ajax('Files/makedir', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Files";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
			Server.Helper.Ajax('Files/mv', data, success, failure);
		}
		,Remove : function(data, success, failure){
			data.collection = "Files";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
			Server.Helper.Ajax('Files/rm', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Files";
			Server.Helper.Ajax('Assets/query', {}, success, failure);
			Server.Helper.Ajax('Files/structure', {}, success, failure);
		}
	}
	,AssetManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Assets/query', {}, success, failure);
		}
	}
	,ContentManagement : {
		//  available_data_fields : {
		//	content: {
		//		full:
		//		short: 
		//	}
		//	header:{
		//		text:
		//		sub:
		//		url_safe:
		//	}
		//	picture:{
		//		banner:
		//		other: []
		//		slideshow: []
		//	}
		//  }
		 Save : function(data, success, failure){
			// TODO: upload picture's functionality. 
			Server.Helper.FileUpload('Files/upload', data, success, failure);
			Server.Helper.Ajax('CMS/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('CMS/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('CMS/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('CMS/query', {}, success, failure);
		}
	}
	,ExOAuthClients : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('OAuth2/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('OAuth2/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('OAuth2/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('OAuth2/query', {}, success, failure);
		}
	}
	,PrizeManagement : {
		 Save : function(data, success, failure){
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/query', {}, success, failure);
		}
	}
	,PlumAnalytics : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			
		}
	}
	,SystemRules : {
		 Save : function(data, success, failure){
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/query', {}, success, failure);
		}
	}
	,APIProviderManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('API/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('API/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('API/adjust', data, success, failure);
		,Query : function(data, success, failure){
			Server.Helper.Ajax('API/query', {}, success, failure);
		}
	}
	,ContactManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Contact/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Contact/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('Contact/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Contact/query', {}, success, failure);
		}
	}
	,MailingManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Mailing/adjust', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Mailing/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('Mailing/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Mailing/query', {}, success, failure);
		}
	}
	,ScoreboardManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Scoreboard/query', {}, success, failure);
		}
	}
	,UserAnalytics : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			
		}
	}
	,UserAccounts : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Accounts/adjsut', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Accounts/adjust', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('Accounts/adjust', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Accounts/query', {}, success, failure);
		}
	}
	,OrderManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Orders/view', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Orders/pending', data, success, failure);
		}
		,Remove : function(data, success, failure){
			Server.Helper.Ajax('Orders/ship', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Orders/query', data, success, failure);
		}
	}
	// Add code for all of the pages/server interactions
}
