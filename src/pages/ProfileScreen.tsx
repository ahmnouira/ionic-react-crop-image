import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonRow, IonCol, IonThumbnail, IonText, IonIcon, IonItem, IonNote, IonImg } from '@ionic/react';
import React, { useState } from 'react';
import { getPicture, PictureSourceType } from '../services/camera.service';
import { cropPicture } from '../services/crop.services';
import {File} from '@ionic-native/file'
import './ProfileScreen.css';

export const ProfileScreen: React.FC = () => {

  const [picture, setPicture] = React.useState<string>('')

  const handleUploadPciture =  async() => {
    try {
    const newPciture = await   getPicture(PictureSourceType.PHOTOLIBRARY) 
    const croptedPciture  = await cropPicture(newPciture)
    let filename = croptedPciture.substring(croptedPciture.lastIndexOf('/')+1);
    let path =  croptedPciture.substring(0,croptedPciture.lastIndexOf('/')+1);
     //then use the method reasDataURL  btw. var_picture is ur image variable
    const file =  await   File.readAsDataURL(path, filename)
    setPicture(file)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
    
    <IonCol className="content-col">

      <IonThumbnail className="user-image" onClick={handleUploadPciture}>

        <IonImg src={picture} />
      </IonThumbnail>

  
      <IonText color="primary">
        <h2 className="user-name">{"Ahemd Nouira"}</h2>
      </IonText>

    

      <IonList mode="ios" lines="none">

        <IonItem>
          <IonIcon size="large" slot="start" name="pencil"></IonIcon>
          <IonNote>{"This is about"}</IonNote>
        </IonItem>

        <IonItem>
          <IonIcon size="large" slot="start" name="mail"></IonIcon>
          <IonText>{"Description"}</IonText>
        </IonItem>


      </IonList>
      
    </IonCol>
      
      </IonContent>
    </IonPage>
  );
};

