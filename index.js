const inputImage = document.getElementById('inputImage');
const imgPreview = document.getElementById('imgPreview');

inputImage.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    imgPreview.src = reader.result;
  });

  reader.readAsDataURL(file);
});