import * as grpcWeb from 'grpc-web';

import {
  GreetingRequest,
  GreetingResponse} from './GreetingService_pb';

export class GreetingServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  greet(
    request: GreetingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GreetingResponse) => void
  ): grpcWeb.ClientReadableStream<GreetingResponse>;

}

export class GreetingServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  greet(
    request: GreetingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GreetingResponse>;

}

