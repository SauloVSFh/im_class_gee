// The script below was developed by spareeth and colleagues and modified by
// me during assignments of Remote sensing
// This script does smile cart to cluster crops based on Sentinel 2 and Sentinel 1


var mis = ee.FeatureCollection("users/spareeth/Module11/miandoab_scheme"),
    field = ee.FeatureCollection("users/spareeth/Module11/Groundtruth_2019"),
    S1 = ee.ImageCollection("COPERNICUS/S1_GRD"),
    S2 = ee.ImageCollection("COPERNICUS/S2_SR"),
    l8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2");
// print(field);
Map.centerObject(mis, 10);

///////////FUNCTION FOR PLACING LEGEND in the map view/////////////
// set position of panel
var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
});

// Create legend title
var legendTitle = ui.Label({
  value: 'Classes',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});

// Add the title to the panel
legend.add(legendTitle);

// Creates and styles 1 row of the legend.
var makeRow = function(color, name) {

      // Create the label that is actually the colored box.
      var colorBox = ui.Label({
        style: {
          backgroundColor: '#' + color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0 0 4px 0'
        }
      });

      // Create the label filled with the description text.
      var description = ui.Label({
        value: name,
        style: {margin: '0 0 4px 6px'}
      });

      // return the panel
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      });
};

// Defining Colors

var classpalette = [
    'f5a049', // Builtup
    '4D994F', // Alfalfa
    'e5e3c8', // Apple and Pear
    '23c4b9', // Grapes
    'ff0000', // Sugar beet
    '405592', // Wheat and Barley
    '6296ba', // Fall Irrigated vegetable
    'ffddaa', // Bareland
    'A6F514', // Others
    '0080FF', // Water
  ];

// name of the legend
var names = ['Builtup','Alfalfa','Apple and Pear','Grapes','Sugar beet', 'Wheat and Barley','Fall Irrigated vegetable','Bareland','Others','Water'];

// Add color and names
for (var i = 0; i < 10; i++) {
  legend.add(makeRow(classpalette[i], names[i]));
  }

// add legend to map (alternatively you can also print the legend to the console)

///////////LEGEND FUNCTION FINISH HERE/////////////////////////

//// FUNCTIONS ////

// Below function mask out the cloud pixels from Sentinel 2 data
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

// BELOW FUNCTION MUST BE APPLIED To Landsat 8 data
// https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T2_L2
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
}


// Select the required images from the Sentinel 2 Image collections imported above //
// Below four variables season1, season2..season4 select require sentinel 2 data from the respective
// season and apply cloud mask and apply Median filter and clip to MIS boundary
var season1 = l8.filterDate('2018-10-01', '2018-12-31')
                  .filter(ee.Filter.lt('CLOUD_COVER', 25))
                  .filterBounds(mis)
                  .map(applyScaleFactors) // iterating over each band in that image
                  .median().clip(mis);
print('S2_season1:', season1);

var season2 = l8.filterDate('2019-01-01', '2019-03-31')
                  .filter(ee.Filter.lt('CLOUD_COVER', 10))
                  .filterBounds(mis)
                  .map(applyScaleFactors)
                  .median().clip(mis);
// print('S2_season2:', season2);
var season3 = l8.filterDate('2019-04-01', '2019-06-30')
                  .filter(ee.Filter.lt('CLOUD_COVER', 10))
                  .filterBounds(mis)
                  .map(applyScaleFactors)
                  .median().clip(mis);
// print('S2_season3:', season3);
var season4 = l8.filterDate('2019-07-01', '2019-09-30')
                  .filter(ee.Filter.lt('CLOUD_COVER', 10))
                  .filterBounds(mis)
                  .map(applyScaleFactors)
                  .median().clip(mis);
// print('S2_season4:', season4);

// Define False color visualization
var rgbVis = {
  min: 0.0,
  max: 0.3,
  bands: ['SR_4', 'SR_B3', 'SR_B2'],
  gamma: 1.7
};

///Visualize the FCC of each season sentinel 2 images
Map.addLayer(season1, rgbVis, 'S2 MSI - season1',false);
Map.addLayer(season2, rgbVis, 'S2 MSI - season2',false);
Map.addLayer(season3, rgbVis, 'S2 MSI - season3',false);
Map.addLayer(season4, rgbVis, 'S2 MSI - season4',true);

