import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() menuEventEmitter = new EventEmitter<boolean>();
  menuOpen: boolean = false

  toggle() {
    console.log("toggle")
    this.menuOpen = !this.menuOpen
    this.menuEventEmitter.emit()
  }
}
