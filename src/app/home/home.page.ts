import { Component } from '@angular/core';

import { Camera } from '@ionic-native/camera/ngx'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sourceURL='assets\\anziano.jpg';
  resultURL='assets\\rick.jpeg';
  buttonMessage = 'Scopri a chi assomigli';
  character:any;

  constructor(
    private camera:Camera,
    public api:ApiService
  ) {

  }

  getCamera()
  {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      this.sourceURL = 'data:image/jpeg;base64,' + imageData;
      this.api.getRandomCharacter().subscribe(res=>{
        this.character = res.name;
        this.resultURL = res.image;
        this.buttonMessage = 'insoddisfatto? prova ancora!'
      }).catch( error => {
        console.log(error);
      });
    }, (err) => {
     // Handle error
    });
  }

}
