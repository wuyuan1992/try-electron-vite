/* eslint-disable prettier/prettier */
// import sqlite3, { Database } from 'sqlite3';
import { PrismaClient } from '@prisma/client';
import { IpcMainEvent, ipcMain } from 'electron';
import ipcEvents from '../../constants/ipcEvents';

interface DbActionArgs {
  model: '';
  action: 'create' | 'findMany';
  options: unknown;
}

export default class SqliteService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();

    ipcMain.on(ipcEvents.DB, this.handler);
  }

  private handler(event: IpcMainEvent, ars: DbActionArgs): void {
    console.log(event, ars);

    this.prisma.user.create({
      data: {
        name: 'Bob',
        email: 'bob@prisma.io',
      },
    });
  }

  async close(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
