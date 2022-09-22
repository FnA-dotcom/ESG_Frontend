import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { BaseRouteReuseStrategy } from './base-route-reuse-strategy.service';

export class CurtomRouteReuseStrategy extends BaseRouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if(route.routeConfig!.path === 'patient-dashboard')
    {
      if(localStorage.getItem('userName'))
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else if(route.routeConfig!.path === 'View-Claim' && localStorage.getItem('userName'))
    {
      return true;
    }
    return false;
  }

  override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.storedRoutes.set(route.routeConfig!.path!, handle);
  }

  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.storedRoutes.get(route.routeConfig!.path!);
  }

  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null  {
    return this.storedRoutes.get(route.routeConfig!.path!) as DetachedRouteHandle;

  }

}