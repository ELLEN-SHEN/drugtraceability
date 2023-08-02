package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"traceability/x/traceability/types"
)

func (k msgServer) SendSellDrug(goCtx context.Context, msg *types.MsgSendSellDrug) (*types.MsgSendSellDrugResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet
	phtraceinfo, found := k.GetPhtraceinfoByDic(ctx, msg.Dic)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoDic, "dic %d doesn't exist", msg.Dic)
	}
	if phtraceinfo.State != "allowsold" {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoState, "%v", phtraceinfo.State)
	}
	phtraceinfo.State = "selling"
	k.SetPhtraceinfo(ctx, phtraceinfo)

	// Construct the packet
	var packet types.SellDrugPacketData

	packet.Dic = msg.Dic

	// Transmit the packet
	err := k.TransmitSellDrugPacket(
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

	return &types.MsgSendSellDrugResponse{}, nil
}
