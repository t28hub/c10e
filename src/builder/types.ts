import { Coordinate, ImageObject, Method, PackedColor } from '../types';
import { ID } from '../utils';

/**
 * Type representing the payload of the request.
 */
export type RequestPayload = {
  /**
   * The ID of request.
   */
  readonly id: ID;

  /**
   * The image object.
   */
  readonly imageObject: ImageObject<ArrayBuffer>;

  /**
   * The method of color extraction.
   */
  readonly method: Method;

  /**
   * The maximum colors to be extracted.
   */
  readonly maxColors: number;
};

/**
 * Type representing request message.
 */
export type RequestMessage = {
  /**
   * The type of this message.
   */
  readonly type: 'request';

  /**
   * The payload of this message.
   */
  readonly payload: RequestPayload;
};

/**
 * Type representing extraction result.
 */
export type ExtractionResult = {
  /**
   * The packed color of the extraction result.
   */
  readonly color: PackedColor;

  /**
   * The population of the extraction result.
   */
  readonly population: number;

  /**
   * The coordinate of the extraction result.
   */
  readonly coordinate: Coordinate;
};

/**
 * Type representing the payload of the response.
 */
export type ResponsePayload = {
  /**
   * The ID of request.
   */
  readonly id: ID;

  /**
   * The results of extraction.
   */
  readonly results: ExtractionResult[];
};

/**
 * Type representing response message.
 */
export type ResponseMessage = {
  /**
   * The type of this message.
   */
  readonly type: 'response';

  /**
   * The payload of this message.
   */
  readonly payload: ResponsePayload;
};

/**
 * Type representing the payload of the error response.
 */
export type ErrorResponsePayload = {
  /**
   * The ID of request.
   */
  readonly id: ID;

  /**
   * The error message.
   */
  readonly message: string;
};

/**
 * Type representing error response message.
 */
export type ErrorResponseMessage = {
  /**
   * The type of this message.
   */
  readonly type: 'error';

  /**
   * The payload of this message.
   */
  readonly payload: ErrorResponsePayload;
};

export type Request = RequestMessage;
export type Response = ErrorResponseMessage | ResponseMessage;
