const router = require( 'express' ).Router();
const authController = require( './controllers/auth' );
const justifyController = require( './controllers/justify' );
const authMiddleware = require( './middleware/auth' );
const limitMiddleware = require( './middleware/limit' );
const contentTypeMiddleware = require( './middleware/contentType' );
router.post( '/api/token', contentTypeMiddleware.isJson, authController.login );
router.post( '/api/justify', authMiddleware.tokenCheck, contentTypeMiddleware.isTextPlain,
    limitMiddleware.limitReached, justifyController.postJustify );
    
module.exports = router;
