import EmConstrucao from "@/Components/Common/emConstrucao";
import AguardandoAbertura from "@/Components/Pages/aguardandoAbertura";
import Index from "@/Components/Pages/index";


const underConstruction = false

export default function page() {


  return underConstruction ? <EmConstrucao /> : <AguardandoAbertura />
}

