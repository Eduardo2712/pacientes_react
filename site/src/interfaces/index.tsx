export interface Items {
    id: number;
    nome: string;
    data_nasc: string;
    email: string;
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
}

export interface ReduxModal {
    ativo: boolean;
    titulo: string;
}
