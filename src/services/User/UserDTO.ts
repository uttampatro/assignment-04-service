export interface SaveUserDTO {
    email: string;
}

export interface RegisterDTO {
    username: string;
    email: string;
    password: string;
    image: string;
    totalOrders: number;
}

export interface DeleteDTO {
    id: string;
}

export interface DetailsDTO {
    id: string;
}

export interface ImageDTO {
    id: string;
}

export interface UpdateDTO {
    id: string;
    username: string;
    email: string;
    password: string;
    image: string;
}
