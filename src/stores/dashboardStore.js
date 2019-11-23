import { action, observable } from "mobx";
import dashboardService from "../services/dashboard/dashboardService";

class DashboardStore {
    @observable advertisingCourses = [];

    @action
    async getAdvertisingCourses() {
        let result = await dashboardService.getAdvertisingCourses();
        this.advertisingCourses = result.data.results;
    }
}
export default DashboardStore;