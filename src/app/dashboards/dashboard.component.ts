import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public cards = [
    {title: 'About Me', imagePath: '../../assets/images/aboutMe.png', url: './bioData'},
    {title: 'Education', imagePath: '../../assets/images/education.jpg', url: './education'},
    {title: 'Projects/Experience', imagePath: '../../assets/images/projects.jpg', url: './experience'},
    {title: 'Skills', imagePath: '../../assets/images/skills.jpg', url: './skills'},
  ];
  constructor(protected router: Router) {
  }
}
