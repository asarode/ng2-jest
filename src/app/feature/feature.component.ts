import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'feature',
    template: `
        <h2>Application Feature!</h2>
        <br />
        <a routerLink="/">Back to Home</a>
    `
})
export class FeatureComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}