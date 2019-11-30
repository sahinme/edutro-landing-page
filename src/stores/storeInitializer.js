import DashboardStore from "./dashboardStore";
import CourseStore from "./courseStore";
import EducatorStore from "./educatorStore";

export default function initializeStores() {
    return {
        dashboardStore: new DashboardStore(),
        courseStore: new CourseStore(),
        educatorStore: new EducatorStore()
    };
}