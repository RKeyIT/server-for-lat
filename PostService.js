import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    create(post, avatar) {
        const fileName = FileService.save(avatar)
        return Post.create({...post, avatar: fileName});
    }

    getList() {
        return Post.find()
    }

    getPost(id) {
        if (!id) {
            throw new Error('ID did not found!')
        }
        return Post.findById(id);
    }
    async update(post) {
        if (!post._id) {
            throw new Error('ID did not found!')
        }
        return Post.findByIdAndUpdate(post._id, post, {new: true})
    }

    delete(id) {
        if (!id) {
            throw new Error('ID did not found!')
        }
        return Post.findByIdAndDelete(id)
    }
}

export default new PostService();