export class Sessao {
	public Nome: string;
	public Token: string;
	public jwt: string;
	public CodigoUsuario?: number;
	public Login: string;

	constructor(params?: Partial<Sessao>) {
		this.Nome = params?.Nome || '';
		this.Token = params?.Token || '';
		this.jwt = params?.jwt || '';
		this.CodigoUsuario = params?.CodigoUsuario;
		this.Login = params?.Login || '';
	}

	hasToken(): boolean {
		return this.Token ? true : false;
	}

	hasJwt(): boolean {
		return this.jwt ? true : false;
	}
}
