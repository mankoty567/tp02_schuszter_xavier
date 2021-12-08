import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { user } from '../user-form/user';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css'],
})
export class UserResultComponent implements OnInit {
  constructor() {}

  @Input() user: user = new user('', '', '', '', '', '', '', '', '', '');
  @Input() isSubmitted: boolean = false;

  ngOnInit(): void {}
}
