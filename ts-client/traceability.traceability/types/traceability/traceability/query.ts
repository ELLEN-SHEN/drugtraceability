/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Phtraceinfo } from "./phtraceinfo";
import { Traceinfo } from "./traceinfo";

export const protobufPackage = "traceability.traceability";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetTraceinfoRequest {
  id: number;
}

export interface QueryGetTraceinfoResponse {
  Traceinfo: Traceinfo | undefined;
}

export interface QueryAllTraceinfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTraceinfoResponse {
  Traceinfo: Traceinfo[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPhtraceinfoRequest {
  id: number;
}

export interface QueryGetPhtraceinfoResponse {
  Phtraceinfo: Phtraceinfo | undefined;
}

export interface QueryAllPhtraceinfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPhtraceinfoResponse {
  Phtraceinfo: Phtraceinfo[];
  pagination: PageResponse | undefined;
}

export interface QueryShowTraceinfobydicRequest {
  dic: string;
}

export interface QueryShowTraceinfobydicResponse {
  traceinfo: Traceinfo | undefined;
}

export interface QueryShowPhtraceinfobydicRequest {
  dic: string;
}

export interface QueryShowPhtraceinfobydicResponse {
  phtraceinfo: Phtraceinfo | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTraceinfoRequest(): QueryGetTraceinfoRequest {
  return { id: 0 };
}

export const QueryGetTraceinfoRequest = {
  encode(message: QueryGetTraceinfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTraceinfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTraceinfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTraceinfoRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetTraceinfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTraceinfoRequest>, I>>(object: I): QueryGetTraceinfoRequest {
    const message = createBaseQueryGetTraceinfoRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetTraceinfoResponse(): QueryGetTraceinfoResponse {
  return { Traceinfo: undefined };
}

export const QueryGetTraceinfoResponse = {
  encode(message: QueryGetTraceinfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Traceinfo !== undefined) {
      Traceinfo.encode(message.Traceinfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTraceinfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTraceinfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Traceinfo = Traceinfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTraceinfoResponse {
    return { Traceinfo: isSet(object.Traceinfo) ? Traceinfo.fromJSON(object.Traceinfo) : undefined };
  },

  toJSON(message: QueryGetTraceinfoResponse): unknown {
    const obj: any = {};
    message.Traceinfo !== undefined
      && (obj.Traceinfo = message.Traceinfo ? Traceinfo.toJSON(message.Traceinfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTraceinfoResponse>, I>>(object: I): QueryGetTraceinfoResponse {
    const message = createBaseQueryGetTraceinfoResponse();
    message.Traceinfo = (object.Traceinfo !== undefined && object.Traceinfo !== null)
      ? Traceinfo.fromPartial(object.Traceinfo)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTraceinfoRequest(): QueryAllTraceinfoRequest {
  return { pagination: undefined };
}

export const QueryAllTraceinfoRequest = {
  encode(message: QueryAllTraceinfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTraceinfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTraceinfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTraceinfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTraceinfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTraceinfoRequest>, I>>(object: I): QueryAllTraceinfoRequest {
    const message = createBaseQueryAllTraceinfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTraceinfoResponse(): QueryAllTraceinfoResponse {
  return { Traceinfo: [], pagination: undefined };
}

export const QueryAllTraceinfoResponse = {
  encode(message: QueryAllTraceinfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Traceinfo) {
      Traceinfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTraceinfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTraceinfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Traceinfo.push(Traceinfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTraceinfoResponse {
    return {
      Traceinfo: Array.isArray(object?.Traceinfo) ? object.Traceinfo.map((e: any) => Traceinfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTraceinfoResponse): unknown {
    const obj: any = {};
    if (message.Traceinfo) {
      obj.Traceinfo = message.Traceinfo.map((e) => e ? Traceinfo.toJSON(e) : undefined);
    } else {
      obj.Traceinfo = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTraceinfoResponse>, I>>(object: I): QueryAllTraceinfoResponse {
    const message = createBaseQueryAllTraceinfoResponse();
    message.Traceinfo = object.Traceinfo?.map((e) => Traceinfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPhtraceinfoRequest(): QueryGetPhtraceinfoRequest {
  return { id: 0 };
}

export const QueryGetPhtraceinfoRequest = {
  encode(message: QueryGetPhtraceinfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPhtraceinfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPhtraceinfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPhtraceinfoRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetPhtraceinfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPhtraceinfoRequest>, I>>(object: I): QueryGetPhtraceinfoRequest {
    const message = createBaseQueryGetPhtraceinfoRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetPhtraceinfoResponse(): QueryGetPhtraceinfoResponse {
  return { Phtraceinfo: undefined };
}

export const QueryGetPhtraceinfoResponse = {
  encode(message: QueryGetPhtraceinfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Phtraceinfo !== undefined) {
      Phtraceinfo.encode(message.Phtraceinfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPhtraceinfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPhtraceinfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Phtraceinfo = Phtraceinfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPhtraceinfoResponse {
    return { Phtraceinfo: isSet(object.Phtraceinfo) ? Phtraceinfo.fromJSON(object.Phtraceinfo) : undefined };
  },

  toJSON(message: QueryGetPhtraceinfoResponse): unknown {
    const obj: any = {};
    message.Phtraceinfo !== undefined
      && (obj.Phtraceinfo = message.Phtraceinfo ? Phtraceinfo.toJSON(message.Phtraceinfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPhtraceinfoResponse>, I>>(object: I): QueryGetPhtraceinfoResponse {
    const message = createBaseQueryGetPhtraceinfoResponse();
    message.Phtraceinfo = (object.Phtraceinfo !== undefined && object.Phtraceinfo !== null)
      ? Phtraceinfo.fromPartial(object.Phtraceinfo)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPhtraceinfoRequest(): QueryAllPhtraceinfoRequest {
  return { pagination: undefined };
}

export const QueryAllPhtraceinfoRequest = {
  encode(message: QueryAllPhtraceinfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPhtraceinfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPhtraceinfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPhtraceinfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPhtraceinfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPhtraceinfoRequest>, I>>(object: I): QueryAllPhtraceinfoRequest {
    const message = createBaseQueryAllPhtraceinfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPhtraceinfoResponse(): QueryAllPhtraceinfoResponse {
  return { Phtraceinfo: [], pagination: undefined };
}

export const QueryAllPhtraceinfoResponse = {
  encode(message: QueryAllPhtraceinfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Phtraceinfo) {
      Phtraceinfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPhtraceinfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPhtraceinfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Phtraceinfo.push(Phtraceinfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPhtraceinfoResponse {
    return {
      Phtraceinfo: Array.isArray(object?.Phtraceinfo)
        ? object.Phtraceinfo.map((e: any) => Phtraceinfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPhtraceinfoResponse): unknown {
    const obj: any = {};
    if (message.Phtraceinfo) {
      obj.Phtraceinfo = message.Phtraceinfo.map((e) => e ? Phtraceinfo.toJSON(e) : undefined);
    } else {
      obj.Phtraceinfo = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPhtraceinfoResponse>, I>>(object: I): QueryAllPhtraceinfoResponse {
    const message = createBaseQueryAllPhtraceinfoResponse();
    message.Phtraceinfo = object.Phtraceinfo?.map((e) => Phtraceinfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryShowTraceinfobydicRequest(): QueryShowTraceinfobydicRequest {
  return { dic: "" };
}

export const QueryShowTraceinfobydicRequest = {
  encode(message: QueryShowTraceinfobydicRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowTraceinfobydicRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowTraceinfobydicRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowTraceinfobydicRequest {
    return { dic: isSet(object.dic) ? String(object.dic) : "" };
  },

  toJSON(message: QueryShowTraceinfobydicRequest): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowTraceinfobydicRequest>, I>>(
    object: I,
  ): QueryShowTraceinfobydicRequest {
    const message = createBaseQueryShowTraceinfobydicRequest();
    message.dic = object.dic ?? "";
    return message;
  },
};

function createBaseQueryShowTraceinfobydicResponse(): QueryShowTraceinfobydicResponse {
  return { traceinfo: undefined };
}

export const QueryShowTraceinfobydicResponse = {
  encode(message: QueryShowTraceinfobydicResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traceinfo !== undefined) {
      Traceinfo.encode(message.traceinfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowTraceinfobydicResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowTraceinfobydicResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.traceinfo = Traceinfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowTraceinfobydicResponse {
    return { traceinfo: isSet(object.traceinfo) ? Traceinfo.fromJSON(object.traceinfo) : undefined };
  },

  toJSON(message: QueryShowTraceinfobydicResponse): unknown {
    const obj: any = {};
    message.traceinfo !== undefined
      && (obj.traceinfo = message.traceinfo ? Traceinfo.toJSON(message.traceinfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowTraceinfobydicResponse>, I>>(
    object: I,
  ): QueryShowTraceinfobydicResponse {
    const message = createBaseQueryShowTraceinfobydicResponse();
    message.traceinfo = (object.traceinfo !== undefined && object.traceinfo !== null)
      ? Traceinfo.fromPartial(object.traceinfo)
      : undefined;
    return message;
  },
};

function createBaseQueryShowPhtraceinfobydicRequest(): QueryShowPhtraceinfobydicRequest {
  return { dic: "" };
}

export const QueryShowPhtraceinfobydicRequest = {
  encode(message: QueryShowPhtraceinfobydicRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowPhtraceinfobydicRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPhtraceinfobydicRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowPhtraceinfobydicRequest {
    return { dic: isSet(object.dic) ? String(object.dic) : "" };
  },

  toJSON(message: QueryShowPhtraceinfobydicRequest): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowPhtraceinfobydicRequest>, I>>(
    object: I,
  ): QueryShowPhtraceinfobydicRequest {
    const message = createBaseQueryShowPhtraceinfobydicRequest();
    message.dic = object.dic ?? "";
    return message;
  },
};

function createBaseQueryShowPhtraceinfobydicResponse(): QueryShowPhtraceinfobydicResponse {
  return { phtraceinfo: undefined };
}

export const QueryShowPhtraceinfobydicResponse = {
  encode(message: QueryShowPhtraceinfobydicResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phtraceinfo !== undefined) {
      Phtraceinfo.encode(message.phtraceinfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowPhtraceinfobydicResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPhtraceinfobydicResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phtraceinfo = Phtraceinfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowPhtraceinfobydicResponse {
    return { phtraceinfo: isSet(object.phtraceinfo) ? Phtraceinfo.fromJSON(object.phtraceinfo) : undefined };
  },

  toJSON(message: QueryShowPhtraceinfobydicResponse): unknown {
    const obj: any = {};
    message.phtraceinfo !== undefined
      && (obj.phtraceinfo = message.phtraceinfo ? Phtraceinfo.toJSON(message.phtraceinfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowPhtraceinfobydicResponse>, I>>(
    object: I,
  ): QueryShowPhtraceinfobydicResponse {
    const message = createBaseQueryShowPhtraceinfobydicResponse();
    message.phtraceinfo = (object.phtraceinfo !== undefined && object.phtraceinfo !== null)
      ? Phtraceinfo.fromPartial(object.phtraceinfo)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Traceinfo by id. */
  Traceinfo(request: QueryGetTraceinfoRequest): Promise<QueryGetTraceinfoResponse>;
  /** Queries a list of Traceinfo items. */
  TraceinfoAll(request: QueryAllTraceinfoRequest): Promise<QueryAllTraceinfoResponse>;
  /** Queries a Phtraceinfo by id. */
  Phtraceinfo(request: QueryGetPhtraceinfoRequest): Promise<QueryGetPhtraceinfoResponse>;
  /** Queries a list of Phtraceinfo items. */
  PhtraceinfoAll(request: QueryAllPhtraceinfoRequest): Promise<QueryAllPhtraceinfoResponse>;
  /** Queries a list of ShowTraceinfobydic items. */
  ShowTraceinfobydic(request: QueryShowTraceinfobydicRequest): Promise<QueryShowTraceinfobydicResponse>;
  /** Queries a list of ShowPhtraceinfobydic items. */
  ShowPhtraceinfobydic(request: QueryShowPhtraceinfobydicRequest): Promise<QueryShowPhtraceinfobydicResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Traceinfo = this.Traceinfo.bind(this);
    this.TraceinfoAll = this.TraceinfoAll.bind(this);
    this.Phtraceinfo = this.Phtraceinfo.bind(this);
    this.PhtraceinfoAll = this.PhtraceinfoAll.bind(this);
    this.ShowTraceinfobydic = this.ShowTraceinfobydic.bind(this);
    this.ShowPhtraceinfobydic = this.ShowPhtraceinfobydic.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Traceinfo(request: QueryGetTraceinfoRequest): Promise<QueryGetTraceinfoResponse> {
    const data = QueryGetTraceinfoRequest.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Query", "Traceinfo", data);
    return promise.then((data) => QueryGetTraceinfoResponse.decode(new _m0.Reader(data)));
  }

  TraceinfoAll(request: QueryAllTraceinfoRequest): Promise<QueryAllTraceinfoResponse> {
    const data = QueryAllTraceinfoRequest.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Query", "TraceinfoAll", data);
    return promise.then((data) => QueryAllTraceinfoResponse.decode(new _m0.Reader(data)));
  }

  Phtraceinfo(request: QueryGetPhtraceinfoRequest): Promise<QueryGetPhtraceinfoResponse> {
    const data = QueryGetPhtraceinfoRequest.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Query", "Phtraceinfo", data);
    return promise.then((data) => QueryGetPhtraceinfoResponse.decode(new _m0.Reader(data)));
  }

  PhtraceinfoAll(request: QueryAllPhtraceinfoRequest): Promise<QueryAllPhtraceinfoResponse> {
    const data = QueryAllPhtraceinfoRequest.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Query", "PhtraceinfoAll", data);
    return promise.then((data) => QueryAllPhtraceinfoResponse.decode(new _m0.Reader(data)));
  }

  ShowTraceinfobydic(request: QueryShowTraceinfobydicRequest): Promise<QueryShowTraceinfobydicResponse> {
    const data = QueryShowTraceinfobydicRequest.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Query", "ShowTraceinfobydic", data);
    return promise.then((data) => QueryShowTraceinfobydicResponse.decode(new _m0.Reader(data)));
  }

  ShowPhtraceinfobydic(request: QueryShowPhtraceinfobydicRequest): Promise<QueryShowPhtraceinfobydicResponse> {
    const data = QueryShowPhtraceinfobydicRequest.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Query", "ShowPhtraceinfobydic", data);
    return promise.then((data) => QueryShowPhtraceinfobydicResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
