import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateArticleDto } from './dto/article.dto';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('article')
  async findAll() {
    const data = await this.appService.findAll();
    return {
      status: 200,
      data: data,
    };
  }

  @Post('create-article')
  async create(@Body() createArticleDto: CreateArticleDto) {
    const data = await this.appService.create(createArticleDto);
    return {
      status: 200,
      data: data,
    };
  }
}
