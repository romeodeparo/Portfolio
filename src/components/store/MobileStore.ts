import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";

 

export default class MobileStore {
  rootStore: RootStore;
    page:string="home"
    isToggled: boolean = false

    SetIsToggled = (toggled:boolean) =>{
        this.isToggled = toggled;
    } 
    
    setPage = (selectedPage:string) => {
        this.page = selectedPage;
    }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
 


}