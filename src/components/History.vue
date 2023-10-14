<script>
  import axios from 'axios';

export default {
  name: 'History',
  data() {
    return {
      products:[]
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
  async getAllProducts() {
    try {
      const response = await axios.get("http://localhost:3000/products");
      this.products = response.data;
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  },
},

/*  mounted() {
  this.getAllProducts();
},*/

}
  //barcodeList = getAllProducts();
</script>

<template>
  <div class="history">
    <h1>History:</h1>
    <p>
      Hier können Sie die gescannten Barcodes sehen:
    </p>
    <p>
      {{ products }}
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
