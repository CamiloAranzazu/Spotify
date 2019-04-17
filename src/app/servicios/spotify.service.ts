import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private httpClient: HttpClient) { }


  getConfiguracion(url: string) {
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQD3ot_W6K8dElNuKUixj5P1e_sXkmJbmeckaaR7drd9iI2ZZWUURFERskn5sqfyAfyMoYEWT6PzX3N1PQE',
    });
    const urlApi = `https://api.spotify.com/v1/${url}`;

    return this.httpClient.get(urlApi, { headers });

  }

  getNewsReleases() {

    return this.getConfiguracion('browse/new-releases')
    .pipe( map( (data: any) => data.albums.items));
  }


  getArtistas(termino: string) {

    return this.getConfiguracion(`search?q=${termino}&type=artist&limit=15`)
        .pipe( map( (data: any) => data.artists.items));
  }

  getArtista(id: string) {

    return this.getConfiguracion(`artists/${id}`);
  }

}
