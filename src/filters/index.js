import Vue from "vue";

Vue.filter("addMore", (value) => {
  return value + "Читать далее ...";
});
Vue.filter("truncate", function (text, length, suffix='') {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});