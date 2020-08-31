document.addEventListener('DOMContentLoaded', () => {
    console.log('hello world')
    // anime({
    //     targets: '.card',
    //     opacity: [0, 1],
    //     duration: 1000,
    //     translateX: [-50, 0]
    //   });

      anime({
        targets: '.card',
        opacity: [0, 1],
        duration: 1000,
        delay: (el, i) => {
			return 500 + 100 * i;
		},
        translateX: [-50, 0]
      });
})