import {
  Get, Controller, Post, HttpCode, Param, Body,
  UseFilters, UseGuards, ReflectMetadata,
  // HttpException, HttpStatus, ForbiddenException
} from '@nestjs/common';
import { CatService } from './cats.service';
import { CreateCatDto } from './dto/cat.dto';
import { Cat } from './interface/cat.interface';
import { ForbiddenException } from '../Exception/forbidden.exception';
import { HttpExceptionFilter } from '../Exception/http-exception.filter';
import { ParstIntPipe } from '../pipe/parse-int.pipe';
import { RolesGuard } from '../guard/role.guard';
import { Roles } from '../decorator/roles.decorator';

@Controller('cats')
// @UseGuards(RolesGuard)
@UseGuards(new RolesGuard())
export class CatController {
  constructor(private readonly catService: CatService) { }

  @HttpCode(200)
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  // @ReflectMetadata('role', ['admin'])
  @Roles('admin')
  root(): string {
    return this.catService.root();
  }

  @Post(':id')
  async findOne(@Param('id', new ParstIntPipe()) id): Promise<any[]> {
    console.log(id);
    return [];
  }

  @Get('/findAll')
  findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get('/throwError1')
  throwError() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   error: 'This is a custom message',
    // }, 403);
    throw new ForbiddenException();
  }

  @Get('/throwError2')
  @UseFilters(new HttpExceptionFilter())
  throwError2() {
    throw new ForbiddenException();
  }
}
