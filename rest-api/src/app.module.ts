import { MONGO_CONNECTION } from './courses/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { CoursesModule } from "./courses/courses.module";


@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot(MONGO_CONNECTION)
  ]
})
export class AppModule {

}
