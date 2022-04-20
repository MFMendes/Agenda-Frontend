import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AutenticacaoRequest } from "../models/autenticacao.request";
import { UsuarioSessaoResponse } from "../models/usuario-sessao.response";
import { MenuItem } from "../models/menu-item.model";
import { tap } from "rxjs/operators";
import { APP_CONFIG } from "../models/app.token";
// import { AppConfig } from "../models/app.config";
import { MenuTipoEnum } from "../models/menu.model";
import { ModuloResponse } from "../models/modulo-response";
import { AutorizacaoResponse } from "../models/autorizacao.response";
import { UsuarioAutenticadoResponse } from "../models/usuario-autenticado.response";

@Injectable({
	providedIn: "root",
})
export class AutenticacaoService {
	// urlSeguranca: string;
	// urlPortal: string;

	constructor(
		// @Inject(APP_CONFIG) public config: AppConfig,
		private http: HttpClient
	) {
		// this.urlSeguranca = config.environment.config.apis.seguranca;
		// this.urlPortal = config.environment.config.rotas.portalDeAplicacoes;
	}

	// autenticar(
	// 	credenciais: AutenticacaoRequest
	// ): Observable<UsuarioSessaoResponse> {
	// 	return this.http.post<UsuarioSessaoResponse>(
	// 		this.urlSeguranca + "int-app/ad/autenticacao",
	// 		credenciais
	// 	);
	// }

	// autorizar(rota: string, isRotaFilho: boolean): Observable<AutorizacaoResponse> {
	// 	const params = { rota: rota, rotaFilho: isRotaFilho + '' };

	// 	return this.http.get<AutorizacaoResponse>(this.urlSeguranca + "portaldeaplicacoes/tela/acesso", { params: params });
	// }

	// recuperarAutenticacao(): Observable<UsuarioAutenticadoResponse> {
	// 	return this.http.get<UsuarioAutenticadoResponse>(
	// 		this.urlSeguranca + "int-app/ad/autenticacao");
	// }


	// recuperarAcessosPorModulo(): Observable<Array<MenuItem>> {
	// 	return this.http
	// 		.get<Array<MenuItem>>(
	// 			this.urlSeguranca +
	// 			`portaldeaplicacoes/modulo/${this.config.codigoModulo}/menu/acessos`
	// 		)
	// 		.pipe(
	// 			tap((itens) => {
	// 				this.transformarMenu(itens);
	// 			})
	// 		);
	// }

	// recuperarModulos(): Observable<Array<ModuloResponse>> {
	// 	return this.http
	// 		.get<Array<ModuloResponse>>(
	// 			this.urlSeguranca + `portaldeaplicacoes/modulo/acessos`
	// 		)
	// 		.pipe(
	// 			tap((itens) => {
	// 				this.transformarModulo(itens);
	// 			})
	// 		);
	// }

	// transformarMenu(itens: Array<MenuItem>): Array<MenuItem> {
	// 	let urlSemHash = this.urlPortal;
	// 	urlSemHash = urlSemHash.replace("/#/", "/");

	// 	itens.forEach((item) => {
	// 		item.Tipo = MenuTipoEnum.Normal;
    //         if (item.Rota) {
    //             item.Rota = (item.IsLegado === true ? this.urlPortal : urlSemHash) + item.Rota.replace(/\./g, "/");
    //         }

	// 		if (item.Filhos.length > 0) {
	// 			return this.transformarMenu(item.Filhos);
	// 		}
	// 	});
	// 	return itens;
	// }

	// transformarModulo(itens: Array<ModuloResponse>): Array<ModuloResponse> {
	// 	let urlSemHash = this.urlPortal;

	// 	urlSemHash = urlSemHash.replace("/#/", "/");

	// 	itens.forEach((item) => {
	// 		if (item.Rota && item.Rota.indexOf("https") < 0) {
	// 			item.Rota = item.Rota
	// 				? urlSemHash + item.Rota.replace(/\./g, "/")
	// 				: null;
	// 		} else {
	// 			item.Rota = item.Rota ? item.Rota : null;
	// 		}

	// 		if (item.Modulos && item.Modulos.length > 0) {
	// 			return this.transformarModulo(item.Modulos);
	// 		}
	// 	});

	// 	return itens;
	// }
}