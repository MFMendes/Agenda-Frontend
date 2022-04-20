export class ModuloResponse {
    public Codigo?: number;
    public Nome?: string;
    public Icone?: string;
    public Rota?: string;
    public Modulos?: Array<ModuloResponse>;

    constructor(params? : Partial<ModuloResponse>) {
        this.Codigo = params?.Codigo;
        this.Icone = params?.Icone;
        this.Nome = params?.Nome;
        this.Rota = params?.Rota;
        this.Modulos = params?.Modulos;
    }
}