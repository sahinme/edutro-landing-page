import { observable, action } from "mobx";
import categoryService from "../services/category/categoryService";

class CategoryStore {
    @observable categories = [];

    @action
    async getAllCategories() {
        let result = await categoryService.getAllCategories();
        this.categories = result.data;
    }
}

export default CategoryStore;