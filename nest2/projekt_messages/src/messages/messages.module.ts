import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages-service';
import { MassagesRepository } from './messages-repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MassagesRepository],
})
export class MessagesModule {}
