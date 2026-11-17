// Equipo: cambia aquí el orden o el nombre del archivo de cada foto
const team=[
  {n:"Camila Virguez",  f:"img/foto3.jpg"},
  {n:"Juan Pablo Ruiz", f:"img/foto4.jpg"},
  {n:"Valeria Cediel",  f:"img/foto1.jpg"},
  {n:"Sofia Muñoz",     f:"img/foto5.jpg"},
  {n:"Karen Velandia",  f:"img/foto2.jpg"}
];
document.getElementById("members").innerHTML=team.map(p=>
  `<div class="m"><img class="av" src="${p.f}" alt="${p.n}"><span>${p.n}</span></div>`).join("");

// Modal
const modal=document.getElementById("modal");
const toggle=v=>modal.classList.toggle("open",v);
document.getElementById("open").onclick=()=>toggle(true);
["close","close2"].forEach(id=>document.getElementById(id).onclick=()=>toggle(false));
modal.onclick=e=>{if(e.target===modal||e.target.closest("a"))toggle(false)};
document.addEventListener("keydown",e=>e.key==="Escape"&&toggle(false));

// Navegación activa al hacer scroll
const links=[...document.querySelectorAll("#nav a")];
const secs=[...document.querySelectorAll("section")];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+e.target.id));
}),{threshold:.5});
secs.forEach(s=>io.observe(s));

// Animación de entrada
const rv=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>rv.observe(el));
