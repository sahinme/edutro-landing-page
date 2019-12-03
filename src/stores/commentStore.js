import { observable, action } from "mobx";
import commentService from "../services/comment/commentService";

class CommentStore {
    @observable comments = [];

    @action
    async getEntityComments(entityId, entityName) {
        let result = await commentService.getEntityComments(entityId, entityName);
        debugger;
        this.comments = result.data.results;
    }
}

export default CommentStore;