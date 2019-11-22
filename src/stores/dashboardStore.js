import { action, observable } from "mobx";
import dashboardService from "../services/dashboard/dashboardService";

class DashboardStore {
    @observable popularCourses = [{ name: "212" }];

    @action
    async getPopularCourses() {
        let result = await dashboardService.getPopularCourses();
        this.popularCourses = result;
    }
}
export default DashboardStore;