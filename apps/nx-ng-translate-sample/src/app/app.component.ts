import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nx-ng-translate-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  langChoice?: string;
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');

    this.translate.use('en')
      .subscribe(() => this.setLangChoice());
  }

  onSelectLang(evt: Event) {
    this.translate.use((evt.target as HTMLSelectElement).value)
      .subscribe(() => this.setLangChoice());
  }

  private setLangChoice() {
    this.langChoice = this.translate.instant('LANG_CHOICE')
  }
}
