import http from "../httpService";

class CourseService {
    async getCourseById(id) {
        let result = await http.get("api/course/get-course-by-id?=" + id);
        return result;
    }

    async getCoursesByCategory(categoryId) {
        let result = await http.get("api/course/get-courses-by-category?=" + categoryId);
        return result;
    }
}

export default new CourseService();