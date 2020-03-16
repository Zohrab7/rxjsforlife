import { Observable, of,OperatorFunction, interval, from, range, forkJoin, concat, combineLatest} from 'rxjs';
import RxOperators,{
  map,find, mergeMap, flatMap,switchMap, delay, filter,
  pluck, concatMap, toArray,mergeScan,scan,repeat,
  concatAll,startWith,endWith,takeLast,take,
  merge,last,zip,takeWhile,reduce,publish
} from 'rxjs/operators';

interface student {
  name:string,
  age:number
}

interface classType{
  name:string,
  type:string,
  students:student[]
}

let School:classType[] = [
  {
    name:"A",
    type:"class",
    students:[
      {
        name : "John",
        age: 15
      },
      {
        name: "Sarah",
        age: 16
      },
      {
        name: "Sofie",
        age: 20
      }
    ]
  },
  {
    name:"B",
    type:"class",
    students:[
      {
        name : "Michael",
        age: 18
      },
      {
        name: "Jennie",
        age: 17
      },
      {
        name: "Denis",
        age: 16
      }
    ]
  },
  {
    name:"C",
    type:"class",
    students:[
      {
        name : "Frank",
        age: 17
      },
      {
        name: "Morgan",
        age: 15
      },
      {
        name: "Chris",
        age: 14
      }
    ]
  }
];
from(School)
.pipe(
  find<any>(({name})=>name==="A"),
  pluck<any,any>("students"),
  flatMap(from),
  filter((data:any)=>data.name=="Sofie"),
  delay(2000),
  repeat(2),
  map(({name,age}:student)=>`name: ${name} age: ${age}`)
)
.subscribe(console.log);

























//
// const trush = (x:any) => f => f(x);
//
// class Observable {
//
//   public cbs:Function[];
//
//   constructor(){
//     this.cbs = [];
//   }
//
//   subscribe(cbs: Function){
//     this.cbs.push(cbs);
//   }
//
//   next(x: any){
//     this.cbs.map(cb=>cb(x))
//   }
// }
//
// let observable = new Observable();
//
// observable.subscribe(console.log);
//
// observable.next("Im Observable written by class OOP programming");
//
// interface ObsTypes{
//   obsCollection:Function[];
//   subscribe(cbs: Function):void;
//   next(cbs: Function):void;
// }
//
// function Obs<ObsTypes>() {
//      this.obsCollection = [];
//
//      this.subscribe=(cbs: Function)=>{
//        this.obsCollection.push(cbs);
//      }
//
//      this.next=(x: any)=>{
//        this.obsCollection.map(cb=>cb(x))
//      }
// }
// let fObservable = new Obs();
// fObservable.subscribe(console.log);
// fObservable.next("Im Observable written by functional programming");
