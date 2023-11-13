/// OldRedditRedirect.js
try {
    const injectFAB = (_event) => {
        try {
            if (window.location.host.includes('old')) {
                return;
            }

            const div = document.createElement('myconflictfreediv');

            div.id = 'ublock-injected-reddit-fob';

            div.innerText = 'Goto Old Reddit';

            div.style.cssText = `
            font-weight: bold;
            position:fixed;
            width:10em;
            bottom:1em;
            right:1em;

            line-height: 2em;
            background-color:#0C9;
            color:#FFF;

            border-radius:50px;
            text-align:center;
            box-shadow: 2px 2px 3px #999;

            display: inline-block;
            vertical-align: middle;
            cursor: pointer;

            z-index: 2147483647;
            `;

            document.body.appendChild(div);
            div.onclick = () => {
                window.location.host = 'old.reddit.com';
            };
        } catch (err) {
            alert(`Error while injecting FAB: ${err}`);
        }
    
        const unblockWindow = () => {
            const prev = document.body.style.pointerEvents;
            document.body.style.pointerEvents = null;
            return prev;
        };
        unblockWindow();
        new MutationObserver(function(mutations) {
            mutations.forEach(function(_mutationRecord) {
                console.log('Un blocking Window', unblockWindow());
            });
        }).observe(document.body, { attributes: true, attributeFilter: [ 'style' ] })
    };
    if (document.readyState === 'complete') {
        injectFAB();
    } else {
        window.addEventListener("load", injectFAB);
    }
} catch (err) {
    alert(`Error initing: ${err}`);
}
