import { Request, Response } from 'express';
import Client from '../../index';
import  justifyText from '../utils/justify.utils';

export const postJustify = async( req: Request, res: Response ) => {
    const justifiedText = justifyText( req.body );
    const nbWordsJustified: number = res.locals.nbWordsToJustify;
    const token: string = res.locals.token;

    const nbWordsAlreadyJustified = await Client.get( res.locals.token );

    nbWordsAlreadyJustified !== null ?
        await Client.set( token, parseInt( nbWordsAlreadyJustified ) + nbWordsJustified )
        :
        await  Client.set( token, res.locals.nbWordsToJustify );

    return res.status( 200 ).send( justifiedText );
};