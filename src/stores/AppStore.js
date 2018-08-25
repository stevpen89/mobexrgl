import {extendObservable} from 'mobx'

class AppStore {
    constructor(){
        extendObservable(this,{
            someNumber:1,
            myText:''
        })
    }
    addOne(){
        this.someNumber+=1
    }
    minusOne(){
        this.someNumber-=1
    }
    newText(val){
        this.myText = val;
        console.log(this.myText)
    }
}

const store = new AppStore();
export default store;