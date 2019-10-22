import { Component } from '@angular/core';
import {GreetingRequest, GreetingResponse} from './proto/GreetingService_pb';
import {GreetingServiceClient} from './proto/GreetingService_grpc_web_pb';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, FormArray, Validators } from '@angular/forms';


//const greetingService = new com.verily.example.greeting.GreetingServiceClient('http://localhost:6565');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'grpc-web';
  greetingResponse: string = "";
  grpcUrl : string = "";

  formdata: FormGroup;

   constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formdata = this.fb.group({
      grpcUrl: ['http://localhost:8181', []]
    });
  }

  onClickSubmit(data) {
    this.grpcUrl = data.grpcUrl;
    this.callGrpc();
  }

  callGrpc() {
    var request = new GreetingRequest();
    request.setName("karthikman@");

    //envoy proxy routes requests from port 8181 to 6565
    console.log('Making call to GRPC URL ' + this.grpcUrl);
    this.greetingResponse = "gRPC call in progress to " + this.grpcUrl;

    var client = new GreetingServiceClient(this.grpcUrl);

    client.greet(request, {}, (err, response) => {
      console.log(response.getGreeting);
      this.greetingResponse = response.getGreeting();
    });
  }


}
