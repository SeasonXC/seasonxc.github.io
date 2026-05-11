// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-xichen-zhang-page-personnelle",
    title: "Xichen Zhang | Page personnelle",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },];
