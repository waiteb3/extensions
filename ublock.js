/// OldRedditRedirect.js
window.addEventListener("load", (event) => {
    if (window.location.host.includes('old')) {
        return;
    }

    /**
    .fabs {
      --_viewport-margin: 2.5vmin;
   
      position: fixed;
      z-index: var(--layer-1);
   
      inset-block: auto var(--_viewport-margin);
      inset-inline: auto var(--_viewport-margin);
    }
    */
    const div = document.createElement('div');

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
    hover: cursor;
    `;

    document.body.appendChild(div);

    div.onclick = () => {
        window.location.host = 'old.reddit.com';
    };
});
