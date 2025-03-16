import './home.css'
import { useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'


export default function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "a18a625e4df65439d281a6a963f9e4fb",
                    language: "pt-br",
                    page: 1,

                }
            })
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
        }

        loadFilmes()
    })
      if(loading){
        return (
            <div className='loading'>
                <h3>Pagina careegando...</h3>
            </div>
        )
      }
    return (
      <div className='container'>


         <div className='lista-filmes'>
            {filmes.map((filme) => {
                return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt='filme.title'/>
                        <Link to={`/filme/:${filme.id}`}>Acessar</Link>
                    </article>
                )
            })}

         </div>
      </div>
    )
}
