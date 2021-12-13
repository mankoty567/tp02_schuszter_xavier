import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { user } from "./user";
import { FormsModule } from "@angular/forms";
import { ClientServiceService } from "./client-service.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
  providers: [ClientServiceService],
})
export class UserFormComponent implements OnInit {
  constructor(private userService: ClientServiceService) {}

  ngOnInit(): void {}

  user: user = new user("", "", "", "", "", "", "", "", "", "");
  submitted: boolean = false;
  nbSubmit: number = 0;

  onSubmit() {
    this.nbSubmit++;
    let err = false;
    if (
      !this.user.hasEmptyField() &&
      this.user.password === this.user.passwordConfirm
    ) {
      this.submitted = true;
    }
  }
  //input()
  //output() ==> Pour passer d'un composant à l'autre
}

//Ligne trouvée sur learnersBucket pour l'algo
@Pipe({
  name: "phonePipe",
})
export class PhonePipe implements PipeTransform {
  transform(str: string) {
    let cleaned: string = ("" + str).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return null;
  }
}
