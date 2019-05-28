import {Component, OnInit} from '@angular/core';
import {BioDataService} from './bioData.service';

@Component({
  selector: 'app-bio-data',
  templateUrl: './bioData.component.html',
  styleUrls: ['./bioData.component.scss']
})
export class BioDataComponent implements OnInit {
  private bioData: any;
  public Logo: string = '../../assets/images/harish.jpg';

  constructor(public bioDataService: BioDataService) {
  }

  public ngOnInit() {
    this.bioDataService.bioData().subscribe(
      resp => {
        this.bioData = resp.personalData;
      });
  }
}
