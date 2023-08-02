package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"traceability/x/traceability/types"
)

func (k msgServer) SendAllowSell(goCtx context.Context, msg *types.MsgSendAllowSell) (*types.MsgSendAllowSellResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	var phtraceinfo = types.Phtraceinfo{
		Dic:            msg.Dic,
		Drugprof:       msg.Drugprof,
		Termofvalidity: msg.Termofvalidity,
		Pharmacy:       msg.Pharmacy,
		State:          "allowsold",
		Manufacturer:   msg.Manufacturer,
	}
	k.AppendPhtraceinfo(ctx, phtraceinfo)

	// TODO: logic before transmitting the packet
	// phtraceinfo, found := k.GetPhtraceinfoByDic(ctx, msg.Dic)
	// if !found {
	// 	return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoDic, "dic %v doesn't exist", msg.Dic)
	// }
	// if phtraceinfo.State != "sending" {
	// 	return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoState, "%v", "sending")
	// }
	// if phtraceinfo.Drugprof != msg.Drugprof{
	// 	return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfo, "%v", msg.Drugprof)
	// }
	// phtraceinfo.State = "allowsold"
	// k.SetPhtraceinfo(ctx, phtraceinfo)

	// Construct the packet
	var packet types.AllowSellPacketData

	packet.Dic = msg.Dic
	packet.Drugprof = msg.Drugprof
	packet.Termofvalidity = msg.Termofvalidity
	packet.Pharmacy = msg.Pharmacy
	packet.Manufacturer = msg.Manufacturer
	// Transmit the packet
	err := k.TransmitAllowSellPacket(
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

	return &types.MsgSendAllowSellResponse{}, nil
}
