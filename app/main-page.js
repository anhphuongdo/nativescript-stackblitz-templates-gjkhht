import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");

export function onNavigatingTo(args){  
  const page = args.object;
  let jsonData;

  httpModule.getFile("https://raw.githubusercontent.com/anhphuongdo/data/main/photo.json").then(function (file) {
    jsonData = JSON.parse(file.readTextSync());
    var items = [];

    jsonData.forEach(function(item) {
      // Thêm thông tin của từng `item` vào một đối tượng
      var newItem = {
        title_photo: item.title_photo,
        source_photo: item.source_photo
      }
    
      // Thêm đối tượng mới vào array `myItems`
      items.push(newItem);
      });
    var viewModel = fromObject({
      myItems: items
    })
    page.bindingContext = viewModel;
  }, function (err) {
    console.log(err);
  });
}

export function onListViewLoaded(args) {
  const listView = args.object;
}


/* import { fromObject } from "@nativescript/core";

export function onNavigatingTo(args) {
  const page = args.object;

  const vm = fromObject({
    // Setting the listview binding source
    photos: [
      { "id": 0,
      "title_photo": "Strawberry",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/220px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
      "description_photo": "The first garden strawberry was grown in Brittany, France, during the late 18th century. Prior to this, wild strawberries and cultivated selections from wild strawberry species were the common source of the fruit."},
    {
      "id": 1,
      "title_photo": "Strawberry",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/398px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg.jpg",
      "description_photo": "The watermelon is an annual that has a prostrate or climbing habit. Stems are up to 3 metres (10 feet) long and new growth has yellow or brown hairs. "
    },
    {
      "id": 2,
      "title_photo": "Banana",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/800px-Bananas_white_background_DS.jpg",
      "description_photo": "The banana plant is the largest herbaceous flowering plant. All the above-ground parts of a banana plant grow from a structure usually called a 'corm'"
    },
    {
      "id": 3,
      "title_photo": "Grape fruit",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/800px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg",
      "description_photo": "The evergreen grapefruit trees usually grow to around 5–6 m (16–20 ft) tall, although they may reach 13–15 m (43–49 ft). The leaves are long (up to 15 cm (5.9 in)), thin, glossy, and dark green."
    },
    {
      "id": 4,
      "title_photo": "Grape",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/800px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
      "description_photo": "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters."
    },{
      "id": 5,
      "title_photo": "Apple",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fuji_apple.jpg/1024px-Fuji_apple.jpg",
      "description_photo": "The apple is a deciduous tree, generally standing 2 to 4.5 m (6 to 15 ft) tall in cultivation and up to 9 m (30 ft) in the wild. When cultivated, the size, shape and branch density are determined by rootstock selection and trimming method. The leaves are alternately arranged dark green-colored simple ovals with serrated margins and slightly downy undersides."
    },{
      "id": 6,
      "title_photo": "Mango",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
      "description_photo": "A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar, Bangladesh, and northeastern India"
    },{
      "id": 7,
      "title_photo": "Durian",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Durian_in_black.jpg/220px-Durian_in_black.jpg",
      "description_photo": "Named in some regions as the king of fruits, the durian is distinctive for its large size, strong odour, and thorn-covered rind."
    },{
      "id": 8,
      "title_photo": "Plum",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/800px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
      "description_photo": "Plums are a diverse group of species. The commercially important plum trees are medium-sized, usually pruned to 5–6 metres (16–20 ft) height. The tree is of medium hardiness."
    },{
      "id": 9,
      "title_photo": "Cucumber",
      "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cucumber_BNC.jpg/220px-Cucumber_BNC.jpg",
      "description_photo": "The cucumber is a creeping vine that roots in the ground and grows up trellises or other supporting frames, wrapping around supports with thin, spiraling tendrils. The plant may also root in a soilless medium, whereby it will sprawl along the ground in lieu of a supporting structure. The vine has large leaves that form a canopy over the fruits"
    }
    ]
});
  page.bindingContext = vm;
} */


/* export function onListViewLoaded(args) {
  const listView = args.object;
} */


/////////////////////////////////////////////////////////

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
