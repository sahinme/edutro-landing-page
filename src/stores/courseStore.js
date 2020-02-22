import { action, observable } from 'mobx';
import courseService from '../services/courseService';

class CourseStore {
    @observable course = {};
    @observable searchCourseResult = [];

    @action
    async getCourseById(courseId) {
        let result = await courseService.getCourseById(courseId);
        this.course = result.data;
    }

    @action
    async searchCourses(query, locationId) {
        let result = await courseService.searchCourses(query, locationId);
        this.searchCourseResult = result.data;
    }
}

export default CourseStore;