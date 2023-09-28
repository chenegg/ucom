import { Injectable } from '@angular/core';
import { MeetingRoom } from './meeting-room';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeetingRoomService {
  public formData = new MeetingRoom();
  rootUrl: string;
  public list: MeetingRoom[] = [];

  constructor(private http: HttpClient) {
    this.rootUrl = environment.rootUrl;
  }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl).subscribe({
      next: (resp) => (this.list = resp),
      error: (error) => console.log(error),
    });
  }

  getrByID(id: number) {
    this.http.get<MeetingRoom>(this.rootUrl + `/${id}`).subscribe({
      next: (resp) => (this.formData = resp),
      error: (error) => console.log(error),
    });
  }

  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData);
  }

  pubMeetingRoom() {
    return this.http.put(this.rootUrl + '/' + this.formData.id, this.formData);
  }

  deleteMeetingRoom(id: number) {
    return this.http.delete(this.rootUrl + '/' + id);
  }
}
