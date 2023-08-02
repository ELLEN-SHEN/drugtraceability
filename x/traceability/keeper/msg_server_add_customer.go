package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"traceability/x/traceability/types"
)

func (k msgServer) SendAddCustomer(goCtx context.Context, msg *types.MsgSendAddCustomer) (*types.MsgSendAddCustomerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet
	phtraceinfo, found := k.GetPhtraceinfoByDic(ctx, msg.Dic)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoDic, "dic %v doesn't exist", msg.Dic)
	}
	if phtraceinfo.State != "selling" {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoState, "%v", phtraceinfo.State)
	}
	if phtraceinfo.Customers != "" {
		phtraceinfo.Customers += ","
	}
	phtraceinfo.Customers += msg.Customerid
	k.SetPhtraceinfo(ctx, phtraceinfo)

	// Construct the packet
	var packet types.AddCustomerPacketData

	packet.Dic = msg.Dic
	packet.Customerid = msg.Customerid

	// Transmit the packet
	err := k.TransmitAddCustomerPacket(
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

	return &types.MsgSendAddCustomerResponse{}, nil
}
