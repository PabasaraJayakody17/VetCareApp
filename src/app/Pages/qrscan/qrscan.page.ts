import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage implements OnInit {

  encodedData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) { 
    /*this.encodedData = "";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };*/
  }

  ngOnInit() {
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedData = barcodeData.text;
    })
      /*alert("Barcode data " + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
    })
    .catch(err => {
      console.log("Error", err);
    });*/
  }

  encodedText(){
    this.barcodeScanner
    .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedData)
    .then(
      encodedData => {
        console.log(encodedData);
        this.encodedData = encodedData;
      },
      err => {
        console.log("Error occured : " + err);
      }
    );
  }

}
