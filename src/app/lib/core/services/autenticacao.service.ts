import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { APP_CONFIG } from "../models/app.token";
import { AppConfig } from "../models/app.config";
import { AutorizacaoResponse } from "../models/autorizacao.response";

@Injectable({
	providedIn: "root",
})
export class AutenticacaoService {
	urlApi: string;

	constructor(
		@Inject(APP_CONFIG) public config: AppConfig,
		private http: HttpClient
	) {
		this.urlApi = config.environment.api;
	}

	autorizar(rota: string, isRotaFilho: boolean): Observable<AutorizacaoResponse> {
		const params = { rota: rota, rotaFilho: isRotaFilho+'' };

		return this.http.get<AutorizacaoResponse>(this.urlApi + "inicio/listagem", { params: params });
	}
}