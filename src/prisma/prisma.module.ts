import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // PrismaService có thể dùng toàn app mà không import module riêng
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule { }
