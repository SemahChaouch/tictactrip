import { Request, Response, NextFunction } from 'express';
module.exports = {
    isJson: async( req: Request, res: Response, next: NextFunction ) => {
        const contentType: string|undefined = req.headers[ 'content-type' ];

        if ( contentType !== 'application/json' ) {
            return res.status( 415 ).send( { message: 'The content-type is not application/json' } );
        }
        next();
    }
};