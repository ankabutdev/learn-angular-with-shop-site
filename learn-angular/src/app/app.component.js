// function join() {
//     document.addEventListener('DOMContentLoaded', function () {
//       const userMenuButton = document.getElementById('user-menu-button');
//       const userMenu = document.getElementById('menu') ;
  
//       // Toggle the visibility of the dropdown menu
//       userMenuButton.addEventListener('click', function () {
//         userMenu.classList.toggle('hidden');
//       });
  
//       // Close the dropdown menu when clicking outside of it
//       document.addEventListener('click', function (event) {
//         if (!userMenu.contains(event.target) && !userMenuButton.contains(event.target)) {
//           userMenu.classList.add('hidden');
//         }
//       });
//     });
//   }
  document.addEventListener('DOMContentLoaded', function () {
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('menu') ;

    // Toggle the visibility of the dropdown menu
    userMenuButton.addEventListener('click', function () {
      userMenu.classList.toggle('hidden');
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!userMenu.contains(event.target) && !userMenuButton.contains(event.target)) {
        userMenu.classList.add('hidden');
      }
    });
  });