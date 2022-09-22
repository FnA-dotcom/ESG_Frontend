import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-errors',
  templateUrl: './toast-errors.component.html',
  styleUrls: ['./toast-errors.component.scss'],
  providers: [MessageService]
})
export class ToastErrorsComponent implements OnInit {

  constructor(private messageService: MessageService,) { }

  ngOnInit(): void {
  }

  showError(error) {
    this.messageService.add({severity:'error', summary: 'Error', detail: error.payload.error.message});
    };
}
