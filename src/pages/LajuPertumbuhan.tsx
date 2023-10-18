import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput} from "@ionic/react"
import CardResultLajuPertumbuhan from "../components/CardResultLajuPertumbuhan"
import { useEffect, useState } from "react"

const LajuPertumbuhan: React.FC = () => {
    let [fbw, setFbw] = useState<number>(0.0)
    let [ibw, setIbw] = useState<number>(0.0)
    let [t, setT] = useState<number>(0.0)

    let [objformula, setObjFormula] = useState<object>({
        'fbw': 0,
        'ibw': 0,
        't': 0
    })

    const handleFbwChange = (event: CustomEvent) => {
        const newValue = parseFloat(event.detail.value || "0.0");
        setFbw(newValue);
    }

    const handleIbwChange = (event: CustomEvent) => {
        const newValue = parseFloat(event.detail.value || "0.0");
        setIbw(newValue);
    }

    const handleTChange = (event: CustomEvent) => {
        const newValue = parseFloat(event.detail.value || "0.0");
        setT(newValue);
    }

    useEffect(()=>{
        const objectFormula = {
            'fbw': fbw,
            'ibw': ibw,
            't': t
        }

        setObjFormula({
            'fbw' : objectFormula.fbw,
            'ibw' : objectFormula.ibw,
            't' : objectFormula.t,
        })
    }, [fbw, ibw, t])

    console.log(objformula)
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Hitung Laju Pertumbuhan Ikan</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel>Initial Body Weight :</IonLabel>
                    <IonInput onIonChange={handleIbwChange} value={ibw} type="number" step="0.1"/>
                </IonItem>
                <IonItem>
                    <IonLabel>Final Body Weight :</IonLabel>
                    <IonInput onIonChange={handleFbwChange} value={fbw} type="number" step="0.1"/>
                </IonItem>
                <IonItem>
                    <IonLabel>Lama Pemeliharaan (hari) :</IonLabel>
                    <IonInput onIonChange={handleTChange} value={t} type="number" step="0.1" />
                </IonItem>
                <br />
                {
                    fbw && ibw && t ?(
                        <CardResultLajuPertumbuhan objectFormula={objformula}/>
                    ) : (
                        <div className="ion-padding ion-text-center">
                            Masukkan Nilai untuk melihat SGR (Specific Growth Rate (Laju pertumbuhan spesifik, %/hari))
                        </div>
                    )
                }
            </IonContent>
        </IonPage>
    )
}

export default LajuPertumbuhan