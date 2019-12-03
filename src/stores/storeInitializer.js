import DashboardStore from "./dashboardStore";
import CourseStore from "./courseStore";
import EducatorStore from "./educatorStore";
import TenantStore from "./tenantStore";
import CategoryStore from "./categoryStore";
import CommentStore from "./commentStore";

export default function initializeStores() {
    return {
        dashboardStore: new DashboardStore(),
        courseStore: new CourseStore(),
        educatorStore: new EducatorStore(),
        tenantStore: new TenantStore(),
        categoryStore: new CategoryStore(),
        commentStore: new CommentStore(),
    };
}