import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConnToWebAPIService } from './conn-to-web-api.service';
import { WeatherForecast } from '../part1/page2/WatherForecase';
import { User } from './users';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styles: [],
})
export class Part2Component {
  constructor(private connToAPI: ConnToWebAPIService) {}

  result: string = '';
  wfList: WeatherForecast[] = [];

  Get117() {
    this.connToAPI.Get117().subscribe({
      next: (resp) => (this.result = resp),
      error: (error) => console.log(error),
    });
  }

  GetWeatherForecast() {
    this.connToAPI.GetWeatherForecast().subscribe({
      next: (resp) => (this.wfList = resp),
      error: (error) => console.log(error),
    });
  }

  user: any;

  GetUser(id: any) {
    this.connToAPI.getUser(id).subscribe({
      next: (resp) => (this.user = resp),
      error: (error) => console.log(error),
    });
  }

  optionResult: any;

  GetUserByOptions(id: any, observe: string) {
    this.connToAPI.GetUserByOptions(111, observe).subscribe({
      next: (resp) =>
        (this.optionResult = `${observe}:${JSON.stringify(resp)}`),
      error: (error) => console.log(error),
    });
  }

  POSTUser(uid: string, uname: string) {
    let user = new User(Number(uid), uname);
    this.connToAPI.POSTUser(user).subscribe({
      next: (resp) => (this.result = resp),
      error: (error) => console.log(error),
    });
  }

  @ViewChild('img') img!: ElementRef;
  public progress: number = 0;
  public message: string = '';
  public imgsrc: string = '';

  private downloadFile = (data: HttpResponse<Blob>, file: string) => {
    //response(含header)
    let body: any = data.body;
    //blob檔
    const downloadFile = new Blob([body], { type: data.body?.type });
    //建立元素,取得下戴檔案的位置
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    a.download = file;
    a.href = URL.createObjectURL(downloadFile);
    a.target = '_blank';
    a.click();
    //圖檔的位值
    this.img.nativeElement.src = a.href;
    console.log(a);
    document.body.removeChild(a);
  };

  GetDownload(file: string) {
    if (!file || file == '') return;
    this.progress = 0;
    this.connToAPI.GetDownload(file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.DownloadProgress) {
          //合計
          let total: number = event.total?.valueOf() ?? 0;
          //載入中/合計
          this.progress = Math.round((100 * event.loaded) / total);
          console.log(this.progress);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Download success.';
          console.log(this.message);
          this.downloadFile(event, file);
        }
      },
      error: (error) => console.error(error),
      complete: () => console.info('done'),
    });
  }
}
