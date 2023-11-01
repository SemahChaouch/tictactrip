import { v4 as uuidv4 } from 'uuid';
import { RedisType } from './types.utils';

export const generateToken = (): string => {
    return uuidv4();;
};
export const setToken = async( Client: RedisType, email: string, token: string ): Promise<void> => {
    await Client.set( token, email );
    await Client.expire( token, 60 * 60 * 24 );
};
export const isAuthenticated = async( Client: RedisType, token: string ): Promise<number> => {
    return await Client.exists( token );
}

