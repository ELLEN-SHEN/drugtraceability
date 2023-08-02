package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"traceability/x/traceability/types"
)

func (k Keeper) ShowTraceinfobydic(goCtx context.Context, req *types.QueryShowTraceinfobydicRequest) (*types.QueryShowTraceinfobydicResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	// _ = ctx
	traceinfo, found := k.GetTraceinfoByDic(ctx, req.Dic)
	if !found {
		return nil, types.ErrWrongTraceinfoDic
	}

	return &types.QueryShowTraceinfobydicResponse{Traceinfo: traceinfo}, nil
}
