import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "./api.service";
import { Worker } from '../models/workers'
import { WorkersService } from "./workers.service";

export const workersResolver: ResolveFn<Worker[]> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(WorkersService).setWorkers();   
};  