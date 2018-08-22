import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatService } from './cats.service';

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService],
})
export class CatModule {
  constructor(private readonly catService: CatService) { }
}
