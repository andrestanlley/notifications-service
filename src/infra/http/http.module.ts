import { CancelNotification } from '@app/use-cases/cancel-notifications';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from '@app/use-cases/get-recipient-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnReadNotification } from '@app/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification.use-case';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnReadNotification,
  ],
})
export class HttpModule {}
