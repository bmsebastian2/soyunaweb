const objAnimados =[].slice.call(document.querySelectorAll(".aniStart"))

const cargarImagen =(entradas,obervador)=>{
  
    entradas.forEach((entrada)=>{    
      if(entrada.isIntersecting){               
         entrada.target.classList.add('offVisible')       
      }else{        
         entrada.target.classList.remove('offVisible')                             
      }
    }
)}
const observador = new IntersectionObserver( cargarImagen,{
  root:null,
  rootMargin: '100px 0px 0px 100px',
  threshold: 0.5
});
 objAnimados.forEach((e)=>observador.observe(e))


