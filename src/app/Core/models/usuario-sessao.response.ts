export class UsuarioSessaoResponse {
    public CodigoEmpresa: number;
    public CodigoUsuario: number;
    public Nome: string;
    public Empresa: string;
    public Token: string;

    constructor(params?: Partial<UsuarioSessaoResponse>) {
        this.CodigoEmpresa = params?.CodigoEmpresa || 0;
        this.CodigoUsuario = params?.CodigoUsuario || 0;
        this.Nome = params?.Nome || '';
        this.Empresa = params?.Empresa || '';
        this.Token = params?.Token || '';
    }
}