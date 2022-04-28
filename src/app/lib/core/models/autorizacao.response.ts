export class AutorizacaoResponse {
    public Informacoes!: InformacaoPaginaResponse;
    public PossuiAcesso!: boolean;
}

export class InformacaoPaginaResponse {
    public Breadcrumb!: Array<string>;
    public Favorito!: boolean;
    public Rota!: string;
    public Titulo!: string;
}