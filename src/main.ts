import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request,Response } from 'express';

function globalmidddlewareone(req: Request,res:Response, next: NextFunction)
{
  console.log("this is the global middleware number one");
  next();
}
function globalmidddlewaretwo(req: Request,res:Response, next: NextFunction)
{
  console.log("this is the global middleware number two");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalmidddlewareone);
  app.use(globalmidddlewaretwo);
  await app.listen(3000);
}
bootstrap();
