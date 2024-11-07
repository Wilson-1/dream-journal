import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Dream } from '@prisma/client';

@Injectable()
export class DreamService {
  constructor(private prisma: PrismaService) {}

  async createDream(data: Prisma.DreamCreateInput): Promise<Dream> {
    return this.prisma.dream.create({ data });
  }

  async getDreams(): Promise<Dream[]> {
    return this.prisma.dream.findMany();
  }

  async getDream(id: number): Promise<Dream> {
    return this.prisma.dream.findUnique({ where: { id } });
  }

  async updateDream(id: number, data: Prisma.DreamUpdateInput): Promise<Dream> {
    return this.prisma.dream.update({
      where: { id },
      data,
    });
  }

  async deleteDream(id: number): Promise<Dream> {
    return this.prisma.dream.delete({ where: { id } });
  }
}
