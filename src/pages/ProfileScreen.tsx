import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonRow, IonCol, IonThumbnail, IonText, IonIcon, IonItem, IonNote } from '@ionic/react';
import React, { useState } from 'react';
import { getPicture, PictureSourceType } from '../services/camera.service';
import { cropPicture } from '../services/crop.services';
import './ProfileScreen.css';

export const ProfileScreen: React.FC = () => {

  const [picture, setPicture] = React.useState<string>('')


  const handleUploadPciture =  async() => {
    try {
    const newPciture = await   getPicture(PictureSourceType.PHOTOLIBRARY) 
    const croptedPciture  = await cropPicture(newPciture)

    setPicture(croptedPciture)
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>


    <IonCol className="content-col">

      <IonThumbnail className="user-image" onClick={handleUploadPciture}>
        <img  src={picture} alt="default-img" />        
      </IonThumbnail>

      <IonText color="primary">
        <h2 className="user-name">{"Ahemd Nouira"}</h2>
      </IonText>

      <hr />

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

