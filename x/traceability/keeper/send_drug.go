package keeper

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v5/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v5/modules/core/24-host"
	"traceability/x/traceability/types"
)

// TransmitSendDrugPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitSendDrugPacket(
	ctx sdk.Context,
	packetData types.SendDrugPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.ChannelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.ScopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.ChannelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvSendDrugPacket processes packet reception
func (k Keeper) OnRecvSendDrugPacket(ctx sdk.Context, packet channeltypes.Packet, data types.SendDrugPacketData) (packetAck types.SendDrugPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	traceinfo, found := k.GetTraceinfoByDic(ctx, data.Dic)
	if !found {
		sdkerrors.Wrapf(types.ErrWrongTraceinfoDic, "dic %d doesn't exist", data.Dic)
	}
	if traceinfo.State != "allowed" {
		sdkerrors.Wrapf(types.ErrWrongTraceinfoState, "%v", traceinfo.State)
	}
	traceinfo.State = "sending"
	k.SetTraceinfo(ctx, traceinfo)

	// var phtraceinfo = types.Phtraceinfo{
	// 	Dic:            traceinfo.Dic,
	// 	Drugprof:       traceinfo.Drugprof,
	// 	Termofvalidity: traceinfo.Termofvalidity,
	// 	Pharmacy:       traceinfo.Pharmacy,
	// 	State:          "sending",
	// 	Manufacturer:   traceinfo.Manufacturer,
	// }
	// k.AppendPhtraceinfo(ctx, phtraceinfo)
	return packetAck, nil
}

// OnAcknowledgementSendDrugPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementSendDrugPacket(ctx sdk.Context, packet channeltypes.Packet, data types.SendDrugPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.SendDrugPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutSendDrugPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutSendDrugPacket(ctx sdk.Context, packet channeltypes.Packet, data types.SendDrugPacketData) error {

	// TODO: packet timeout logic

	return nil
}
