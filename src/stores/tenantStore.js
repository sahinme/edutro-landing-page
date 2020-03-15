import { action, observable } from 'mobx';
import tenantService from '../services/tenantService';

class TenantStore {
    @observable tenant = {};

    @action
    async getTenantById(id) {
        let result = await tenantService.getTenantById(id);
        this.tenant = result.data;
    }
}

export default TenantStore;