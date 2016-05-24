//worker.js
onmessage = function (event){
	count(event.data);
}
function count(n){
	var progress, currentProgress;
	for(var i=1; i<=n; ++i){
		currentProgress = Math.round(i/n * 100);
		if(progress != currentProgress){
			postMessage({type:0, msg:currentProgress});
			progress = currentProgress;
		}
	}
	postMessage({type:1, msg:"Загрузка завершена"});
}

