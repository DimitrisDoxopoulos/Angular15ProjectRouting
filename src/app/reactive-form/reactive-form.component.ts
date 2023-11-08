import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent {
  hide = true;

  @Output() user = new EventEmitter<User>()
  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    this.user.emit(this.form.value as User)
    this.form.reset();
  }
}
