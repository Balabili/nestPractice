import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>>{
  intercept(context: ExecutionContext, call$: Observable<T>): Observable<Response<T>> {
    // 加入response=[],返回{data:[]}
    return call$.pipe(map(data => ({ data })));
  }
}