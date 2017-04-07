describe("Geolocator", function(){
    it("can find your ZIP code", function(done){
       weather.getLocation( function( data ){
           expect( data.zip ).toBe( "98105" );
           done();
       } );
    } );
    it( "can find your city", function( done ){
        weather.getLocation( function( data ){
            expect( data.city ).toBe( "Seattle" );
            done();
        } );
    } );
} );
describe( "Weather display", function(){
    it( "can display the weather", function(){
        weather.display( "icy" );
        expect( document.getElementById( 'weather' ).innerHTML ).toBe( 'icy' );
    } );
} );
