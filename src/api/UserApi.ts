import { httpClient } from "./httpClient";
import type { MessageDto} from "../types/user";

export const userApi = {
    // 내정보 가져오기
    test: async () => {
        const response = await httpClient.get<MessageDto>(`/users/test`);
        return response.data;
    }
}