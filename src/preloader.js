import { gsap } from 'gsap';
export default class Preloader {
    constructor(args={}) {
        this.duration = args.duration || 3;
        this.delay = args.delay || 3;
        this.preloader = document.getElementById('preloader');
    }

    show() {
        gsap.to(this.preloader, {
            duration: 3,
            y:'0%',
            display: 'flex',
            ease: 'power2.in'
        });
    }

    hide() {
        gsap.to(this.preloader, {
            duration: this.duration,
            delay: this.delay,
            // x:'-100%',
            // y:'-100%',
            scaleX: 1.5,
            scaleY: 1.5,
            opacity: 0,
            display: 'none',
            ease: 'power2.out'
        });
    }
}