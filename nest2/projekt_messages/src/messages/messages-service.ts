import { Injectable } from '@nestjs/common';
import { MassagesRepository } from './messages-repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MassagesRepository) {}

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
