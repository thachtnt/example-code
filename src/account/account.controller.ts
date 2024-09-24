import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('api/v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async getAccounts() {
    return await this.accountService.getAccount(1);
  }
}
