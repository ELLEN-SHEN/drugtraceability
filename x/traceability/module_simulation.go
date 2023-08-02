package traceability

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"traceability/testutil/sample"
	traceabilitysimulation "traceability/x/traceability/simulation"
	"traceability/x/traceability/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = traceabilitysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	// opWeightMsgTraceinfobydic = "op_weight_msg_traceinfobydic"
	// // TODO: Determine the simulation weight value
	// defaultWeightMsgTraceinfobydic int = 100

	opWeightMsgCheckdrug = "op_weight_msg_checkdrug"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCheckdrug int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	traceabilityGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&traceabilityGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	// var weightMsgTraceinfobydic int
	// simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgTraceinfobydic, &weightMsgTraceinfobydic, nil,
	// 	func(_ *rand.Rand) {
	// 		weightMsgTraceinfobydic = defaultWeightMsgTraceinfobydic
	// 	},
	// )
	// operations = append(operations, simulation.NewWeightedOperation(
	// 	weightMsgTraceinfobydic,
	// 	traceabilitysimulation.SimulateMsgTraceinfobydic(am.accountKeeper, am.bankKeeper, am.keeper),
	// ))

	var weightMsgCheckdrug int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCheckdrug, &weightMsgCheckdrug, nil,
		func(_ *rand.Rand) {
			weightMsgCheckdrug = defaultWeightMsgCheckdrug
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCheckdrug,
		traceabilitysimulation.SimulateMsgCheckdrug(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
