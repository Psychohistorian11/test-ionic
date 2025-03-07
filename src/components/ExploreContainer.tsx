import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonButton>Push me</IonButton>
      <IonItem>
        <IonLabel>Nombre</IonLabel>
        <IonInput type="text" />
      </IonItem>
    </div>
  );
};

export default ExploreContainer;
