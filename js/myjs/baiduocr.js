var accesstoken="24.383051c0dfd25d3124f525c977de8063.2592000.1578744424.282335-17907007";
function getOcr(imageBase){
	imageBase= imageBase.replace("data:image/png;base64,","");
	// console.log(imageBase);
	// console.log(access_token);
	var data_json=null;
	$.ajax({
	    header: {
	        "Content-Type": "application/x-www-form-urlencoded"
	    },
	    type: "post",
		// https://aip.baidubce.com/rest/2.0/ocr/v1/numbers
	    url: "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic",
	    // url: "https://aip.baidubce.com/rest/2.0/ocr/v1/numbers",
	    async: false,
	    data: {
	        access_token: accesstoken,
	        id_card_side: "front",
	        image: imageBase
	    },
	    dataType: "json",
	    timeout: 30000,
	    success: function (data) {
			 // console.log(data["words_result"]);
			data_json=data;
	    },
	    error: function (xhr) {
	        console.log("请求解析失败");
	    }
	});
	return data_json;
}
function gettoken(){
	var grant_type="client_credentials";
	var client_id="yW88v4Ah3yjiSdQxLWoNxwUr";
	var client_secret="YhwssUh8QFVd4vKOIii8sjGL0XHr2N5G";
	$.ajax({
	    header: {
	        "Content-Type": "application/x-www-form-urlencoded"
	    },
	    type: "post",
	    url: "https://aip.baidubce.com/oauth/2.0/token",
	    async: true,
	    data: {
	        grant_type: grant_type,
	        client_id: client_id,
	        client_secret: client_secret
	    },
	    dataType: "json",
	    timeout: 30000,
	    success: function (data) {
	        // console.log("解析成功");
	        // console.log(data);
			var access_token1=data['access_token'];
			accesstoken=access_token1;
			// var str = JSON.stringify(data);
			console.log("请解析成功");
			console.log(access_token1);
		 //   var str = JSON.stringify(data);
		   return access_token1;
	    },
	    error: function (xhr) {
	        console.log("请求解析失败");
	    }
	});
}