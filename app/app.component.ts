import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar-top/navbar-top.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
//TODO: (Me) Learn more about ROUTER_DIRECTIVES
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
//TODO: (Me) Learn more about HTTP_PROVIDERS
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[ROUTER_DIRECTIVES,NavbarComponent],
    precompile:[AboutComponent,SearchComponent],
    providers:[HTTP_PROVIDERS,SpotifyService]
})
export class AppComponent { }
