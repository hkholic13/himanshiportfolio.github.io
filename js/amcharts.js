AmCharts.makeChart("map",{
    "type": "map",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "addClassNames": true,
    "fontSize": 15,
    "color": "#FFFFFF",
    "projection": "mercator",
    "backgroundAlpha": 1,
    "backgroundColor": "rgba(80,80,80,1)",
    "dataProvider": {
      "map": "indiaLow",
      "getAreasFromMap": true,
      "images": [
        {
          "top": 40,
          "left": 60,
          "width": 40,
          "height": 20,
          "pixelMapperLogo": true,
          "imageURL": "http://pixelmap.amcharts.com/static/img/logo.svg",
          "url": "http://www.amcharts.com"
        }
      ],
      "areas": [
        {
          "id": "IN-HP",
          "title": "Himachal Pradesh",
          "color": "rgba(75,216,181,0.8)"
        },
        {
          "id": "IN-KA",
          "title": "Karnataka",
          "color": "rgba(75,216,181,0.8)"
        },
        {
          "id": "IN-MH",
          "title": "Maharashtra",
          "color": "rgba(75,216,181,0.8)"
        },
        {
          "id": "IN-PB",
          "title": "Punjab",
          "color": "rgba(75,216,181,0.8)"
        },
        {
          "id": "IN-RJ",
          "title": "Rajasthan",
          "color": "rgba(75,216,181,0.8)"
        },
        {
          "id": "IN-TN",
          "title": "Tamil Nadu",
          "color": "rgba(75,216,181,0.8)"
        }
      ]
    },
    "balloon": {
      "horizontalPadding": 15,
      "borderAlpha": 0,
      "borderThickness": 1,
      "verticalPadding": 15
    },
    "areasSettings": {
      "color": "rgba(129,129,129,1)",
      "outlineColor": "rgba(80,80,80,1)",
      "rollOverOutlineColor": "rgba(80,80,80,1)",
      "rollOverBrightness": 20,
      "selectedBrightness": 20,
      "selectable": true,
      "unlistedAreasAlpha": 0,
      "unlistedAreasOutlineAlpha": 0
    },
    "imagesSettings": {
      "alpha": 1,
      "color": "rgba(129,129,129,1)",
      "outlineAlpha": 0,
      "rollOverOutlineAlpha": 0,
      "outlineColor": "rgba(80,80,80,1)",
      "rollOverBrightness": 20,
      "selectedBrightness": 20,
      "selectable": true
    },
    "linesSettings": {
      "color": "rgba(129,129,129,1)",
      "selectable": true,
      "rollOverBrightness": 20,
      "selectedBrightness": 20
    },
    "zoomControl": {
      "zoomControlEnabled": true,
      "homeButtonEnabled": false,
      "panControlEnabled": false,
      "right": 38,
      "bottom": 30,
      "minZoomLevel": 0.25,
      "gridHeight": 100,
      "gridAlpha": 0.1,
      "gridBackgroundAlpha": 0,
      "gridColor": "#FFFFFF",
      "draggerAlpha": 1,
      "buttonCornerRadius": 2
    }
  });
