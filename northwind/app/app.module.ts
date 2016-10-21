import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BreezeBridgeAngular2Module } from 'breeze-bridge-angular2'

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BreezeBridgeAngular2Module,
        BrowserModule,
        HttpModule,
        FormsModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
