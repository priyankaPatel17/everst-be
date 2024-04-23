import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TaskHistoryService } from 'src/task-history.service';

@Injectable()
export class TaskHistoryInterceptor implements NestInterceptor {

   constructor(private readonly historyService: TaskHistoryService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { user } = request;
    const timestamp = new Date();
    const endpoint = context.getHandler().name;
    // Access the request object and perform history tracking logic here

    return next.handle().pipe(
      tap(data => {
        const historyRecord = {
            userId: user ? user.id : null,
            timestamp,
            endpoint,
            title: request.body.title,
            description: request.body.description
            // Add more fields as needed
          };
          this.historyService.logHistory(historyRecord);
      }),
    );
  }
}
