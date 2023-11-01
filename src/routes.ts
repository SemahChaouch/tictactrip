const router = require( 'express' ).Router();
const authController = require( './controllers/auth' );
const justifyController = require( './controllers/justify' );
const authMiddleware = require( './middleware/auth' );
const rateLimitMiddleware = require( './middleware/limit' );
const contentTypeMiddleware = require( './middleware/contentType' );
router.post( '/api/token', contentTypeMiddleware.isJson, authController.postLogin );
router.post( '/api/justify', authMiddleware.isLoggedApi, contentTypeMiddleware.isTextPlain,
    rateLimitMiddleware.isRateLimitReached, justifyController.postJustify );
    
module.exports = router;
