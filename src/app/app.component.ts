import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Model, TodoCustomer } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer';

  message = ''
  model = new Model();


  getCustomers() {

    return this.model.customers;


  }

  addCustomer(name, mail, vip) {
    if (name != "" && mail != "" && vip != "") {
      this.model.customers.push(new TodoCustomer(name, mail, vip))
      this.message = '';
    } else {
      this.message = 'Please fill the form.';
    }

  };
}
