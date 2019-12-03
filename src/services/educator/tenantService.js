import http from "../httpService";

class TenantService {
    async getTenantDetails(id){
        let result = await http.get("api/tenant/get-by-id?id="+id);
        return result;
    }
}

export default new TenantService();