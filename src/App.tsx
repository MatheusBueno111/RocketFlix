import { useEffect, useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import { api, API_KEY, IMG_URL } from "./services/api";
import styles from './styles/app.module.scss';
import './styles/global.scss';

interface Filme {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  status_code: number;
}

function App () {

  const [filme, setFilme] = useState<Filme>()

  async function loadFilme () {
    try{
    let value = Math.floor(Math.random() * (560 - 550 + 1) ) + 550;
      const response = await api.get(`${value}?api_key=${API_KEY}`)
      console.log(response)
      setFilme(response.data)
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    console.log('filme >>',filme)
  }, [filme])

  

  return (
    <>
      <Header />
        { filme ?
          (<li key={filme.id}>
            <div className = {styles.filmesContainer}>
              <img src = {`${IMG_URL}${filme.poster_path}`} alt={filme.original_title} />
              <div className = {styles.wrapper}>
                <h2>{filme.original_title}</h2>
                <p>{filme.overview}</p>
              </div>
            </div>
          </li>) : (
            <div className = {styles.filmesContainer}>
              <img src="https://espresso-jobs.com/conseils-carriere/wp-content/uploads/2019/01/code.jpg" alt="code" />
              <h2 className={styles.wrapper}>Ops, hoje não é dia de assistir filme. Bora codar! </h2>
            </div>)
       }
      
       <Button onClick={() => loadFilme ()}/>

       <p className= {styles.legendButton}>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
     </>
  )
}
export default App


// import { useEffect, useState } from "react";
// import Button from './components/Button';
// import Header from './components/Header';
// import { api, API_KEY, IMG_URL } from "./services/api";
// import styles from './styles/app.module.scss';
// import './styles/global.scss';

// function App() {  

//   const [filmes, setFilmes] = useState<any>([{}]);
//   useEffect(() => {
//     loadFilmes();
//   }, []);

  

//   async function loadFilmes () {
//     let index =[551, 552, 553, 554, 555];
//     const aux = [];
//     for (let value of index) {
//       const response = await api.get(`${value}?api_key=${API_KEY}`)
//       aux.push(response.data)
//       //console.log(aux[0])
//       setFilmes(aux);
//     }
//   }
  
  
//   const [item, setItem] = useState(0)
//   function handleItem () { 
//     setItem(item + 1)
//   }

  
  
  

  
//   return (
//     <>
//       <Header />
      
//         <div className = {styles.filmesContainer}>
//             <img src = {`${IMG_URL}${filmes[item].poster_path}`} alt={filmes[item].original_title} />
//           <div className = {styles.wrapper}>
//             <h2>{filmes[item].original_title}</h2>
//             <p>{filmes[item].overview}</p>
//           </div>
//         </div>
        
//       <Button onClick={() => handleItem ()}/>
      
//       <p className= {styles.legendButton}>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
//     </>
//   )
//  }
// export default App;

