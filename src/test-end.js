(function () {
    'use strict';

    /**
     * test function
     * @param {string} desc
     * @param {function} fn
     */
    function it(desc, fn) {
        try {
            fn();
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
        } catch (error) {
            console.log('\n');
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.error(error);
        }
    }

    function assert(isTrue) {
        if (!isTrue) {
            throw new Error();
        }
    }

    it('check if there is h1 tag', function () {
        let selector = document.querySelector('#container');
        assert(selector.innerHTML.includes('h1'));
    });

    it('check if there is delivery form on the page', function () {
        let selector = document.querySelector('#container');
        assert(selector.innerHTML.includes('<form'));
    });
    
    it('check if summary is shown', function () {
        let selector = document.querySelector('#container');
        assert(selector.innerHTML.includes('summary'));
    });

    it('check if code number is valid', function () {
        assert(isCodeNumberInvalid === false);
    });

    it('check if phone number is valid', function () {
        assert(isCodeNumberInvalid === false );
    });

})();