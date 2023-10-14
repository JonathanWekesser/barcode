<script>
  
  //barcodeList = getAllProducts();
</script>

<template>
  <div class="history">
    <h1>History:</h1>
    <p>
      Hier können Sie die gescannten Barcodes sehen:
    </p>
    <p>
      {{ barcodeList }}
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
