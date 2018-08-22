import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middlewaires/logger.middleware'
import { logger } from './middlewaires/loggerFunc.middleware';
import { CatModule } from './cats/cats.module';
// import { CatController } from './cats/cats.controller';

@Module({
  imports: [CatModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger)
      .with('AppModule')
      .forRoutes('cats');
  }
}
