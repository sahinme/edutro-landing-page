import http from "./httpService";

class QuestionService {
    async createQuestion(payload) {
        let result = await http.post(`api/question/create-question`, payload);
        return result;
    }
}

export default new QuestionService();