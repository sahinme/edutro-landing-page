import DashboardStore from "./dashboardStore";

export default function initializeStores() {
    return {
        dashboardStore: new DashboardStore(),
    };
}