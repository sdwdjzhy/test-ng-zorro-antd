import { CommonModule } from "@angular/common";
import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  imports: [NzSelectModule, NzModalModule, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  constructor(private modal: NzModalService) {
  }

  value = signal<string>('jack');

  changeValue(val: string) {
    if (val == 'lucy1') {
      this.modal.confirm({
        nzContent: 'Confirm change?',
        nzOnOk: () => {
          this.value.set(val);
        },
      });
    } else {
      this.value.set(val);
    }
  }
}
