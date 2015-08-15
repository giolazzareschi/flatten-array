;(Flattenizer = function(){
	/* 
		buffer : stores the final flatten array
		flatten: executes recursevely the flatten operation  */
	this.flatten = function( arr ){		
		var me = this;			
		me.buffer = [];
		return arr ? recursive.bind( this, arr )() : [];
	};

	function add( vl ){
		this.buffer.push( vl );
	};

	function recursive( arr ){		
		for( var p in arr ){ 
			var md = arr[ p ];
			if( !Array.isArray( md.length ) )
				add.apply( this, [md] );

			recursive.apply( this, [md] );
		}
		return this.buffer;
	}

	/* public methods */
	return {
		flatten : this.flatten
	};
});