import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityManagerProvider } from './services/entity-manager-provider';

// ATTENTION: Never import this module into a lazy loaded module. Only import into app module.
@NgModule({
    imports: [CommonModule],
    providers: [
        EntityManagerProvider
    ]
})
export class CoreModule { }