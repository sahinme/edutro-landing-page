import http from "./httpService";

class CourseService {
    async getCourseById(courseId) {
        let result = await http.get(`api/course/get-course-by-ıd?id=${courseId}`);
        return result;
    }

    async searchCourses(query, locationId) {
        let result = await http.get(`api/course/search-courses?query=${query}&locationId=${locationId}`);
        return result;
    }
}

export default new CourseService();