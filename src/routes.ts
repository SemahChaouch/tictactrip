const router = require( 'express' ).Router();
const authController = require( './controllers/auth' );
const contentTypeMiddleware = require( './middleware/contentType' );
router.post( '/api/token', contentTypeMiddleware.isJson, authController.postLogin );

module.exports = router;
