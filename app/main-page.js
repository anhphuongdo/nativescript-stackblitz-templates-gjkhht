import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");
const applicationSettings = require("@nativescript/core/application-settings");
import { ObservableArray } from "@nativescript/core";
import { load } from "@nativescript/core/ui/builder/index.js";
import { addrangedata, addtada, getdata, getdatajson, getpush, loaddata, push } from './data.js';
import { createViewModel } from "./setting-page.js";
const dem = 0;
export function onNavigatingTo(args){  
  const page = args.object;
   getdatajson(page);
}
export function showInfoView(args) {
  const button = args.object;
  const page = button.page;

  // Navigate to the information view
  const navigationEntry = {
    moduleName: 'information',
    context: { title: "Add new photo" }
  };
  page.frame.navigate(navigationEntry);
};


const frameModule = require("@nativescript/core/ui/frame");
export function showDetailView(args) {
  //const currentData = JSON.stringify(this.myItems);
  const selectedItem = args.view.bindingContext;
  const navigationEntry = {
  moduleName: "detail-page",
  context: {
    id:selectedItem.id,
    title_photo: selectedItem.title_photo,
    source_photo: selectedItem.source_photo,
    description_photo: selectedItem.description_photo,
   // currentData : currentData
  }
  };
  frameModule.Frame.topmost().navigate(navigationEntry);
};

export function showSettingView(args) {
  const isDarkMode = applicationSettings.getBoolean("isDarkMode", false);
  const navigationEntry = {
  moduleName: "setting-page",
  context: {
    isDarkMode : isDarkMode,
    title: "Setting Page"}
  };
  frameModule.Frame.topmost().navigate(navigationEntry);
};