import http from "../httpService";

class EducatorService {
    async getEducatorDetail(id) {
        let result = await http.get("api/educator/get-educator-by-id?=" + id);
        return result;
    }
}

export default new EducatorService();