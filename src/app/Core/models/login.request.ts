export class LoginRequest {
    public Login?: string;
    public Senha?: string;

    constructor(params: Partial<LoginRequest>) {
        this.Login = params.Login;
        this.Senha = params.Senha;
    }
}