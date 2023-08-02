package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"traceability/x/traceability/types"
)

func (k msgServer) Checkdrug(goCtx context.Context, msg *types.MsgCheckdrug) (*types.MsgCheckdrugResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	traceinfo, found := k.GetTraceinfoByDic(ctx, msg.Dic)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoDic, "dic %d doesn't exist", msg.Dic)
	}
	if traceinfo.State != "sending" {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoState, "%v", traceinfo.State)
	}
	var phtraceinfo = types.Phtraceinfo{
		Dic:            msg.Dic,
		Drugprof:       traceinfo.Drugprof,
		Termofvalidity: traceinfo.Termofvalidity,
		Pharmacy:       traceinfo.Pharmacy,
		State:          "checked",
		Manufacturer:   traceinfo.Manufacturer,
	}
	k.AppendPhtraceinfo(ctx, phtraceinfo)

	return &types.MsgCheckdrugResponse{}, nil
}
