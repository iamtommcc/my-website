class ScrollShow {

 constructor(options) {
        const defaults = {
            enterOffset: 100,
            exitMargin: 0,
            query: null,
            debounce: 50,
            debug: false,
            fireOnce: false,
            outOfViewClass: 'out-of-view',
            inViewClass: 'in-view'
        };

        // Merge defaults with provided values
        const populated = Object.assign(defaults, options);
        for (const key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }

            this.options = populated;
            this.scrollElements = document.querySelectorAll(populated.query);
            var timeout = null;

            // Debounce for performance
            window.addEventListener('scroll', ()=> {
                clearTimeout(timeout);
                timeout = setTimeout(()=> {
                    this.checkScroll();
                    timeout = null;
                }, this.options.debounce);
            });
        }

        this.checkScroll();
    }


    checkScroll() {
        if (this.options.debug) console.log('Checking scroll');
        var windowHeight = window.innerHeight - this.options.enterOffset;
        var windowTop = window.scrollY + this.options.exitMargin;
        var windowBottom = window.scrollY + windowHeight;

        for (var scrollElement of this.scrollElements) {
            var elementHeight = scrollElement.offsetHeight;
            var elementTop = scrollElement.offsetTop;
            var elementBottom = (elementTop + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottom >= windowTop ) &&
                (elementTop <= windowBottom)) {
                scrollElement.classList.add(this.options.inViewClass);
                scrollElement.classList.remove(this.options.outOfViewClass)


            } else if (this.options.fireOnce == false) {
                scrollElement.classList.add(this.options.outOfViewClass);
                scrollElement.classList.remove(this.options.inViewClass);

            }
        }
    }

};

export default ScrollShow;
