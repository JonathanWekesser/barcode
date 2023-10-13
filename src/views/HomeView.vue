<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

const decodedText = ref("");

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
};

</script>

<template>
  <main>
    <!--<TheWelcome />-->
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <h2>The decoded value in QR/barcode is</h2>
    <h2>{{ decodedText }}</h2>
  </main>
</template>
