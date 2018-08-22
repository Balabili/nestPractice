import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common'

function awaitJob() {
  return new Promise((resovle) => {
    console.log('await');
    resovle();
  });
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<MiddlewareFunction> {
    await awaitJob();
    return async (req, res, next) => {
      await awaitJob();
      console.log(`${name} Request...`);
      next();
    }
  }
}