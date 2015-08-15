;(Flattenizer = function(){
	/* 
		buffer : stores the final flatten array
		flatten: executes recursevely the flatten operation  */
	this.flatten = function( arr ){		
		var me = this;			
		me.buffer = [];
		return arr ? recursive.bind( this, arr )() : [];
	};

	/*
		add:  adds values to the buffer
	*/
	function add( vl ){
		this.buffer.push( vl );
	};

	/*
		recursive:  starts the recursive operation over the initial nested array to be flattened
	*/
	function recursive( arr ){		
		for( var p in arr ){ 
			var md = arr[ p ]; //gets the current value
			if( !Array.isArray( md ) ) // validates if it's an array
				add.apply( this, [md] );

			recursive.apply( this, [md] ); //recurse it
		}
		return this.buffer;
	}

	/* public methods */
	return {
		flatten : this.flatten
	};
});

var flattenizer = new Flattenizer(); //initialize an object
finalflatten = flattenizer.flatten([2,3,2,3,[2,3,[2,4],[3]],3]); //call the method
console.log( finalflatten ); //output the result