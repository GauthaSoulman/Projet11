import './404.scss'
import Header from "../../components/Header/Header";
import { Link } from 'react-router-dom';

export default function Erreur404() {
	return (
		<div className='page-404'>
			<Header />
			<div className="notFound_infos">
				<h1 className='titre-404'>404</h1>
				<p className='description-404'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='lien-site lien-404' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}