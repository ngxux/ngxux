import { Component }                      from '@angular/core';
import { TableColumn }                    from '../../projects/ngxux-mat-table/src/lib/table-column';
import { NgxuxMatVerticalToolbarItem }    from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar-item';
import { NgxuxMatVerticalToolbarService } from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public columns: Array<TableColumn> = [ {

        key: 'name',
        label: 'Name'

    }, {

        key: 'id',
        label: 'ID'

    } ];

    public data: Array<any> = [

        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },

    ];

    public constructor(private ngxuxMatVerticalToolbarService: NgxuxMatVerticalToolbarService) {

        ngxuxMatVerticalToolbarService.leftMenuItems = [

            new NgxuxMatVerticalToolbarItem({ icon: 'home', path: '/home', tooltip: 'Go home!' }),
            new NgxuxMatVerticalToolbarItem({ icon: 'settings', path: '/settings', tooltip: 'Go settings!' }),

        ];

        ngxuxMatVerticalToolbarService.click$.subscribe((item: NgxuxMatVerticalToolbarItem) => {

            console.log(item);

        });
    }

    public rowClicked(e: any): void {

        console.log(e);

    }

}
