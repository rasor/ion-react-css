import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import css from './Tab2.module.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <div className={css.red_bg +' '+ css.yellow_fg}>Testing css via import css from './Tab2.module.css'</div>
        <div>doing {"className={css.red_bg +' '+ css.yellow_fg}"}</div>
        <div className={css['red-bg'] +' '+ css['yellow-fg']}>Testing css via import css from './Tab2.module.css'</div>
        <div>doing {"className={css['red-bg'] +' '+ css['yellow-fg']}"}</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
