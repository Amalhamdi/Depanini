import { Component } from '@angular/core';
import { FicheDE } from '../model/ficheDE.model';
import { FicheDEService } from '../services/fiche-de.service';

@Component({
  selector: 'app-dashboard-ds',
  templateUrl: './dashboard-ds.component.html',
  styleUrls: ['./dashboard-ds.component.css']
})
export class DashboardDsComponent {
  ficheDEs: FicheDE[] = [];

  constructor(private ficheDEService: FicheDEService) { }
  loadFicheDEs(): void {
    this.ficheDEService.getAllFicheDe().subscribe(
      (data: FicheDE[]) => {
        this.ficheDEs = data;
      },
      error => {
        console.error('Error loading fiche DEs:', error);
      }
    );
  }

  ngOnInit(): void {
    this.loadFicheDEs();
  }

}
