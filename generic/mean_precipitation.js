var geometry = ee.Geometry.Polygon(
        [[[-62.43322782487814, -8.036585003319752],
          [-62.43322782487814, -11.279920212558697],
          [-59.13495295019094, -11.279920212558697],
          [-59.13495295019094, -8.036585003319752]]], null, false),
    imageVisParam = {"opacity":1,"bands":["precipitation"],"min":2127.0009218897767,"max":2746.272280872362,"gamma":1};

var CHIRPS = ee.ImageCollection("UCSB-CHG/CHIRPS/PENTAD")
var CHIRPSd = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
var precip = CHIRPS.filterDate('1981-01-01', '2022-10-01')
var precipd = CHIRPSd.filterDate('2010-01-01', '2022-10-01')

var TSS = ui.Chart.image.series(precip, geometry, ee.Reducer.mean(), 1000, 'system:time_start')
          .setOptions({
            title: 'Precipitation full time series',
            vAxis: {title: 'mm/pentad'},
          });


var TSS = ui.Chart.image.series(precipd, geometry, ee.Reducer.mean(), 1000, 'system:time_start')
          .setOptions({
            title: 'Precipitation full time series',
            vAxis: {title: 'mm/d'},
            trendlines : {0 : {color: 'red'}},

          });


var TSS2021 = CHIRPSd.filterDate('2021-01-01', '2021-12-31')
var y2021 = TSS2021.sum().clip(geometry)

Map.addLayer(y2021, imageVisParam, 'Mean daily precipitation (mm/y)')

Map.centerObject(y2021, 8);
