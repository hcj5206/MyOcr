function find_name_img(data,id_re){
	//在data中找到对应id的name 值
	for (var item in data) {
			if(data[item].id==id_re){
				console.log(data[item].name)
				return data[item].name
			}
	   }
	 return false;
}
function getNameCut(cv,box_num,box_start,box_w=110,box_h=26){
	var k= getImagePortion(cv,box_w,box_h*(box_num),pos3A[0], pos3A[1]+box_h*box_start,1)
	return k
}
function getScoreCut(cv,box_num,box_start,box_w=45,box_h=26){
	var k= getImagePortion(cv,box_w,box_h*(box_num),pos2A[0], pos2A[1]+box_h*box_start,1)
	var data= getOcr(k);
	var words_result_num=JSON.stringify(data["words_result_num"])
	return data;
}
function getScoreCut_test(cv,box_num,box_start,box_w=36,box_h=26){
	var k= getImagePortion(cv,box_w,box_h*(box_num),pos2A[0], pos2A[1]+box_h*box_start,1)
	var data= getOcr(k);
	var words_result_num=JSON.stringify(data["words_result_num"])
	return data;
}