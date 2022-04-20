export class Menu {
    public Id!: number;
    public Nome!: string;
    public Link!: string;
    public Tipo?: MenuTipoEnum;
    public Icone?: string;
    public Filhos?: Array<Menu>;
}

export enum MenuTipoEnum {
    Normal,
    Bloco
}