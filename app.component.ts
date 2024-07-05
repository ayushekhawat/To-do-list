import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-do List';
  list: any[]=[] ;
  addTask(item:string){
     this.list.push({id:this.list.length , name:item});
     console.warn(this.list)
  }
  removeTask(id:number){
     this.list=this.list.filter(item=>item.id!==id)
  } 
}
