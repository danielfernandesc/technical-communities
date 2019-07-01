import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{
  constructor(private modalService: NgbModal, private afAuth: AngularFireAuth) {
  }

  open(content) {
    this.modalService.open(content);
  }

  loginProvided() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


}
