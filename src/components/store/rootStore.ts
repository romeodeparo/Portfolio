import { createContext} from "react";
import {configure} from "mobx"
import ResponsiveStore from "./ResponsiveStore";
import MobileStore from "./MobileStore";

configure ({enforceActions: "always"})

export class RootStore {
    responsiveStore:ResponsiveStore;
    mobileStore:MobileStore;
    
    constructor(){
        this.responsiveStore = new ResponsiveStore(this);
        this.mobileStore = new MobileStore(this);
    }

}
export const RootStoreContext = createContext(new RootStore());