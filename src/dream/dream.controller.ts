import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DreamService } from './dream.service';
import { Dream } from '@prisma/client';

@ApiTags('dreams')
@Controller('dreams')
export class DreamController {
  constructor(private readonly dreamService: DreamService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new dream' })
  @ApiResponse({ status: 201, description: 'The dream has been successfully created.' })
  async create(@Body() dreamData: Dream): Promise<Dream> {
    return this.dreamService.createDream(dreamData);
  }

  @Get()
  @ApiOperation({ summary: 'Get all dreams' })
  @ApiResponse({ status: 200, description: 'List of all dreams.' })
  async findAll(): Promise<Dream[]> {
    return this.dreamService.getDreams();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific dream' })
  @ApiResponse({ status: 200, description: 'The dream record.' })
  async findOne(@Param('id') id: string): Promise<Dream> {
    return this.dreamService.getDream(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a dream' })
  @ApiResponse({ status: 200, description: 'The dream has been successfully updated.' })
  async update(@Param('id') id: string, @Body() dreamData: Dream): Promise<Dream> {
    return this.dreamService.updateDream(Number(id), dreamData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a dream' })
  @ApiResponse({ status: 200, description: 'The dream has been successfully deleted.' })
  async remove(@Param('id') id: string): Promise<Dream> {
    return this.dreamService.deleteDream(Number(id));
  }
}
