import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

function awaitJob() {
  return new Promise((res) => {
    console.log('async');
    res();
  });
}

@Injectable()
export class AsyncLoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<MiddlewareFunction> {
    await awaitJob();
    return async (req, res, next) => {
      await awaitJob();
      console.log(`${name} Async Request...`);
      next();
    };
  }
}