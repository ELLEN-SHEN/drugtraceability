/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "traceability.traceability";

export interface TraceabilityPacketData {
  noData:
    | NoData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  allowSellPacket:
    | AllowSellPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  addCustomerPacket:
    | AddCustomerPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  sellDrugPacket:
    | SellDrugPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  forbidShipPacket:
    | ForbidShipPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  allowShipPacket:
    | AllowShipPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  destroyDrugPacket:
    | DestroyDrugPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  sendDrugPacket:
    | SendDrugPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  requestShipPacket: RequestShipPacketData | undefined;
}

export interface NoData {
}

/** RequestShipPacketData defines a struct for the packet payload */
export interface RequestShipPacketData {
  dic: string;
  drugprof: string;
  termofvalidity: string;
  pharmacy: string;
  creator: string;
}

/** RequestShipPacketAck defines a struct for the packet acknowledgment */
export interface RequestShipPacketAck {
}

/** SendDrugPacketData defines a struct for the packet payload */
export interface SendDrugPacketData {
  dic: string;
}

/** SendDrugPacketAck defines a struct for the packet acknowledgment */
export interface SendDrugPacketAck {
}

/** DestroyDrugPacketData defines a struct for the packet payload */
export interface DestroyDrugPacketData {
  dic: string;
}

/** DestroyDrugPacketAck defines a struct for the packet acknowledgment */
export interface DestroyDrugPacketAck {
}

/** AllowShipPacketData defines a struct for the packet payload */
export interface AllowShipPacketData {
  dic: string;
}

/** AllowShipPacketAck defines a struct for the packet acknowledgment */
export interface AllowShipPacketAck {
}

/** ForbidShipPacketData defines a struct for the packet payload */
export interface ForbidShipPacketData {
  dic: string;
}

/** ForbidShipPacketAck defines a struct for the packet acknowledgment */
export interface ForbidShipPacketAck {
}

/** SellDrugPacketData defines a struct for the packet payload */
export interface SellDrugPacketData {
  dic: string;
}

/** SellDrugPacketAck defines a struct for the packet acknowledgment */
export interface SellDrugPacketAck {
}

/** AddCustomerPacketData defines a struct for the packet payload */
export interface AddCustomerPacketData {
  dic: string;
  customerid: string;
}

/** AddCustomerPacketAck defines a struct for the packet acknowledgment */
export interface AddCustomerPacketAck {
}

/** AllowSellPacketData defines a struct for the packet payload */
export interface AllowSellPacketData {
  dic: string;
  drugprof: string;
  termofvalidity: string;
  pharmacy: string;
  manufacturer: string;
}

/** AllowSellPacketAck defines a struct for the packet acknowledgment */
export interface AllowSellPacketAck {
}

function createBaseTraceabilityPacketData(): TraceabilityPacketData {
  return {
    noData: undefined,
    allowSellPacket: undefined,
    addCustomerPacket: undefined,
    sellDrugPacket: undefined,
    forbidShipPacket: undefined,
    allowShipPacket: undefined,
    destroyDrugPacket: undefined,
    sendDrugPacket: undefined,
    requestShipPacket: undefined,
  };
}

