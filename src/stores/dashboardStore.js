import { action, observable } from "mobx";
import dashboardService from "../services/dashboard/dashboardService";

class DashboardStore {
    @observable advertisingCourses = [];
    @observable upcomingEvents = [];
    @action
    async getAdvertisingCourses() {
        let result = await dashboardService.getAdvertisingCourses();
        this.advertisingCourses = result.data.results;
    }

    @action
    async getUpcomingEvents() {
        let result = await dashboardService.getUpcomingEvents();
        this.upcomingEvents = result.data;
    }
}
export default DashboardStore;