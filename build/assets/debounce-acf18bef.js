function u(e,n=200){let t;return function(...o){t&&clearTimeout(t),t=setTimeout(()=>{t=null,e(...o)},n)}}export{u as d};
