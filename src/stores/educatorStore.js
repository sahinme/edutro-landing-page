import { observable, action } from "mobx";
import educatorService from "../services/educator/educatorService";

class EducatorStore {
    @observable educator = [];

    @action
    async getEducatorDetail(id) {
        let result = await educatorService.getEducatorDetail(id);
        this.educator = result;
    }
}
export default EducatorStore;