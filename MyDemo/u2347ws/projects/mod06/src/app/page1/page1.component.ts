import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetingRoom } from '../../MeetingRoom';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit{
  public capacity = ['5','10','20','30','40']
  public meetingRoomForm:FormGroup;
  public meetingRoom:MeetingRoom;

  constructor(public builder:FormBuilder){
    this.meetingRoom = new MeetingRoom(
      101,'哥多華',this.capacity[2],false,true);

      this.meetingRoomForm = this.builder.group({
      'id':['',[Validators.required]],
      'name':['',[Validators.required]],
      'size':[''],
      'projector':[''],
      'TV':[''],
      })
  }

  ngOnInit(): void {
    this.meetingRoomForm.setValue(this.meetingRoom);
  }

}
