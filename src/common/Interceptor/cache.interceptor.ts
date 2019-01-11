import { Injectable, NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable, of } from "rxjs";

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
    const isCache = true;
    if (isCache) {
      return of([]);
    }
    return call$;
  }
}