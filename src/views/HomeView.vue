<script setup>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import Swal from 'sweetalert2';

let lastText = null;

function fireAlertScanned(alertText) {
  
  Swal.fire({
    icon: 'success',
    title: alertText,
    color: 'white',
    background: 'black',
    showConfirmButton: true,
    timer: 1500,
  })
}

const decodedText = ref("");

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
  if (text != lastText) {
    lastText = text;
    fireAlertScanned("Barcode has been scanned!\n" + text)
  }
};

</script>

<template>
  <main>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <h2>The decoded value in QR/barcode is</h2>
    <h2>{{ decodedText }}</h2>
  </main>
</template>
