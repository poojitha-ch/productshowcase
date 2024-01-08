gsap.from('.first', {
    x: 100,          // move image 100 pixels to the right
    //rotation: 360,    // rotate image 360 degrees
    scale: 1.5,       // scale image to 1.5 times its size
    opacity: 1,     // set image opacity to 0.5
    duration: 2,      // animation duration in seconds
    ease: 'power2.inOut', // easing function
    yoyo: true,
    scrollTrigger: {
        trigger: '.first',
        start: 'top 100%',
        end: 'bottom 20%',
        scrub: 1,
        markers: false,
        toggleActions: 'play reverse play reverse',
        onLoad: () => gsap.to('.first', { x: -100, duration: 2 }) // Play the animation forward when entering, reverse when leaving
    }
});

/*gsap.to('.first', {
    x: '100%', // Move the image 100% to the right
    scrollTrigger: {
        trigger: '.first',
        duration:13,
        start: 'top top', // Start the animation when the top of the image is at the top of the viewport
        end: 'bottom bottom', // End the animation when the bottom of the image is at the bottom of the viewport
        scrub: 3, // Smooth scrolling effect
        markers: true // Display markers for debugging (you can remove this in production)
    }
});*/

/*gsap.utils.toArray('.slide').forEach((slide, index) => {
    gsap.set(slide, { opacity: 0, y: 50 }); // Initial opacity and position
    ScrollTrigger.create({
        trigger: slide,
        start: "top center",
        onEnter: () => gsap.to(slide, { opacity: 1, y: 0, duration: 0.5 }),
    });
});*/
    // GSAP.fromTo animation
    window.onload = function () {
        // GSAP.fromTo animation
        gsap.fromTo(
            ".mobilePhoto",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power0.easeInOut" }
        );

        // Add ScrollTrigger for each mobilePhoto element
        gsap.utils.toArray('.mobilePhoto').forEach((photo, index) => {
            gsap.to(photo, {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power0.easeInOut",
                scrollTrigger: {
                    trigger: photo,
                    start: 'top 80%', // Adjust the start value based on when you want the animation to occur
                    scrub: 1, // Set scrub to 1 for continuous animation while scrolling
                },
            });
        });
    };
 

    // Scroll-triggered animation
    gsap.from('.i1', {
        x: '-100%', // move image 100% to the left
        scale: 1.5,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        scrollTrigger: {
            trigger: '.image-container',
            start: 'top 100%',
            end: 'bottom 20%',
            scrub: 1,
            markers: false,
            toggleActions: 'play reverse play reverse'
        }
    });