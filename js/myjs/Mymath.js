//求和
function ArrSum(array1){
	var sum1=0;
	 for ( var j = 0,len=array1.length; j < len; j++) {
	        sum1 =sum1+ array1[j];
	    }
	console.log(sum1)
	return sum1;
}

function sum(arr) {
	console.log(arr)
    var s = 0;
    for (var i=arr.length-1; i>=0; i--) {
        s += arr[i];
    }
	console.log(s)
    return s;
}
//数组全置负数
function D_array(array){
	var tk=array
	 for ( var i = 0; i < array.length; i++) {
			if(array[i]>0){
				tk[i] = -array[i];
			}
	    }
	return tk;
}
function ReArray(array){
	array=array.map(Number)
	for(var j = 1,len=array.length; j < len; j++) {
	    if(array[j]>array[j-1]){
			array[j]=-array[j];
		}
	}
	var s=ArrSum(array);
	if(s!=0){
		for(var j = 1,len=array.length; j < len; j++){
			var arr0=array.slice(0,j)
			var arr1=D_array(array.slice(j))
			var arr=arr0.concat(arr1);
			var k=ArrSum(arr);
			if (k==0){
				array=arr;
				break
			}
		}
	}
	console.log(array)
	array.sort(function(a,b) {
			return b - a;
		});
	console.log(array)
	return array;
}
function sleep(delay) {
    var start = (new Date()).getTime();
    while((new Date()).getTime() - start < delay) {
        continue;
    }
}