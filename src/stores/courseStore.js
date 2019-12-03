import { observable, action } from "mobx";
import courseService from "../services/course/courseService";

class CourseStore {
    @observable course = {}
    @observable coursesByCategory = []

    @action
    async getCourseById(id) {
        debugger;
        let result = await courseService.getCourseById(id);
        this.course = result.data;
    }
    @action
    async getCoursesByCategory(categoryId) {
        let result = await courseService.getCoursesByCategory(categoryId);
        this.coursesByCategory = result.data.results;
    }
}

export default CourseStore;