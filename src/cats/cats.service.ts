import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  root(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
