import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function boostrap() {
  const app = await NestFactory.create(AppModule);

  app.listen(9000);
}

boostrap();
