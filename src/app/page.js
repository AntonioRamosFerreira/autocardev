import CardFilme from "@/components/CardFilme";
import Titulos from "@/components/Titulos";
import { Star } from "lucide";
import { Warnes } from "next/font/google";

export default function Home(){
  
  //mock
  const filmes = [
    {
      id: 1,
      titulo: "ONIX Chevrolet",
      nota: 9.8,
      poster: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/11/hr_3955.cr2_.jpg?quality=70&strip=info"
    },
    {
      id: 2,
      titulo: "KWID ZEN Renault",
      nota: 9.1,
      poster: "https://image1.mobiauto.com.br/images/api/images/v1.0/94918326/transform/fl_progressive,f_webp,q_95"
    }
  ] 



  return(
    //JSX
    <>

    <nav className="bg-cyan-950 p-2 flex gap-3 items-end">
      <h1 className = "text-3xl text-zinc-100 font-bold uppercase space-y-10" ><i>AUTOCARDEV</i></h1>
    <ul>
      <li className= "flex space-x-40">
          <a href="#" className = "text-zinc-300" ><i>FAVORITOS</i></a>
          <a href="#" className = "text-zinc-300" ><i>LANÇAMENTOS</i></a>
          <a href="#" className = "text-zinc-300" ><i>VENDA</i></a>
          <a href="#" className = "text-zinc-300" ><i>SOBRE</i></a> 

      </li>
    </ul>
    </nav>

    <Titulos><i>Carros mais vendidos</i></Titulos>

      <section className='flex flex-wrap gap-2'>

        {
            filmes.map( filme => <CardFilme filme={filme}/>)
        }
      </section>

      <Titulos><i>Lançamentos</i></Titulos>
    </>
  )
}
