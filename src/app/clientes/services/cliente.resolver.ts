import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';




import { ClienteService } from './cliente.service';

@Injectable()
export class ClienteResolver implements Resolve<Observable<any>> {
  constructor(private service: ClienteService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.get(route.paramMap.get('id'));
  }
}
