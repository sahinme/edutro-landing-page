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

    async getUpcomingEvents() {
        let result = await http.get("api/event/get-all-events");
        return result;
    }
}

export default new DashboardService();