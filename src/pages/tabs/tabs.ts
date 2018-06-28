import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AudioPage } from '../audio/audio';
import { RecordPage } from '../record/record';
import { InputPage } from '../input/input';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AudioPage;
  tab3Root = RecordPage;
  tab4Root = InputPage;

  constructor() {

  }
}
