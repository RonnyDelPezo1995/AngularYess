import { Injectable } from '@angular/core';
import { Firestore,addDoc,collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable, Subject } from 'rxjs';
import { Accidente } from '../models/Accidente';
import { doc, getDoc } from "firebase/firestore";
import {  updateDoc,deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AccidenteService {

  private accidente$= new Subject<any>;


  
  constructor(private firebase:Firestore) { }

  guardarAccidente(accidente: Accidente){
    const accidenteRef = collection(this.firebase,'accidentes');
    return addDoc(accidenteRef,accidente)
  }

  obtenerAccidentes():Observable<Accidente[]>{
    const accidenteRef = collection(this.firebase,'accidentes');
    
    return collectionData(accidenteRef,{idField:'id'}) as Observable<Accidente[]>

  }

  async obtenerAccidente(id:string):Promise<Accidente>{
    const docRef = doc(this.firebase, "accidentes", id);
    
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    return docSnap.data() as Accidente;
  }

 /// async actualizarAccidente1(data:any,id:string):Observable<any>{
   // const documento = doc(this.firebase, `accidentes/${accidente.id}`);
   // return updateDoc(documento);
 // }

  actualizarAccidente(accidente:Accidente,id:string){
    const accidenteRef = doc(this.firebase,`accidentes/${id}`);
    return updateDoc(accidenteRef,{
      codigo:accidente.codigo,
      nombre:accidente.nombre,
      tipo:accidente.tipo,
      riesgo:accidente.riesgo,
      fechaAccidente:accidente.fechaAccidente,
      motivo:accidente.motivo
    });
  }

  //import { doc, updateDoc } from "firebase/firestore";

//const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
//await updateDoc(washingtonRef, {
  //capital: true
//});
// [END update_document_modular]

  borrarAccidente(accidente:Accidente){
    const accidenteRef = doc(this.firebase,`accidentes/${accidente.id}`);
    return deleteDoc(accidenteRef);
  }


  //import { doc, deleteDoc } from "firebase/firestore";

  //await deleteDoc(doc(db, "cities", "DC"));
  // [END delete_document_modular]



  
  
}
