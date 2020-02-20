import { action, observable } from 'mobx';
import courseService from '../services/courseService';

class CourseStore {
    @observable course = {};

    @action
    async getCourseById(courseId) {
        let result = await courseService.getCourseById(courseId);
        this.course = result.data;
    }
}

export default CourseStore;