export const TraceabilityPacketData = {
  encode(message: TraceabilityPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowSellPacket !== undefined) {
      AllowSellPacketData.encode(message.allowSellPacket, writer.uint32(74).fork()).ldelim();
    }
    if (message.addCustomerPacket !== undefined) {
      AddCustomerPacketData.encode(message.addCustomerPacket, writer.uint32(66).fork()).ldelim();
    }
    if (message.sellDrugPacket !== undefined) {
      SellDrugPacketData.encode(message.sellDrugPacket, writer.uint32(58).fork()).ldelim();
    }
    if (message.forbidShipPacket !== undefined) {
      ForbidShipPacketData.encode(message.forbidShipPacket, writer.uint32(50).fork()).ldelim();
    }
    if (message.allowShipPacket !== undefined) {
      AllowShipPacketData.encode(message.allowShipPacket, writer.uint32(42).fork()).ldelim();
    }
    if (message.destroyDrugPacket !== undefined) {
      DestroyDrugPacketData.encode(message.destroyDrugPacket, writer.uint32(34).fork()).ldelim();
    }
    if (message.sendDrugPacket !== undefined) {
      SendDrugPacketData.encode(message.sendDrugPacket, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestShipPacket !== undefined) {
      RequestShipPacketData.encode(message.requestShipPacket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TraceabilityPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceabilityPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 9:
          message.allowSellPacket = AllowSellPacketData.decode(reader, reader.uint32());
          break;
        case 8:
          message.addCustomerPacket = AddCustomerPacketData.decode(reader, reader.uint32());
          break;
        case 7:
          message.sellDrugPacket = SellDrugPacketData.decode(reader, reader.uint32());
          break;
        case 6:
          message.forbidShipPacket = ForbidShipPacketData.decode(reader, reader.uint32());
          break;
        case 5:
          message.allowShipPacket = AllowShipPacketData.decode(reader, reader.uint32());
          break;
        case 4:
          message.destroyDrugPacket = DestroyDrugPacketData.decode(reader, reader.uint32());
          break;
        case 3:
          message.sendDrugPacket = SendDrugPacketData.decode(reader, reader.uint32());
          break;
        case 2:
          message.requestShipPacket = RequestShipPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TraceabilityPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      allowSellPacket: isSet(object.allowSellPacket) ? AllowSellPacketData.fromJSON(object.allowSellPacket) : undefined,
      addCustomerPacket: isSet(object.addCustomerPacket)
        ? AddCustomerPacketData.fromJSON(object.addCustomerPacket)
        : undefined,
      sellDrugPacket: isSet(object.sellDrugPacket) ? SellDrugPacketData.fromJSON(object.sellDrugPacket) : undefined,
      forbidShipPacket: isSet(object.forbidShipPacket)
        ? ForbidShipPacketData.fromJSON(object.forbidShipPacket)
        : undefined,
      allowShipPacket: isSet(object.allowShipPacket) ? AllowShipPacketData.fromJSON(object.allowShipPacket) : undefined,
      destroyDrugPacket: isSet(object.destroyDrugPacket)
        ? DestroyDrugPacketData.fromJSON(object.destroyDrugPacket)
        : undefined,
      sendDrugPacket: isSet(object.sendDrugPacket) ? SendDrugPacketData.fromJSON(object.sendDrugPacket) : undefined,
      requestShipPacket: isSet(object.requestShipPacket)
        ? RequestShipPacketData.fromJSON(object.requestShipPacket)
        : undefined,
    };
  },

  toJSON(message: TraceabilityPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.allowSellPacket !== undefined && (obj.allowSellPacket = message.allowSellPacket
      ? AllowSellPacketData.toJSON(message.allowSellPacket)
      : undefined);
    message.addCustomerPacket !== undefined && (obj.addCustomerPacket = message.addCustomerPacket
      ? AddCustomerPacketData.toJSON(message.addCustomerPacket)
      : undefined);
    message.sellDrugPacket !== undefined
      && (obj.sellDrugPacket = message.sellDrugPacket ? SellDrugPacketData.toJSON(message.sellDrugPacket) : undefined);
    message.forbidShipPacket !== undefined && (obj.forbidShipPacket = message.forbidShipPacket
      ? ForbidShipPacketData.toJSON(message.forbidShipPacket)
      : undefined);
    message.allowShipPacket !== undefined && (obj.allowShipPacket = message.allowShipPacket
      ? AllowShipPacketData.toJSON(message.allowShipPacket)
      : undefined);
    message.destroyDrugPacket !== undefined && (obj.destroyDrugPacket = message.destroyDrugPacket
      ? DestroyDrugPacketData.toJSON(message.destroyDrugPacket)
      : undefined);
    message.sendDrugPacket !== undefined
      && (obj.sendDrugPacket = message.sendDrugPacket ? SendDrugPacketData.toJSON(message.sendDrugPacket) : undefined);
    message.requestShipPacket !== undefined && (obj.requestShipPacket = message.requestShipPacket
      ? RequestShipPacketData.toJSON(message.requestShipPacket)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TraceabilityPacketData>, I>>(object: I): TraceabilityPacketData {
    const message = createBaseTraceabilityPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.allowSellPacket = (object.allowSellPacket !== undefined && object.allowSellPacket !== null)
      ? AllowSellPacketData.fromPartial(object.allowSellPacket)
      : undefined;
    message.addCustomerPacket = (object.addCustomerPacket !== undefined && object.addCustomerPacket !== null)
      ? AddCustomerPacketData.fromPartial(object.addCustomerPacket)
      : undefined;
    message.sellDrugPacket = (object.sellDrugPacket !== undefined && object.sellDrugPacket !== null)
      ? SellDrugPacketData.fromPartial(object.sellDrugPacket)
      : undefined;
    message.forbidShipPacket = (object.forbidShipPacket !== undefined && object.forbidShipPacket !== null)
      ? ForbidShipPacketData.fromPartial(object.forbidShipPacket)
      : undefined;
    message.allowShipPacket = (object.allowShipPacket !== undefined && object.allowShipPacket !== null)
      ? AllowShipPacketData.fromPartial(object.allowShipPacket)
      : undefined;
    message.destroyDrugPacket = (object.destroyDrugPacket !== undefined && object.destroyDrugPacket !== null)
      ? DestroyDrugPacketData.fromPartial(object.destroyDrugPacket)
      : undefined;
    message.sendDrugPacket = (object.sendDrugPacket !== undefined && object.sendDrugPacket !== null)
      ? SendDrugPacketData.fromPartial(object.sendDrugPacket)
      : undefined;
    message.requestShipPacket = (object.requestShipPacket !== undefined && object.requestShipPacket !== null)
      ? RequestShipPacketData.fromPartial(object.requestShipPacket)
      : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseRequestShipPacketData(): RequestShipPacketData {
  return { dic: "", drugprof: "", termofvalidity: "", pharmacy: "", creator: "" };
}

export const RequestShipPacketData = {
  encode(message: RequestShipPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    if (message.drugprof !== "") {
      writer.uint32(18).string(message.drugprof);
    }
    if (message.termofvalidity !== "") {
      writer.uint32(26).string(message.termofvalidity);
    }
    if (message.pharmacy !== "") {
      writer.uint32(34).string(message.pharmacy);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestShipPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestShipPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dic = reader.string();
          break;
        case 2:
          message.drugprof = reader.string();
          break;
        case 3:
          message.termofvalidity = reader.string();
          break;
        case 4:
          message.pharmacy = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestShipPacketData {
    return {
      dic: isSet(object.dic) ? String(object.dic) : "",
      drugprof: isSet(object.drugprof) ? String(object.drugprof) : "",
      termofvalidity: isSet(object.termofvalidity) ? String(object.termofvalidity) : "",
      pharmacy: isSet(object.pharmacy) ? String(object.pharmacy) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: RequestShipPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    message.drugprof !== undefined && (obj.drugprof = message.drugprof);
    message.termofvalidity !== undefined && (obj.termofvalidity = message.termofvalidity);
    message.pharmacy !== undefined && (obj.pharmacy = message.pharmacy);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestShipPacketData>, I>>(object: I): RequestShipPacketData {
    const message = createBaseRequestShipPacketData();
    message.dic = object.dic ?? "";
    message.drugprof = object.drugprof ?? "";
    message.termofvalidity = object.termofvalidity ?? "";
    message.pharmacy = object.pharmacy ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseRequestShipPacketAck(): RequestShipPacketAck {
  return {};
}

export const RequestShipPacketAck = {
  encode(_: RequestShipPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestShipPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestShipPacketAck();
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

  fromJSON(_: any): RequestShipPacketAck {
    return {};
  },

  toJSON(_: RequestShipPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestShipPacketAck>, I>>(_: I): RequestShipPacketAck {
    const message = createBaseRequestShipPacketAck();
    return message;
  },
};

function createBaseSendDrugPacketData(): SendDrugPacketData {
  return { dic: "" };
}

export const SendDrugPacketData = {
  encode(message: SendDrugPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendDrugPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendDrugPacketData();
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

  fromJSON(object: any): SendDrugPacketData {
    return { dic: isSet(object.dic) ? String(object.dic) : "" };
  },

  toJSON(message: SendDrugPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendDrugPacketData>, I>>(object: I): SendDrugPacketData {
    const message = createBaseSendDrugPacketData();
    message.dic = object.dic ?? "";
    return message;
  },
};

function createBaseSendDrugPacketAck(): SendDrugPacketAck {
  return {};
}

export const SendDrugPacketAck = {
  encode(_: SendDrugPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendDrugPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendDrugPacketAck();
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

  fromJSON(_: any): SendDrugPacketAck {
    return {};
  },

  toJSON(_: SendDrugPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendDrugPacketAck>, I>>(_: I): SendDrugPacketAck {
    const message = createBaseSendDrugPacketAck();
    return message;
  },
};

function createBaseDestroyDrugPacketData(): DestroyDrugPacketData {
  return { dic: "" };
}

export const DestroyDrugPacketData = {
  encode(message: DestroyDrugPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyDrugPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyDrugPacketData();
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

  fromJSON(object: any): DestroyDrugPacketData {
    return { dic: isSet(object.dic) ? String(object.dic) : "" };
  },

  toJSON(message: DestroyDrugPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DestroyDrugPacketData>, I>>(object: I): DestroyDrugPacketData {
    const message = createBaseDestroyDrugPacketData();
    message.dic = object.dic ?? "";
    return message;
  },
};

function createBaseDestroyDrugPacketAck(): DestroyDrugPacketAck {
  return {};
}

export const DestroyDrugPacketAck = {
  encode(_: DestroyDrugPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyDrugPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyDrugPacketAck();
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

  fromJSON(_: any): DestroyDrugPacketAck {
    return {};
  },

  toJSON(_: DestroyDrugPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DestroyDrugPacketAck>, I>>(_: I): DestroyDrugPacketAck {
    const message = createBaseDestroyDrugPacketAck();
    return message;
  },
};

function createBaseAllowShipPacketData(): AllowShipPacketData {
  return { dic: "" };
}

export const AllowShipPacketData = {
  encode(message: AllowShipPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowShipPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowShipPacketData();
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

  fromJSON(object: any): AllowShipPacketData {
    return { dic: isSet(object.dic) ? String(object.dic) : "" };
  },

  toJSON(message: AllowShipPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowShipPacketData>, I>>(object: I): AllowShipPacketData {
    const message = createBaseAllowShipPacketData();
    message.dic = object.dic ?? "";
    return message;
  },
};

function createBaseAllowShipPacketAck(): AllowShipPacketAck {
  return {};
}

export const AllowShipPacketAck = {
  encode(_: AllowShipPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowShipPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowShipPacketAck();
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

  fromJSON(_: any): AllowShipPacketAck {
    return {};
  },

  toJSON(_: AllowShipPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowShipPacketAck>, I>>(_: I): AllowShipPacketAck {
    const message = createBaseAllowShipPacketAck();
    return message;
  },
};

function createBaseForbidShipPacketData(): ForbidShipPacketData {
  return { dic: "" };
}

export const ForbidShipPacketData = {
  encode(message: ForbidShipPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForbidShipPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForbidShipPacketData();
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

  fromJSON(object: any): ForbidShipPacketData {
    return { dic: isSet(object.dic) ? String(object.dic) : "" };
  },

  toJSON(message: ForbidShipPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForbidShipPacketData>, I>>(object: I): ForbidShipPacketData {
    const message = createBaseForbidShipPacketData();
    message.dic = object.dic ?? "";
    return message;
  },
};

function createBaseForbidShipPacketAck(): ForbidShipPacketAck {
  return {};
}

export const ForbidShipPacketAck = {
  encode(_: ForbidShipPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForbidShipPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForbidShipPacketAck();
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

  fromJSON(_: any): ForbidShipPacketAck {
    return {};
  },

  toJSON(_: ForbidShipPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForbidShipPacketAck>, I>>(_: I): ForbidShipPacketAck {
    const message = createBaseForbidShipPacketAck();
    return message;
  },
};

function createBaseSellDrugPacketData(): SellDrugPacketData {
  return { dic: "" };
}

export const SellDrugPacketData = {
  encode(message: SellDrugPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellDrugPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellDrugPacketData();
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

  fromJSON(object: any): SellDrugPacketData {
    return { dic: isSet(object.dic) ? String(object.dic) : "" };
  },

  toJSON(message: SellDrugPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SellDrugPacketData>, I>>(object: I): SellDrugPacketData {
    const message = createBaseSellDrugPacketData();
    message.dic = object.dic ?? "";
    return message;
  },
};

function createBaseSellDrugPacketAck(): SellDrugPacketAck {
  return {};
}

export const SellDrugPacketAck = {
  encode(_: SellDrugPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellDrugPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellDrugPacketAck();
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

  fromJSON(_: any): SellDrugPacketAck {
    return {};
  },

  toJSON(_: SellDrugPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SellDrugPacketAck>, I>>(_: I): SellDrugPacketAck {
    const message = createBaseSellDrugPacketAck();
    return message;
  },
};

function createBaseAddCustomerPacketData(): AddCustomerPacketData {
  return { dic: "", customerid: "" };
}

export const AddCustomerPacketData = {
  encode(message: AddCustomerPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    if (message.customerid !== "") {
      writer.uint32(18).string(message.customerid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomerPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCustomerPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dic = reader.string();
          break;
        case 2:
          message.customerid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCustomerPacketData {
    return {
      dic: isSet(object.dic) ? String(object.dic) : "",
      customerid: isSet(object.customerid) ? String(object.customerid) : "",
    };
  },

  toJSON(message: AddCustomerPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    message.customerid !== undefined && (obj.customerid = message.customerid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCustomerPacketData>, I>>(object: I): AddCustomerPacketData {
    const message = createBaseAddCustomerPacketData();
    message.dic = object.dic ?? "";
    message.customerid = object.customerid ?? "";
    return message;
  },
};

function createBaseAddCustomerPacketAck(): AddCustomerPacketAck {
  return {};
}

export const AddCustomerPacketAck = {
  encode(_: AddCustomerPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomerPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCustomerPacketAck();
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

  fromJSON(_: any): AddCustomerPacketAck {
    return {};
  },

  toJSON(_: AddCustomerPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCustomerPacketAck>, I>>(_: I): AddCustomerPacketAck {
    const message = createBaseAddCustomerPacketAck();
    return message;
  },
};

function createBaseAllowSellPacketData(): AllowSellPacketData {
  return { dic: "", drugprof: "", termofvalidity: "", pharmacy: "", manufacturer: "" };
}

export const AllowSellPacketData = {
  encode(message: AllowSellPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    if (message.drugprof !== "") {
      writer.uint32(18).string(message.drugprof);
    }
    if (message.termofvalidity !== "") {
      writer.uint32(26).string(message.termofvalidity);
    }
    if (message.pharmacy !== "") {
      writer.uint32(34).string(message.pharmacy);
    }
    if (message.manufacturer !== "") {
      writer.uint32(42).string(message.manufacturer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowSellPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowSellPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dic = reader.string();
          break;
        case 2:
          message.drugprof = reader.string();
          break;
        case 3:
          message.termofvalidity = reader.string();
          break;
        case 4:
          message.pharmacy = reader.string();
          break;
        case 5:
          message.manufacturer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowSellPacketData {
    return {
      dic: isSet(object.dic) ? String(object.dic) : "",
      drugprof: isSet(object.drugprof) ? String(object.drugprof) : "",
      termofvalidity: isSet(object.termofvalidity) ? String(object.termofvalidity) : "",
      pharmacy: isSet(object.pharmacy) ? String(object.pharmacy) : "",
      manufacturer: isSet(object.manufacturer) ? String(object.manufacturer) : "",
    };
  },

  toJSON(message: AllowSellPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    message.drugprof !== undefined && (obj.drugprof = message.drugprof);
    message.termofvalidity !== undefined && (obj.termofvalidity = message.termofvalidity);
    message.pharmacy !== undefined && (obj.pharmacy = message.pharmacy);
    message.manufacturer !== undefined && (obj.manufacturer = message.manufacturer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowSellPacketData>, I>>(object: I): AllowSellPacketData {
    const message = createBaseAllowSellPacketData();
    message.dic = object.dic ?? "";
    message.drugprof = object.drugprof ?? "";
    message.termofvalidity = object.termofvalidity ?? "";
    message.pharmacy = object.pharmacy ?? "";
    message.manufacturer = object.manufacturer ?? "";
    return message;
  },
};

function createBaseAllowSellPacketAck(): AllowSellPacketAck {
  return {};
}

export const AllowSellPacketAck = {
  encode(_: AllowSellPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowSellPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowSellPacketAck();
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

  fromJSON(_: any): AllowSellPacketAck {
    return {};
  },

  toJSON(_: AllowSellPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowSellPacketAck>, I>>(_: I): AllowSellPacketAck {
    const message = createBaseAllowSellPacketAck();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
