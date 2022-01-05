import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthSocialLink, NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends NbLoginComponent {


    
    ngOnInit(): void {
        
    }

}
