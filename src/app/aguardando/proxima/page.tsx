import EmConstrucao from "@/Components/Common/emConstrucao";
import Index from "@/Components/Pages/index";


const underConstruction = true

export default function page() {


  return underConstruction ? <EmConstrucao /> : <Index />
}

