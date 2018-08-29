import { PipeTransform, Pipe, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length) {
      throw new BadRequestException('Validation Failed');
    }
    return value;
  }

  private toValidate(metatype): boolean {
    // 排除js原生类型
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type)
  }
}
