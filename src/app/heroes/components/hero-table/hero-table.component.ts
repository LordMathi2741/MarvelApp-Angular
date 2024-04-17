import { Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {ApiFakeService} from "../../services/api-fake.service";
import {Hero} from "../../models/hero.entity";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-hero-table',
  standalone: true,
  imports: [MatTableModule, NgOptimizedImage],
  templateUrl: './hero-table.component.html',
  styleUrl: './hero-table.component.css'
})
export class HeroTableComponent implements OnInit {
  heroes: Hero[] = [];
  dataSource: Hero[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'modified','thumbnail'];
  constructor(private apiService: ApiFakeService) { }

  ngOnInit(): void {
     this.created();
  }
  created() {
    this.apiService.getHeroes().subscribe((data) => {
      console.log(data.data);
      this.heroes = data.data.results;
      this.dataSource = this.heroes;
    });
  }
}
