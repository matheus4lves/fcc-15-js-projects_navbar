// Styles
import "../styles/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Scripts
import navMenu from "./modules/navMenu";

navMenu();

if (module.hot) {
  module.hot.accept();
}
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
