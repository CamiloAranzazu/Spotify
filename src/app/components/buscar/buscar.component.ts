import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  artistas: any [] = [];
  loading: boolean;
  constructor( private serviceSpotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    this.serviceSpotify.getArtistas(termino)
    .subscribe( (data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
