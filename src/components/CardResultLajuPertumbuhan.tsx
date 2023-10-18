import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react"
import { calculateSGR } from "../lib/CalculateSGR"

const CardResultLajuPertumbuhan = (props:any) => {

    const SGR = calculateSGR({
        fbw: props.objectFormula.fbw,
        ibw: props.objectFormula.ibw,
        t: props.objectFormula.t
    })

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle class="ion-text-center">Hasil</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <div className="ion-padding ion-text-center">
                    <p>
                        Formula = ( (Ln(Wt) - Ln(W0)) / t ) * 100%
                    </p>
                </div> 
                <div>
                    <p>Final Body Weight (Rata-rata bobot ikan uji akhir penelitian, g) : {props.objectFormula.fbw}</p>
                    <p>Initial Body Weight (Rata-rata bobot ikan uji awal penelitian, g) : {props.objectFormula.ibw}</p>
                    <p>Time (Waktu Penelitian) : {props.objectFormula.t}</p>
                    <br />
                    <p>SGR (Specific Growth Rate (Laju pertumbuhan spesifik, %/hari)) : {SGR.toFixed(5)}%</p>
                </div>
            </IonCardContent>
        </IonCard>
        
    )
}

export default CardResultLajuPertumbuhan