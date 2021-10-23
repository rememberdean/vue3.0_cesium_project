<template>
  <div id="container"></div>
</template>

<script>
export default {
  name: 'vue3.0_cesium_project',
  mounted() {
    var viewer = new Cesium.Viewer('container', {
      // the following options is for self define button's 
      // show/no show in the viewer
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: true,
      animation: false,
      timeline: false,
      fullscreenButton: true,
      vrButton: false,
      shadows: false,
      infoBox: false,
      CreditsDisplay: false,
    });
    // remove the logo
    viewer._cesiumWidget._creditContainer.style.display = "none";
    var tm_url = Cesium.IonResource.fromAssetId(8564);
    var tm = new Cesium.Cesium3DTileset({
      url: tm_url,
      // controlling the destop's GPU's memory's using,
      // so that i worn't crash because of the low GPU memory 
      maximumMemoryUsage: 50, 
    })
    viewer.scene.primitives.add(tm)
    //viewer.zoomTo(tm)
    viewer.flyTo(tm) // fly to much cool
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
#container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>