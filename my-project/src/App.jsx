import { Contacto } from "./componentes/Contacto"
import { Header } from "./componentes/Header"
import { Home } from "./componentes/Home"
import { NavBar } from "./componentes/NavBar"
import ProjectContainer from "./componentes/ProjectContainer"
import { Skills } from "./componentes/Skills"




function App() {
 

  return (
    <> 
    <div className="container mx-auto my-6 flex justify-between gap-5   ">
    <Header/>
    <NavBar/>
    </div>

    
    <Home/>
   <ProjectContainer/>
   <Skills/>
   <Contacto/>
    </>
  )
}

export default App
