function go(id){
  if(!document.getElementById(id)) id='inicio';
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('on', p.id===id));
  document.querySelectorAll('nav.top a[data-go]').forEach(a=>a.classList.toggle('on', a.dataset.go===id));
  window.scrollTo(0,0);
}
document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();
  const id=a.dataset.go;
  history.pushState(null,'','#'+id);
  go(id);
}));
window.addEventListener('hashchange',()=>go((location.hash||'#inicio').slice(1)));
go((location.hash||'#inicio').slice(1));
