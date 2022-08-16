Drupal.behaviors.siteHeader = {
  attach(context) {
    const body = context.body.classList;

    const debounce = (callback, wait) => {
      let timeoutId = null;
      return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          callback(...args);
        }, wait);
      };
    };

    const onScroll = debounce(() => {
      return window.scrollY > 0
        ? body.add('scrolled')
        : body.remove('scrolled');
    }, 250);

    window.addEventListener('scroll', () => onScroll());
  },
};
