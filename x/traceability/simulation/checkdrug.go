package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"traceability/x/traceability/keeper"
	"traceability/x/traceability/types"
)

func SimulateMsgCheckdrug(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCheckdrug{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the Checkdrug simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Checkdrug simulation not implemented"), nil, nil
	}
}
