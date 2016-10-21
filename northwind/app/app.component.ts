import { Component, OnInit } from '@angular/core';
import { EntityQuery } from 'breeze-client';
import { EntityManagerProvider } from './core/services/entity-manager-provider';
import { Customer } from './core/entities/entity-model';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './app.html'
})
export class AppComponent implements OnInit {

    customers: Customer[];

    constructor(private entityManagerProvider: EntityManagerProvider) {

    }

    ngOnInit() {
        this.entityManagerProvider.prepare().then(() => {
            let em = this.entityManagerProvider.newManager();
            let query = EntityQuery.from('Customers'); 
            em.executeQuery(query).then(qr => {
                this.customers = <any>qr.results;
            });
        });
    }
}
