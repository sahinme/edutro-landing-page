import { action, observable } from 'mobx';
import questionService from '../services/questionService';

class QuestionStore {
    @observable createQuestionResponse = {};

    @action
    async createQuestion(payload) {
        let result = await questionService.createQuestion(payload);
        this.createQuestionResponse = result.data;
    }
}

export default QuestionStore;