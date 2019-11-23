import http from "../httpService";

class DashboardService {
    async getAdvertisingCourses() {
        let result = await http.get("api/course/get-advertising-courses");
        return result;
    }

    async getAllCourses() {
        let result = await http.get("api/course/get-all-courses");
        return result;
    }
}

export default new DashboardService();