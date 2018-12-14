import { NgModule }                                                                               from '@angular/core';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatSidenavModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule }                                                                from '@angular/platform-browser/animations';
import { RouterModule }                                                                           from '@angular/router';
import { MatAdminComponent }                                                                      from './mat-admin.component';
import { LayoutTopToolbarComponent } from './layout-top-toolbar/layout-top-toolbar.component';

@NgModule({

    declarations: [

        MatAdminComponent,

        LayoutTopToolbarComponent

    ],

    imports: [

        BrowserAnimationsModule,

        MatIconModule,
        RouterModule.forRoot([]),

        MatButtonModule,
        MatExpansionModule,
        MatSidenavModule,
        MatTooltipModule

    ],

    exports: [

        MatAdminComponent

    ]

})
export class MatAdminModule {
}
