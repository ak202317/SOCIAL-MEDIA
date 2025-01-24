const router = require('express').Router();
const postController = require('../controllers/postsController');
const requireUser = require('../middlewares/requireUser');

router.post('/', requireUser, postController.createPostController);
router.post('/like', requireUser, postController.likeAndUnlikePost);
router.put('/', requireUser, postController.updatePostController);
router.delete('/', requireUser, postController.deletePost);

module.exports = router;
