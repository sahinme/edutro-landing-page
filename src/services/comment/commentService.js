import http from "../httpService";

class CommentService {
    async getEntityComments(entityId, entityName) {
        let result = await http.get("api/comment/get-entity-comments", { params: { entityId, entityName } });
        return result;
    }
}

export default new CommentService();