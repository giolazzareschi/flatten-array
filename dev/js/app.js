;(function(w){
	w.document.onreadystatechange = function(){
		if( this.readyState == "complete" ){
			var body = document.querySelector('body'),ftl = new Flattenizer(), 
			finalFlattern;
			body.innerHTML = MDL.templates.index();
			var input = document.querySelector('input#toflatten'), 
			result = document.querySelector('.flatten-result');
			input.addEventListener('keyup',function(e){
				if( e.keyCode === 13 ){
					var tof = JSON.parse(input.value);
					finalFlattern = ftl.flatten( tof );
					result.innerHTML = finalFlattern;
				}
			},false);
		}
	};
})(window);