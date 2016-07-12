import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
})
export class ArtistComponent implements OnInit, OnDestroy{ 
    id:string;
    artist:Artist[];
    albums:any;
    paramsSub:any;
    
    constructor(
        private _spotifyService:SpotifyService,
        private _activatedRoute:ActivatedRoute,
        private _route:Router
        ){}

    ngOnInit(){
        this.paramsSub = this._activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this._spotifyService.getArtist(this.id).subscribe(artist => {
                this.artist = artist;
                console.log(artist);
            });
            this._spotifyService.getAlbums(this.id).subscribe(albums => {
                this.albums = albums.items;
                console.log(albums);
            });
        })
        console.log('ARTIST COMPONENT INIT')
    }

    onSelect(album:any){
        this._route.navigate(['/album',album.id])       
        console.log(album);
    }
    
    ngOnDestroy(){
        this.paramsSub.unsubscribe();
        console.log('ARTIST COMPONENT DESTROYED')
    }

    
}