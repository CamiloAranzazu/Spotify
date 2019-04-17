import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artistaBusqueda: any = {};
  loading: boolean;
  constructor( private activateRouter: ActivatedRoute, private servicioSpotify: SpotifyService
              ) {
    this.loading = true;
    this.activateRouter.params.subscribe(parametros => this.getArtista(parametros.id));
   }

  ngOnInit() {
  }

  getArtista( id: string) {
    this.loading = true;
    this.servicioSpotify.getArtista(id)
    .subscribe( artista => {
      console.log(artista);
      this.artistaBusqueda = artista;
      this.loading = false;
    });
  }

}
