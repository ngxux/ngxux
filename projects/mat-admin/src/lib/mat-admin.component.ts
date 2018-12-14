import { Component }       from '@angular/core';
import { MatAdminService } from './mat-admin.service';

@Component({

    selector: 'ngxux-mat-admin',
    template: `

        <div class="ngxux-mat-admin-wrapper">

            <mat-drawer-container>

                <mat-drawer #drawer
                            opened="opened"
                            class="ngxux-admin-vertical-toolbar mat-elevation-z2"
                            mode="side">

                    <div class="wrapper">

                        <div class="top">

                            <mat-icon class="icon">menu</mat-icon>

                        </div>

                        <div class="middle">

                            <div *ngFor="let item of matAdminService.leftMenuItems"
                                 class="item"
                                 routerLinkActive="active"
                                 [routerLink]="[ item.path ]">

                                <mat-icon class="icon">{{ item.icon }}</mat-icon>

                            </div>

                        </div>

                        <div class="bottom">

                            <div class="item">

                                <mat-icon class="icon">exit_to_app</mat-icon>

                            </div>

                        </div>

                    </div>

                </mat-drawer>

                <mat-drawer-content>

                    <ngxux-layout-top-toolbar></ngxux-layout-top-toolbar>
                    <!--<app-layout-top-toolbar></app-layout-top-toolbar>-->
                    <div class="content">

                        <router-outlet></router-outlet>

                    </div>

                </mat-drawer-content>

            </mat-drawer-container>

        </div>


    `,
    styleUrls: [ './mat-admin.component.scss' ]
})
export class MatAdminComponent {

    public constructor(public matAdminService: MatAdminService) {
    }

}
