import { Component, OnInit } from '@angular/core';

import { FicheDE } from '../model/ficheDE.model';
import { FicheDSService } from '../services/fiche-ds.service';
import { FicheDS } from '../model/ficheDS.model';

@Component({
  selector: 'app-dashboard-de',
  templateUrl: './dashboard-de.component.html',
  styleUrls: ['./dashboard-de.component.css']
})
export class DashboardDEComponent implements OnInit {
  ficheDSs: FicheDS[] = [];

  constructor(private ficheDSService: FicheDSService) { }

  ngOnInit(): void {
    this.loadFicheDEs();
  }

  loadFicheDEs(): void {
    this.ficheDSService.getAllFicheDs().subscribe(
      (data: FicheDS[]) => {
        this.ficheDSs = data;
      },
      error => {
        console.error('Error loading fiche DEs:', error);
      }
    );
  }
}
