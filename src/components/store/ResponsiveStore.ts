import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";

 

export default class ResponsiveStore {
  rootStore: RootStore;
  isMobileMediaQuery:boolean=false;
  height:number=0;

  setHeight = (height:number) => {
    this.height = height;
  }



 
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
 

   setIsMobileMediaQuery = (isMobile:boolean) =>{
    this.isMobileMediaQuery = isMobile;
  };


 

}