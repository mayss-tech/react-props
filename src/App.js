import React from 'react';
import Statut from './profil/profil';
import Handelname from './profil/handelname';

function App() {
  return (
    <div style={{border:'solid 2px brown',maxWidth:'25vw', textAlign:'center',marginLeft:'37vw',marginTop:'5vw'}} >
    <Statut name='Mayssa LOUATI'/>
    <Statut bio=' Engineer in Hoticultural Systems Engineering Field : Environment and waste 
    recycling Responsible of "biogas project"  '/> 
    <Statut bio='Consultant at Oriflame Cosmetics Sweden'/>
    <Statut profession='Agricultural engineer' children={<img style={{width:'20vw', borderRadius:'1vw'}} src="/profil.jpg" alt="img"/>}/>
    <Handelname/>
    </div>
  );
}
export default App;
