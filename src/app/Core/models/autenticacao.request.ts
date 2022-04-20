export class AutenticacaoRequest {
    public Login: string;
    public Senha: string;
    
    constructor(params?: Partial<AutenticacaoRequest>){
        this.Login = params!.Login || '';
        this.Senha = params!.Senha || '';
    }
}