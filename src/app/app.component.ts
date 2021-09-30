import { Component, OnInit } from '@angular/core';

// declare jquery as any
declare const $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travelville';

  constructor() {}

  ngOnInit() {
    
    // init jquery
    $(document).ready(function(){
      // sidenav
      $('.sidenav').sidenav();

      // slider
      $('.slider').slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

      // auto complete
      $('input.autocomplete').autocomplete({
        data: {
          "lagos": null,
          "abuja": null,
          "port harcourt": null,
          "abia": null,
          "Google": 'https://placehold.it/250x250'
        },
      });

      // materialbox
      $('.materialboxed').materialbox();

      //scrollspy
      $('.scrollspy').scrollSpy();
    });
    
  }

}
