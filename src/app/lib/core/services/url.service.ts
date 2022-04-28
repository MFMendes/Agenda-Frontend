import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
	providedIn: "root",
})
export class UrlService {

    constructor(
        @Inject(DOCUMENT) private readonly document: any,
        private router: Router,
        private activateRoute: ActivatedRoute
    ) { }

    irParaLoginComRetorno(): void {
        this.router.navigateByUrl('/login');
    }

}
