export class UsuarioResponse {
    Id!: number;
    Nome!: string;
    Email!: string;
    Login!: string;

    public constructor(params: Partial<UsuarioResponse>) {
        this.Id != params.Id;
        this.Nome != params.Nome;
        this.Email != params.Email;
        this.Login != params.Login;
    }
}