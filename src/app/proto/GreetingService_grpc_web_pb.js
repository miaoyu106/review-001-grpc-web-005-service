/**
 * @fileoverview gRPC-Web generated client stub for com.verily.example.greeting
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.verily = {};
proto.com.verily.example = {};
proto.com.verily.example.greeting = require('./GreetingService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.verily.example.greeting.GreetingServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.verily.example.greeting.GreetingServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.verily.example.greeting.GreetingRequest,
 *   !proto.com.verily.example.greeting.GreetingResponse>}
 */
const methodDescriptor_GreetingService_greet = new grpc.web.MethodDescriptor(
  '/com.verily.example.greeting.GreetingService/greet',
  grpc.web.MethodType.UNARY,
  proto.com.verily.example.greeting.GreetingRequest,
  proto.com.verily.example.greeting.GreetingResponse,
  /** @param {!proto.com.verily.example.greeting.GreetingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.verily.example.greeting.GreetingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.verily.example.greeting.GreetingRequest,
 *   !proto.com.verily.example.greeting.GreetingResponse>}
 */
const methodInfo_GreetingService_greet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.verily.example.greeting.GreetingResponse,
  /** @param {!proto.com.verily.example.greeting.GreetingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.verily.example.greeting.GreetingResponse.deserializeBinary
);


/**
 * @param {!proto.com.verily.example.greeting.GreetingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.verily.example.greeting.GreetingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.verily.example.greeting.GreetingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.verily.example.greeting.GreetingServiceClient.prototype.greet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.verily.example.greeting.GreetingService/greet',
      request,
      metadata || {},
      methodDescriptor_GreetingService_greet,
      callback);
};


/**
 * @param {!proto.com.verily.example.greeting.GreetingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.verily.example.greeting.GreetingResponse>}
 *     A native promise that resolves to the response
 */
proto.com.verily.example.greeting.GreetingServicePromiseClient.prototype.greet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.verily.example.greeting.GreetingService/greet',
      request,
      metadata || {},
      methodDescriptor_GreetingService_greet);
};


module.exports = proto.com.verily.example.greeting;

