// /*==================== FORM SUBMIT ====================*/
// document.getElementById("contact-form").addEventListener("submit", (e) => {
//     e.preventDefault();
  
//     //button animation
//     document.getElementById("email-submit").innerText = "Sending...";
  
//     if (
//       document.getElementById("name").value != "" &&
//       document.getElementById("email").value != "" &&
//       document.getElementById("message").value != ""
//     ) {
//       let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//       };
  
//       const serviceID = "service_embce24";
//       const templateID = "template_cci0niw";
  
//       emailjs
//         .send(serviceID, templateID, params)
//         .then((res) => {
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
  
//           document.getElementById("email-submit").innerHTML = `
//             Send message
//             <i class="uil uil-message button__icon"></i>`;
  
//           alert("Your message send susscessfully!");
//         })
//         .catch((err) => {
//           document.getElementById("email-submit").innerHTML = `
//             Send message
//             <i class="uil uil-message button__icon"></i>`;
//           console.log(err);
//         });
//     } else {
//       alert("Please fill out all the fields");
//     }
//   });
  
  /*==================== GITHUB CALENDAR ====================*/
  GitHubCalendar(".calendar", "suraj-996", {
    responsive: true,
    global_stats: false,
    tooltips: true,
  });
  
  $(".counting").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
  
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });