export type LoginResponse = {
   id: number;
   nome: string;
   email: string;
   senha?: string;
   confirmarSenha?: string;
   ativo: boolean;
   dataDeCriacao?: string;
   dataDeAlteracao?: string;
}
export interface DadosResponse<T> {
    dados:T;
    mensagem: string;
    sucesso: boolean;
}
export interface RequestLogin{
    nome?: string;
    email: string;
    senha: string;
    confirmarSenha: string;
}