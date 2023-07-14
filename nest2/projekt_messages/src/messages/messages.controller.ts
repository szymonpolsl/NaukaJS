import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMassageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages-service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get()
  listMassages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMassages(@Body() body: createMassageDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMassages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
