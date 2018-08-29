import {
  PipeTransform, Pipe, ArgumentMetadata, Injectable,
  HttpStatus, BadRequestException
} from '@nestjs/common';

@Injectable()
export class ParstIntPipe implements PipeTransform<string>{
  async transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation Failed');
    }
    return val;
  }
}