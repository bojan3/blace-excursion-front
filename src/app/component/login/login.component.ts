import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService, UserService } from 'src/app/service';

interface DisplayMessage {
  msgType: string;
  msgBody: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  formLogin!: FormGroup;
  formRegister!: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

   /**
   * Notification message from received
   * form request or router
   */
    notification!: DisplayMessage;

    returnUrl!: string;
    private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params
    // .pipe(takeUntil(this.ngUnsubscribe))
    // .subscribe((params: DisplayMessage) => {
    //   this.notification = params;
    // });
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  this.formLogin = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
  });
  this.formRegister = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
    phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
    passwordRetype: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
  });
  }
  login() {
    this.submitted = true;

    this.authService.login(this.formLogin.value)
      .subscribe(data => {
          this.userService.getMyInfo().subscribe((user) => (
            console.log(user)
          ));
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
          this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
        });
  }

  register(){
    this.submitted = true;

    this.authService.signup(this.formRegister.value)
      .subscribe(data => {
          this.router.navigate([this.returnUrl]);
        })
  }

  arePasswordsMatching(){
    return (this.formRegister.value.password != this.formRegister.value.passwordRetype);
  }
}
