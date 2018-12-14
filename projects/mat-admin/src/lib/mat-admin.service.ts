import { Injectable }       from '@angular/core';
import { MatAdminMenuItem } from './mat-admin-menu-item';

/*
 * asdf as dfasdf as fd
 */
@Injectable({
    providedIn: 'root'
})
export class MatAdminService {

    public leftMenuItems: Array<MatAdminMenuItem> = [];

    public constructor() {

    }

    /**
     * Comment for method ´doSomething´.
     * @param target  Comment for parameter ´target´.
     * @returns       Comment for return value.
     */
    public test123(target: string): boolean {

        return true;

    }

}
