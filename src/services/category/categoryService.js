import http from "../httpService";

class CategoryService {
    async getAllCategories() {
        let result = await http.get("api/category/get-all-categories");
        return result;
    }
}
export default new CategoryService();