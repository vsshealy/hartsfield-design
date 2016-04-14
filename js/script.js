$( function(){

	//header
	var header = $( "#header-primary" );
	var content = $( ".content-wrapper" );

	var resize = function resize(){

		// if( $( window ).width() < 900 ){

		// 	content.css( { "padding-top" : header.innerHeight() } );
		// }
		// else{
		// 	content.removeAttr( "style" );
		// }

		content.css( { "padding-top" : header.innerHeight() } );
	};

	$( window ).on( "load, resize", function( e ){ resize(); } );
} );