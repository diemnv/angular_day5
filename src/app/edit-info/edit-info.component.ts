import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToProfile() {
    setTimeout(() => {
      this.router.navigate(['/user/profile'])
    }, 2000);
  }
}
