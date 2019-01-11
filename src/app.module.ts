import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { AsyncLoggerMiddleware } from './common/middlewares/asyncLogger.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consume: MiddlewareConsumer) {
    consume
      .apply(LoggerMiddleware, AsyncLoggerMiddleware)
      .with('AppModule')
      .forRoutes('/cats');
  }
}
