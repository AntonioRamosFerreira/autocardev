import Titulos from '@/components/Titulos'


export default function Home() {
  return ( //JSX
  <>
    <nav className="bg-cyan-950 p-2 flex gap-3 items-end">
      <h1 className = "text-3xl text-zinc-100 font-bold uppercase space-y-10" ><i>AUTOCARDEV</i></h1>
    <ul>
      <li className= "flex space-x-40">
         /// <a href="#" className = "text-zinc-300" ><i>FAVORITOS</i></a>
          <a href="#" className = "text-zinc-300" ><i>LANÇAMENTOS</i></a>
          <a href="#" className = "text-zinc-300" ><i>VENDA</i></a>
          <a href="#" className = "text-zinc-300" ><i>SOBRE</i></a>///  

      </li>
    </ul>
    </nav>
      <Titulos><i>Carros mais vendidos</i></Titulos>
      <Titulos><i>Lançamentos</i></Titulos>
  </>
  )
}