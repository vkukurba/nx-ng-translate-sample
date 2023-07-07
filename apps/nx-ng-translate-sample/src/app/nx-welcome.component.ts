import { Component } from '@angular/core';

@Component({
  selector: 'nx-sample-welcome',
  template: `
    <div class="welcome">
      {{ 'WELCOME' | translate }}
    </div>
  `
})
export class NxWelcomeComponent {}
