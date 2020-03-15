import DashboardStore from "./dashboardStore";
import CourseStore from "./courseStore";
import LocationStore from "./locationStore";
import TenantStore from "./tenantStore";

export default function initializeStores() {
    return {
        dashboardStore: new DashboardStore(),
        courseStore: new CourseStore(),
        locationStore: new LocationStore(),
        tenantStore: new TenantStore()
    };
}