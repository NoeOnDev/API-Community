import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor( private configService: ConfigService ) {
    console.log( this.configService.get('config.port') );
  }
  getHello(): string {
    return 'Hello World!';
  }
}
