import { createContext, useContext } from "react";

const CMSContext = createContext({
  cmsContent: {},
});

export function getCMSContent(path = "") {
  const cmsContent = useContext(CMSContext).cmsContent;

 return cmsContent;
}