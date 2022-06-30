export default {
  methods: {
    scrollTo(selector) {
      let elementOffset = document.querySelector(selector).offsetTop;
      let header = document.querySelector("#header").offsetHeight;
      window.scrollTo({
        top: elementOffset - header,
        behavior: "smooth",
      });
    },
  },
};
