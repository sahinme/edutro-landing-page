import http from "./httpService";

class TenantService {
    async getTenantById(id) {
        let result = await http.get(`api/tenant/get-by-ıd?id=${id}`);
        return result;
    }
}

export default new TenantService();