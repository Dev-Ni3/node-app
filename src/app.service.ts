import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateArticleDto } from './dto/article.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async findAll() {
    try {
      return await this.prisma.articles.findMany({ where: { published: true } });
    } catch (err) {
      throw new Error(err)
    }
  }

  async create(createArticleDto: CreateArticleDto) {
    try {
      return await this.prisma.articles.create({ data: createArticleDto });
    } catch (err) {
      throw new Error(err)
    }
  }
}
