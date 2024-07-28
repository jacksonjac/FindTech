import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  WrongAnswer(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private messageService: MessageService) {}

  showSuccess(summary: string, detail: string) {
    console.log("messages showed showsucess")
    this.messageService.add({ severity: 'success', summary: summary, detail: detail });
  }

  showError(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail });
  }

  CorrectAnswer(summary: string, detail: string) {
    console.log("messages showed showsucess")
    this.messageService.add({ severity: 'success', summary: summary, detail: detail });
  }

  Wronganswer(summary: string, detail: string) {
    this.messageService.add({ severity: 'Error', summary: summary, detail: detail });
  }

Info(summary: string, detail: string) {
    this.messageService.add({ severity: 'Custom', summary: summary, detail: detail });
  }

}
