// // Elements
// const searchToggle = document.getElementById("search-toggle");
// const searchBar = document.getElementById("search-bar");
// const searchIcon = document.getElementById("search-icon");

// // Toggle Search Bar and Icon
// searchToggle.addEventListener("click", () => {
//   searchBar.classList.toggle("hidden");

//   // Change icon between search and close
//   if (searchBar.classList.contains("hidden")) {
//     searchIcon.classList.remove(
//       "bi-x",
//       "hover:bg-navy",
//       "dark:hover:bg-white",
//       "dark:text-white",
//       "dark:hover:text-navy",
//       "hover:text-white",
//       "p-1",
//       "m-2",
//       "hover:rounded-full"
//     );
//     searchIcon.classList.add("bi-search");
//   } else {
//     searchIcon.classList.remove("bi-search");
//     searchIcon.classList.add(
//       "bi-x",
//       "hover:bg-navy",
//       "dark:hover:bg-white",
//       "dark:text-white",
//       "dark:hover:text-navy",
//       "hover:text-white",
//       "p-1",
//       "m-2",
//       "hover:rounded-full"
//     );
//   }
// });
const searchToggle = document.getElementById("search-toggle");
  const searchBar = document.getElementById("search-bar");
  const searchIcon = document.getElementById("search-icon");

  // Toggle Search Bar and Icon
  searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("hidden");

    // Change icon between search and close
    if (searchBar.classList.contains("hidden")) {
      searchIcon.classList.remove("search-icon-active", "bi-x"); // Remove active icon styles
      searchIcon.classList.add("search-icon-default", "bi-search"); // Add search icon style
    } else {
      searchIcon.classList.remove("search-icon-default", "bi-search"); // Remove search icon style
      searchIcon.classList.add("search-icon-active", "bi-x"); // Add active icon styles
    }
});