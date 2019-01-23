import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateService } from 'src/app/date.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  input = new FormControl();
  output = '';
  constructor(private dateService: DateService) { }

  ngOnInit() {
  }
  calc() {
    const value = this.input.value;
    this.output = this.dateService.diffInWordsToNow(value);
  }

}
