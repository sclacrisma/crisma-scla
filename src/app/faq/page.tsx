import EmConstrucao from "@/Components/Common/emConstrucao";
import FaqPage from "@/Components/Pages/faq";


const underConstruction = false

export default function page() {


  return underConstruction ? <EmConstrucao /> : <FaqPage />
}

