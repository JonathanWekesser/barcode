<script>
export default {
  props: {
    scannedBarcodes: [],
  },
}
</script>
<template>
  <div class="history">
    <h1>History:</h1>
    <p>
      Hier können Sie die gescannten Barcodes sehen:
    </p>
    <p v-for="barcode in scannedBarcodes" :key="barcode.id">
      {{ barcode.id }} {{ barcode.name }} {{ barcode.value }}
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
