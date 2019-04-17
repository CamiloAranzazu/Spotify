import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
  nuevasCanciones: any [] = [];
  loading: boolean;

  constructor( private serviceSpotify: SpotifyService) {
    this.loading = true;
    this.serviceSpotify.getNewsReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    } );
   }
}


