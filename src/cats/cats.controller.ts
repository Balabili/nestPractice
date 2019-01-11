import { Controller, Get, Post, HttpCode, Param, Body, ValidationPipe, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/createCat.dto';
import { ForbiddenException } from '../common/Exceptions/forbidden.exception';
import { LoggingInterceptor } from '../common/Interceptor/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Get()
  async findAll(): Promise<CreateCatDto[]> {
    return this.catsService.findAll();
  }

  @Get('detail/:id')
  findOne(@Param('id', new ParseIntPipe()) params) {
    console.log(params);
    return {};
  }

  @Get('err')
  throwErr() {
    throw new ForbiddenException();
  }

  @HttpCode(200)
  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
