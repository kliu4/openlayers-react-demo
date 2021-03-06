import React, { Component } from "react";

require("ol/ol.css");
var ol_Map = require("ol/map").default;
var ol_layer_Tile = require("ol/layer/tile").default;
var ol_layer_Vector = require("ol/layer/vector").default;
var ol_source_OSM = require("ol/source/osm").default;
var ol_source_Vector = require("ol/source/vector").default;
var ol_format_KML = require("ol/format/kml").default;
var ol_View = require("ol/view").default;

var placeLayer = new ol_layer_Vector({
  source: new ol_source_Vector({
    url: "https://s3.amazonaws.com/climateathomekml/KML_Samples.kml",
    format: new ol_format_KML()
  })
});

class App extends Component {
  constructor(props) {
    super(props);

    this.map = {};
  }

  componentDidMount() {
    this.map = new ol_Map({
      target: "map",
      layers: [
        new ol_layer_Tile({
          source: new ol_source_OSM()
        }),
        placeLayer
      ],
      view: new ol_View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div id="map" className="map" />
      </div>
    );
  }
}

export default App;
