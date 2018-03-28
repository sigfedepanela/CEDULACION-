var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_CeduladosColombia_1 = new ol.format.GeoJSON();
var features_CeduladosColombia_1 = format_CeduladosColombia_1.readFeatures(json_CeduladosColombia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CeduladosColombia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CeduladosColombia_1.addFeatures(features_CeduladosColombia_1);var lyr_CeduladosColombia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CeduladosColombia_1, 
                style: style_CeduladosColombia_1,
    title: 'Cedulados Colombia <br />\
    <img src="styles/legend/CeduladosColombia_1_0.png" />  2 - 746 <br />\
    <img src="styles/legend/CeduladosColombia_1_1.png" />  746 - 1489 <br />\
    <img src="styles/legend/CeduladosColombia_1_2.png" />  1489 - 2233 <br />\
    <img src="styles/legend/CeduladosColombia_1_3.png" />  2233 - 2976 <br />\
    <img src="styles/legend/CeduladosColombia_1_4.png" />  2976 - 3720 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_CeduladosColombia_1.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_CeduladosColombia_1];
lyr_LimiteDepartamental_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id_espacia': 'id_espacia', 'area_ofici': 'area_ofici', 'nombre_dep': 'nombre_dep', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'AREA  SEMB': 'AREA  SEMB', });
lyr_CeduladosColombia_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'No Cedulad': 'No Cedulad', '%': '%', });
lyr_LimiteDepartamental_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'id_espacia': 'TextEdit', 'area_ofici': 'TextEdit', 'nombre_dep': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'AREA  SEMB': 'TextEdit', });
lyr_CeduladosColombia_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'No Cedulad': 'TextEdit', '%': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'OBJECTID': 'no label', 'id_espacia': 'no label', 'area_ofici': 'no label', 'nombre_dep': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'AREA  SEMB': 'no label', });
lyr_CeduladosColombia_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'No Cedulad': 'inline label', '%': 'inline label', });
lyr_CeduladosColombia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});