var srtm = ee.Image("CGIAR/SRTM90_V4");
var point = ee.Geometry.Point(37.52, 0.52);
var sent2 = ee.ImageCollection('COPERNICUS/S2_HARMONIZED');
var geometry = ee.Geometry.Point(40.08, 0.28);


Map.centerObject (geometry, 8);

var hillshade = ee.Terrain.hillshade(srtm, 270, 45); //azimuth and elevation
var hillshade2 = ee.Terrain.hillshade(srtm, 110, 45); //azimuth and elevation

// Map.addLayer(hillshade, {}, 'hillshade');


var s2 = (sent2
        .filterBounds(geometry)
        .filterDate('2015-01-10', '2022-01-31'));



var trueColor_palette = {'bands': ['B4', 'B3', 'B2'], 'min': 1000, 'max': 2300};
var NIRFCC_palette = {'bands': ['B8', 'B4', 'B3'], 'min': 0, 'max': 2300};
var Enhanced_palette = {'bands': ['B12', 'B8', 'B4'], 'min': 0, 'max': 2300};


Map.addLayer(s2, trueColor_palette, 'S2 Natural colors')
Map.addLayer(s2, NIRFCC_palette, 'S2 NIR')
Map.addLayer(s2, Enhanced_palette, 'S2 Enhanced')
