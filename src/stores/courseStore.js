import { observable, action } from "mobx";
import courseService from "../services/course/courseService";

class CourseStore {
    @observable course = {}

    @action
    async getCourseById(id) {
        debugger;
        let result = await courseService.getCourseById(id);
        this.course = result.data;
    }
}

export default CourseStore;