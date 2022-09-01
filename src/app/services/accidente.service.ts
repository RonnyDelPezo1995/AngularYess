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


  actualizarAccidente(accidente:Accidente,id:string){
    const accidenteRef = doc(this.firebase,`accidentes/${id}`);
    return updateDoc(accidenteRef,{
      codigo:accidente.codigo,
      cedula:accidente.cedula,
      nombre:accidente.nombre,
      edad:accidente.edad,
      lugar:accidente.lugar,
      fechaAccidente:accidente.fechaAccidente,
      testigo:accidente.testigo,
      hospitalizacion:accidente.hospitalizacion,
      fotografia:accidente.fotografia,
      descripcion:accidente.descripcion
    });
  }


  borrarAccidente(accidente:Accidente){
    const accidenteRef = doc(this.firebase,`accidentes/${accidente.id}`);
    return deleteDoc(accidenteRef);
  }




  
  
}
