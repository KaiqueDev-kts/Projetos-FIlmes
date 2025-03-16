import './error.css';
import {Link} from 'react-router-dom';


export default function Error() {
    return (
        <div className='not-fold'>
            <h1>404</h1>
            <h2>Pagina não encontrado</h2>
            <Link to="/">Veja todos os filmes</Link>
        </div>
    )
}