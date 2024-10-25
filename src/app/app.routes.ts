import { Routes } from '@angular/router';
import { NotificationModule } from './modules/notification/notification.module';
import { AppLogModule } from './modules/app-log/app-log.module';

export const routes: Routes = [
    {path: '', loadChildren: ()=> NotificationModule},
    {path: 'app-log', loadChildren: ()=> AppLogModule}
];
