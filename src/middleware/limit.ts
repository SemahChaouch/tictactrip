import { Request, Response, NextFunction } from 'express';
import Client from '../../index';

module.exports = {
    isRateLimitReached: async( req: Request, res: Response, next: NextFunction ) => {
        const nbWordsAlreadyJustified: string | null = await Client.get( res.locals.token );
        const nbWordsToJustify: number = req.body.split(' ').length;

        res.locals.nbWordsToJustify = nbWordsToJustify;
        if ( nbWordsAlreadyJustified !== null && parseInt( nbWordsAlreadyJustified ) + nbWordsToJustify >= 60 ) {
            return res.status( 402 ).send( { message: 'Payment Required' } );
        }

        next();
    }
};