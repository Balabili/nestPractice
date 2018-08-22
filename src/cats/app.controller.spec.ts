import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cats.controller';
import { AppService } from './cats.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CatController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<CatController>(CatController);
      expect(appController.root()).toBe('Hello World!');
    });
  });
});
