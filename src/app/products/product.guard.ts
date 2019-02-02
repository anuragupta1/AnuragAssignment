import { Injectable} from '@angular/core' ;
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router' ;


@Injectable()



export class RouterGuards implements CanActivate {
    constructor(private _router: Router) {}
    // canactivate retruns true or false
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // looks for number
        const id = +route.url[1].path;
        // if is not a number ,meaning it is string or id is less than 1
        if ( isNaN(id) || id < 1) {
            alert('invalid Id');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }

}
