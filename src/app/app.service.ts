import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  async getHello() {
    const test = new Set([1, 2, 3, 3]);
    return test;
  }
}
