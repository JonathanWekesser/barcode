<script>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import Swal from 'sweetalert2';

export default{
  name: 'App',
  components: {
    ref,
    StreamBarcodeReader,
  },
  methods: {
    getAllProducts(){
      axios.get("http://localhost:3000/products").then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
    },
  }
};

function fireAlertScanned(alertText) {
  /*
  if (inList){
    id = inList.id;
  }
  */
  alertText = "Scannen erfolgreich: \n"+alertText;
  Swal.fire({
    icon: 'success',
    title: alertText,
    color: 'white',
    background: 'black',
    showConfirmButton: true,
    timer: 1500,
  })
  // axios.put(url, alertText);
}

const decodedText = ref("");

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
  fireAlertScanned(text)
};

</script>

<template>
  <main>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <h2>Der letzte gescannter QR/Barcode:</h2>
    <h2>{{ decodedText }}</h2>
  </main>
</template>
