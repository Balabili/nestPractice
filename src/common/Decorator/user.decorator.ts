import { createRouteParamDecorator } from '@nestjs/common';

export const User = createRouteParamDecorator((data, req) => {
  // @User('test')  data=test
  console.log(data);
  return req.user;
});