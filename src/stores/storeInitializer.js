import DashboardStore from "./dashboardStore";
import CourseStore from "./courseStore";

export default function initializeStores() {
    return {
        dashboardStore: new DashboardStore(),
        courseStore: new CourseStore()
    };
}