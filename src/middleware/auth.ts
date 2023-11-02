import { Request, Response, NextFunction } from 'express';
import Client from '../../index';
const { isAuthenticated } = require( '../utils/auth.utils' );

module.exports = {
    tokenCheck: async( req: Request, res: Response, next: NextFunction ) => {
        if ( req.headers.authorization === undefined ) {
            return res.status( 400 ).json( { message: 'Token not found' } );
        }

        const token: string = req.headers.authorization.split( ' ' )[ 1 ];

        if ( !await isAuthenticated( Client, token ) ) {
            return res.status( 400 ).json( { message: 'Invalid token' } );
        }
        res.locals.token = token;
        next();
    }
};