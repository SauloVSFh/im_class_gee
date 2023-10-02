// polygon in the Amazon rain forest
var roi = ee.Geometry.Polygon(
        [[[-57.09808103620325, 0.022816607208066747],
          [-57.09808103620325, -5.440182154137135],
          [-51.25335447370325, -5.440182154137135],
          [-51.25335447370325, 0.022816607208066747]]], null, false);

// Load the MODIS/MYD13A1 image collection and select the EVI band.
// EVI is an acronym for "Enhanced Vegetation Index".
// It is very similar to NDVI, but is more reliable in tropical ecosystems as it does not saturate as early as NDVI.
//Import the MODIS image collection MOD13A1 V6
var collection = ee.ImageCollection('MODIS/006/MOD13A1').select('EVI');

// Create a reference dataset by filtering for the dates from 1995 - 2020.
// Choose a reference period for your baseline
var reference = collection.filterDate('1995-01-01', '2020-12-31')
  .sort('system:time_start');

//Compute the mean EVI for the reference time frame
 var mean = reference.mean();

// Display the mean using the code below. Chose appropriate values for min and max.
//Define visualisation parameters for EVI
var vis = {min: 500, max: 5000, palette: ['brown','yellow','green']};
// Map EVI spatially

// Exploring trends against the baseline
// Create a new image collection for the period 2011 – 2018. Give this image collection the name "recent".
//Create a collection of images that represent more recent conditions
 var recent = collection.filterDate('2011-01-01', '2018-12-31');
 // Calculate recent mean
 var meanRecent = recent.mean();
 // Map EVI spatially for recent years


 // Calculate and define anomalies (departure from long-term average)
 // by subtracting the reference mean from the more recent time-series
 //Define a function to subtract the reference mean
var subtractmean = function(image) {
  return image.subtract(mean).copyProperties(image, ['system:time_start']);
};

//Create a variable called anomalies by mapping the subtract mean over the recent time-series
var anomalies = recent.map(subtractmean);

// Map the anomalies spatially using the code below
// Use the inspector the check the appropriate range of values, then replace min and max in the example above with the values you discover


// Charting changes over time
// Next we will chart the change of EVI through time, using the EVI anomalies to do so.
// We calculate the cumulative EVI for a specific area using the iterate function,
// then graph the cumulative anomaly (vertical axis) over time.
// Get the timestamp from the most earliest image in the reference collection.
//Get timestamp of first image
var time0 = reference.first().get('system:time_start');

// Create a list that contains a single image of zeros, with time of time0.
// Rename it 'EVI' to match the other images in the series.
//Create and empty list (zeros) list to provide a structure into which the EVI anomalies can be mapped
var first = ee.List([
  ee.Image(0).set('system:time_start', time0).rename('EVI')
]);

//Use a function to iterate through time and accumulate the anomalies
var accumulate = function(image, list) {
  var previous = ee.Image(ee.List(list).get(-1));
  var added = image.add(previous)
    .set('system:time_start', image.get('system:time_start'));
  return ee.List(list).add(added);
};

//Run the iteration
var cumulative = ee.ImageCollection(ee.List(
  anomalies.iterate(accumulate, first)
));

// Create a vector geometry using the rectangle polygon tool, and rename it "roi."
//Centre map on roi and specify zoom range (1-22)
Map.centerObject(roi, 7);

//Define chart parameters
var chartParam = {
 title: 'Cumulative EVI anomaly over time',
  hAxis: {title: 'Time'},
  vAxis: {title: 'Cumulative EVI anomaly'},
};

// Make a chart of the mean cumulative anomaly in the roi using the code below
//Plot the chart
var chart = ui.Chart.image.seriesByRegion({
  imageCollection: cumulative,
  regions: roi,
  reducer: ee.Reducer.mean(),
  band: 'EVI',
  scale: 500,
  xProperty: 'system:time_start',
  seriesProperty: 'PROJECT'
});
//Print chart to console
print(chart.setOptions(chartParam));




Map.addLayer(mean.clip(roi), vis, 'Reference EVI');


Map.addLayer(meanRecent.clip(roi), vis, 'Recent EVI');

//Map the cumulative anomalies by summing them
Map.addLayer(anomalies.sum().clip(roi), {
  min: -10000,
  max: 10000,
  palette: [
    'darkred','red','yellow','green','darkgreen'
  ]}, 'Cumulative anomaly');
