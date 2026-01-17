export interface UserResponseDto {
    id : number;
    email: string;
    nickname: string;
    profileImage: string | null;
}

export interface MessageDto {
    message : string;
}

// 공통 응답 규격
export interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
}