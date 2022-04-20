import { MenuTipoEnum } from './menu.model';

export class MenuItem {
    public Codigo?: number;
    public Icone?: string;
    public Nome?: string;
    public Rota?: string;
    public Termos?: string;
    public Titulo?: string;
    public Filhos?: Array<MenuItem>;
    public Tipo?: MenuTipoEnum;
    public IsLegado?: boolean;

    constructor(params? : Partial<MenuItem>) {
        this.Codigo = params?.Codigo;
        this.Icone = params?.Icone;
        this.Nome = params?.Nome;
        this.Rota = params?.Rota;
        this.Termos = params?.Termos;
        this.Titulo = params?.Titulo;
        this.Filhos = params?.Filhos;
        this.Tipo = params?.Tipo;
        this.IsLegado = params?.IsLegado;
    }
}