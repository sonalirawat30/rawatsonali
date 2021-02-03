import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  addLanguages =['en', 'hi'];
  constructor( private translate: TranslateService) { 
    translate.addLangs(this.addLanguages);
    translate.setDefaultLang('en');
   
  }

  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
