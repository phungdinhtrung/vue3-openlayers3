<script setup>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { onMounted } from 'vue';

onMounted(() => {
    new Map({
        target: 'map',
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
        ],
        view: new View({
            center: [0, 0],
            zoom: 3,
            maxZoom: 20,
            minZoom: 2,
        }),
    });
});


</script>

<template>
    <div id = "map"></div>
</template>

<style scoped>
    body {
        margin: 0;
        height: 100%;
    }

    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>
