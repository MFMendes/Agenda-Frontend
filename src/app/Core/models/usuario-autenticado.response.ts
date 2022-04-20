export class UsuarioAutenticadoResponse {
    public Codigo: number;
    public Nome: string;
    public CodigoPerfil: number;
    public Ativo: boolean;

    constructor(params?: Partial<UsuarioAutenticadoResponse>) {
        this.Codigo = params?.Codigo || 0;
        this.Nome = params?.Nome || '';
        this.CodigoPerfil = params?.CodigoPerfil || 0;
        this.Ativo = params?.Ativo || false;
    }
}