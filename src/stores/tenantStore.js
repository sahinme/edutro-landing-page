import tenantService from "../services/educator/tenantService";
import { action, observable } from "mobx";

class TenantStore {
    @observable tenant = {};

    @action
    async getTenantDetails(id) {
        let result = await tenantService.getTenantDetails(id);
        this.tenant = result.data;
    }
}

export default TenantStore;