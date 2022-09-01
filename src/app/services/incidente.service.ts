import { Injectable } from '@angular/core';
import { Firestore,addDoc,collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable, Subject } from 'rxjs';
import { Incidente } from '../models/Incidente';
import { doc, getDoc } from "firebase/firestore";
import {  updateDoc,deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  private incidente$= new Subject<any>;


  
  constructor(private firebase:Firestore) { }

  guardarIncidente(incidente: Incidente){
    const incidenteRef = collection(this.firebase,'incidentes');
    return addDoc(incidenteRef,incidente)
  }

  obtenerIncidentes():Observable<Incidente[]>{
    const incidenteRef = collection(this.firebase,'incidentes');
    
    return collectionData(incidenteRef,{idField:'id'}) as Observable<Incidente[]>

  }

  async obtenerIncidente(id:string):Promise<Incidente>{
    const docRef = doc(this.firebase, "incidentes", id);
    
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    return docSnap.data() as Incidente;
  }

 /// async actualizarAccidente1(data:any,id:string):Observable<any>{
   // const documento = doc(this.firebase, `accidentes/${accidente.id}`);
   // return updateDoc(documento);
 // }

  actualizarIncidente(incidente:Incidente,id:string){
    const incidenteRef = doc(this.firebase,`incidentes/${id}`);
    return updateDoc(incidenteRef,{
      codigo:incidente.codigo,
      cedula:incidente.cedula,
      nombre:incidente.nombre,
      edad:incidente.edad,
      lugar:incidente.lugar,
      fechaIncidente:incidente.fechaIncidente,
      testigo:incidente.testigo,
      fotografia:incidente.fotografia,
      descripcion:incidente.descripcion
    });
  }


  borrarAccidente(incidente:Incidente){
    const incidenteRef = doc(this.firebase,`incidentes/${incidente.id}`);
    return deleteDoc(incidenteRef);
  }



  
}
