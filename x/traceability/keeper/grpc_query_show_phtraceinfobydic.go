package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"traceability/x/traceability/types"
)

func (k Keeper) ShowPhtraceinfobydic(goCtx context.Context, req *types.QueryShowPhtraceinfobydicRequest) (*types.QueryShowPhtraceinfobydicResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx
	phtraceinfo, found := k.GetPhtraceinfoByDic(ctx, req.Dic)
	if !found {
		return nil, types.ErrWrongTraceinfoDic
	}

	return &types.QueryShowPhtraceinfobydicResponse{phtraceinfo}, nil
}