// Below four lines select season wise Sentinel 1 RADAR data again median and clipped to MIS
var vh_s1 =  S1.filterBounds(mis).filterDate('2018-10-01', '2018-12-31').median().clip(mis).select('VH').rename(['vh_s1']);
var vh_s2 =  S1.filterBounds(mis).filterDate('2019-01-01', '2019-03-31').median().clip(mis).select('VH').rename(['vh_s2']);
var vh_s3 =  S1.filterBounds(mis).filterDate('2019-04-01', '2019-06-30').median().clip(mis).select('VH').rename(['vh_s3']);
var vh_s4 =  S1.filterBounds(mis).filterDate('2019-07-01', '2019-09-30').median().clip(mis).select('VH').rename(['vh_s4']);

// Here we combine all the seasonal Sentinel1 and Sentinel2 to a single image collection called
// 'dataset'
var dataset = season1.addBands(season2).addBands(season3).addBands(season4).addBands(vh_s1).addBands(vh_s2).addBands(vh_s3).addBands(vh_s4);
print('dataset:', dataset);

//Below codes split the training data into Training (70%) and Validation (30%) - Random
var trdata_table = field.randomColumn({seed: 1});
var training = trdata_table.filter(ee.Filter.lt('random', 0.70));
var validation = trdata_table.filter(ee.Filter.gte('random', 0.70));

// Create a new feature collection (vector) with all the bands in 'dataset' sampled to training points
var training = dataset.sampleRegions({
  collection: training,
  properties: ['class_id'],
  scale: 20,
  tileScale: 8
});
print('training:', training);
// Create a new feature collection (vector) with all the bands in 'dataset' sampled to validation points
var validation = dataset.sampleRegions({
  collection: validation,
  properties: ['class_id'],
  scale: 20,
  tileScale: 8
});

//Define bands require for training and classification. So Bands 2,3,4,5,6,7,8,8A,11,12 for 4 seasonal
// images and Sentinel 1 (1 band) representing 4 seasons
var bands = ['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7','SR_B2_1', 'SR_B3_1', 'SR_B4_1', 'SR_B5_1', 'SR_B6_1', 'SR_B7_1', 'SR_B2_2', 'SR_B3_2', 'SR_B4_2', 'SR_B5_2', 'SR_B6_2', 'SR_B7_2','SR_B2_3', 'SR_B3_3', 'SR_B4_3', 'SR_B5_3', 'SR_B6_3', 'SR_B7_3', 'vh_s1', 'vh_s2', 'vh_s3', 'vh_s4'];
print('bands:', bands);
// Below lines print basic stats of training and validation points
print('training samples per class',
  ee.Dictionary(training.aggregate_histogram('class_id')));
print('validation samples per class',
  ee.Dictionary(validation.aggregate_histogram('class_id')));


// Below creates a classifier using the training data and based on the
// Random Forest algorithm. Check documentation to learn more about the parameters - (100,null,1,0.6,null,999)
var classifier = ee.Classifier.smileRandomForest(100,null,1,0.6,null,999).train({
  features: training,
  classProperty: 'class_id',
  inputProperties: bands
});

// apply the classifier/model on 'dataset' to create a classification map
var classif = dataset.classify(classifier);
// Apply a neighbourhood median filter to remove salt and pepper effect
var classified = classif.focal_mode(1, 'circle').clip(mis);

// Compute error matrix and estimate accuracy based on the validation points
var trainConfusionMatrix = training.classify(classifier).errorMatrix('class_id', 'classification');
var testConfusionMatrix = validation.classify(classifier)
                                    .errorMatrix('class_id', 'classification');
// Printing of confusion matrix may time out. Alternatively, you can export it as CSV
print('Random Forest Test Confusion Matrix', testConfusionMatrix);
print('Overall accuracy', testConfusionMatrix.accuracy());
print('Consumers Accuracy:',testConfusionMatrix.consumersAccuracy());
print('Producers Accuracy:',testConfusionMatrix.producersAccuracy());
print('Kappa:',testConfusionMatrix.kappa());

//Visualize the Classified map and Legend in map view
Map.addLayer(classified, {min: 1, max: 10, palette: classpalette}, 'classified',true);
Map.add(legend);
Map.addLayer(field, {}, 'groundtruth');

//Export the Irrigated area Image to Geotiff
Export.image.toAsset({
  image: classified,
  description: 'Croptype_2019',
  scale: 30,
  maxPixels: 1e9
});

