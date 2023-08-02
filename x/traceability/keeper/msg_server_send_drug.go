package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"traceability/x/traceability/types"
)

func (k msgServer) SendSendDrug(goCtx context.Context, msg *types.MsgSendSendDrug) (*types.MsgSendSendDrugResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet
	traceinfo, found := k.GetTraceinfoByDic(ctx, msg.Dic)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoDic, "dic %d doesn't exist", msg.Dic)
	}
	if traceinfo.State != "allowed" {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoState, "%v", traceinfo.State)
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
	// Construct the packet
	var packet types.SendDrugPacketData
	packet.Dic = msg.Dic

	// Transmit the packet
	err := k.TransmitSendDrugPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendSendDrugResponse{}, nil
}
