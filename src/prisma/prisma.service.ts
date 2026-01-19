import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        await this.$connect(); // connect DB khi module init
    }

    async onModuleDestroy() {
        await this.$disconnect(); // disconnect DB khi module destroy
    }
}
