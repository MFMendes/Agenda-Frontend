import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

declare var KTLayout: any;

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styles: []
})
export class MainComponent implements OnInit {
	subscription!: Subscription;
	mensagem: any;	

	ngOnInit() {
        KTLayout.init();
    }
}