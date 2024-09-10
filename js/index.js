function playVid() {
   let video = document.getElementById("vid");

   if (video.paused) {
      video.play();
   } else {
      video.pause();
   }
}

(function () {
   "use strict";

   var forms = document.querySelectorAll(".needs-validation");

   Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
         "submit",
         function (event) {
            if (!form.checkValidity()) {
               event.preventDefault();
               event.stopPropagation();
            }

            form.classList.add("was-validated");
         },
         false
      );
   });
})();

document.getElementById("fullYear").innerHTML = new Date().getFullYear();
