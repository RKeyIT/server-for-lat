import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.avatar);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getList(req, res) {
        try {
            const list = await PostService.getList()
            return res.json(list)
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getPost(req, res) {
        try {
            const post = await PostService.getPost(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();