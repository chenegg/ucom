import { NgForm } from '@angular/forms';
import { MeetingRoom } from './../../MeetingRoom';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component {
  public meetingRoom:MeetingRoom;
  public capacity = ['5','10','20','30','40']

  submitted:Boolean = false;

  constructor(){
    this.meetingRoom = new MeetingRoom(
      101,'哥多華',this.capacity[2],false,true);
  }

  onSubmit(roomForm:NgForm){
    if(roomForm.valid)
      console.log(roomForm.value);
    this.submitted = true;
  }

  newMeetingRoom(){
    this.meetingRoom = new MeetingRoom(102,'2222','4444');
  }
}
