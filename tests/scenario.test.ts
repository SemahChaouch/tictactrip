import request from 'supertest';
const { Client, app } = require( '../index' );
import { firstText, firstTextJustifie } from './texts';


describe( 'Justify', () => {

    afterAll( () => {
        Client.quit();
    } );

    let responseAuth: request.Response;
    let responseJustify: request.Response;

    beforeAll( async() => {
        responseAuth = await request( app ).post( '/api/token' ).send( {
            email: 'test@test.com'
        } );
        
        responseJustify = await request( app ).post( '/api/justify' )
            .set( 'Authorization', 'bearer ' + responseAuth.body.token )
            .set( 'Content-Type', 'text/plain' )
            .send( firstText );
    } );

    it( 'code 200', () => {
        expect( responseJustify.statusCode ).toEqual( 200 );
    } );
    
    it( 'same justification', () => {
        expect( responseJustify.text ).toEqual( firstTextJustifie );
    } );
} );