import { Get, Controller, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CatService } from './cats.service';
import { CreateCatDto } from './dto/cat.dto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @HttpCode(200)
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  root(): string {
    return this.catService.root();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<any[]> {
    console.log(params.id);
    return [];
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
