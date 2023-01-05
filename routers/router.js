import {Router} from "express";
import PostController from "../controllers/PostController.js";

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getList)
router.get('/posts/:id', PostController.getPost)
router.put('/posts/:id', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router;