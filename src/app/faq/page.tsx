import EmConstrucao from "@/Components/Common/emConstrucao";
import FaqPage from "@/Components/Pages/faq";
import Index from "@/Components/Pages/index";


const underConstruction = false

export default function page() {


  return underConstruction ? <EmConstrucao /> : <FaqPage />
}

