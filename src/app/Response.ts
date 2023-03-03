//O 'T' pode ser um comentario, um momento...
export interface Response<T> {
    message?: string;
    data: T;
}