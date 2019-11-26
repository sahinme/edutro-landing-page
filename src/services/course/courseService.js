import http from "../httpService";

class CourseService {
    async getCourseById(id) {
        let result = await http.get("api/course/get-course-by-id?="+id);
        return result;
    }
}

export default new CourseService();