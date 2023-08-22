import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title :string = "";
  @Input() description :string = "";
  @Input() isOpen: boolean = false;

  @Output() closeModal = new EventEmitter<boolean>();

  recibirInfo(title:string, description:string, isOpen: boolean){
    this.title = title;
    this.description = description;
    this.isOpen = isOpen;
  }
  toggleModal(){
    this.isOpen = !this.isOpen
    this.closeModal.emit(false);
  }
}