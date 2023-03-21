import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";


const database = [];
var databaset = new ObservableArray();
export function addtada(item){
    //database.push(item);
    databaset.push(item);
}
export function getdata(){
  var a = [];
  for(i = 0; i < databaset.length; i++){
      a.push(databaset.getItem(i));
  }
    return a;
}
export function getsize(){
    return database;

}
export function getdatajson(page){
   // const page = args.object;
    let jsonData;
    httpModule.getFile("https://raw.githubusercontent.com/anhphuongdo/nativescript/main/app/news.json").then(function (file) {
    jsonData = JSON.parse(file.readTextSync());
   // var items = [];

    jsonData.forEach(function(item) {
      // Thêm thông tin của từng `item` vào một đối tượng
      var newItem = {
        title_photo: item.title_photo,
        source_photo: item.source_photo,
        description_photo: item.description_photo
      }
     
    
      // Thêm đối tượng mới vào array `myItems`
      addtada(newItem);
      });
      
      // var newItem1 = {
      //   title_photo: "iêttjet",
      //   source_photo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG"
      // }
     // addtada(newItem1)
      //alert(getsize());
     // var databaset;
    var viewModel = fromObject({
      myItems: getdata()
    })
    page.bindingContext = viewModel;
    // var viewModel = new Observable.fromObject({
    //     myItems: databaset
    // })
    // page.bindingContext = viewModel;
  }, function (err) {
    console.log(err);
  });
}
// export function loaddata(page){
//        var viewModel = fromObject({
//       myItems: getdata()
//     })
//     page.bindingContext = viewModel;
// }