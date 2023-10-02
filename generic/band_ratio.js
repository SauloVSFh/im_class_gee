var s2 = ee.ImageCollection("COPERNICUS/S2");

var s2range = ee.Image(s2
              .filterDate('2017-09-01', '2017-09-05')
              .filterBounds(campus)
              .sort('CLOUD_COVERAGE_ASSESSMENT')
              // .filter(ee.Filter.lessThan('CLOUD_COVERAGE_ASSESSMENT', 10))
              .first()
              );


//var mosaic = s2range.mosaic();
print(s2range)

var s2image = s2range.clip(campus);

var trueColor = {bands: ['B4', 'B3', 'B2'], min: 0, max:2300};
var falseColor = {bands: ['B8', 'B3', 'B2'], min: 0, max:2300};


var NDVI2 = s2image.normalizedDifference(['B8', 'B4']); //in landsat this band is 5 - NIR
var NDWI = s2image.normalizedDifference(['B3', 'B8']);
//normalize difference water index
//water reflects more in b3 it does not in b8 (NIR). Water gets positive whereas soils, negative
var MNDWI = s2image.normalizedDifference(['B3', 'B12']);
//modified normalized water index
//sometimes water in tropical environments and wetlands have plants and algea that would reduce the reflectance of water bodies
// therefore it is necessary sometimes to use b12 - MIR- Medium infrared
//this ensures that water bodies will get the maximum reflectance

Map.addLayer (s2image, trueColor, 'True Color Composite');
Map.addLayer (s2image, trueColor, 'False Color Composite');

Map.addLayer (NDVI2, {}, 'NDVI2');
Map.addLayer (NDWI, {}, 'NDWI');
Map.addLayer (MNDWI, {},'MNWDI');
Map.setCenter(130.87,-12.37, 7);

