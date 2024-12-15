function o(e,a=!1){const[s,i,N]=e.split("-"),t=Number(s),n=Number(i),r=Number(N);return a&&(isNaN(t)||isNaN(n)||isNaN(r))?null:new Date(t,(n||1)-1,r||1)}export{o as p};
