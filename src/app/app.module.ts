import { NgModule }                      from '@angular/core';
import { MatSidenavModule }              from '@angular/material';
import { BrowserModule }                 from '@angular/platform-browser';
import { RouterModule }                  from '@angular/router';
import { MatAdminModule }                from '../../projects/mat-admin/src/lib/mat-admin.module';
import { NgxuxMatTableModule }           from '../../projects/ngxux-mat-table/src/lib/ngxux-mat-table.module';
import { NgxuxMatToolbarModule }         from '../../projects/ngxux-mat-toolbar/src/lib/ngxux-mat-toolbar.module';
import { NgxuxMatVerticalToolbarModule } from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar.module';

import { AppComponent } from './app.component';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [
        RouterModule.forRoot([]),

        BrowserModule,

        MatSidenavModule,

        MatAdminModule,

        NgxuxMatTableModule,
        NgxuxMatToolbarModule,
        NgxuxMatVerticalToolbarModule,

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
