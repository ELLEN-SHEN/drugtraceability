package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgSendRequestShip{}, "traceability/SendRequestShip", nil)
	cdc.RegisterConcrete(&MsgSendSendDrug{}, "traceability/SendSendDrug", nil)
	cdc.RegisterConcrete(&MsgSendDestroyDrug{}, "traceability/SendDestroyDrug", nil)
	cdc.RegisterConcrete(&MsgSendAllowShip{}, "traceability/SendAllowShip", nil)
	cdc.RegisterConcrete(&MsgSendForbidShip{}, "traceability/SendForbidShip", nil)
	// cdc.RegisterConcrete(&MsgTraceinfobydic{}, "traceability/Traceinfobydic", nil)
	cdc.RegisterConcrete(&MsgSendSellDrug{}, "traceability/SendSellDrug", nil)
	cdc.RegisterConcrete(&MsgSendAddCustomer{}, "traceability/SendAddCustomer", nil)
	cdc.RegisterConcrete(&MsgSendAllowSell{}, "traceability/SendAllowSell", nil)
	cdc.RegisterConcrete(&MsgCheckdrug{}, "traceability/Checkdrug", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendRequestShip{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendSendDrug{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendDestroyDrug{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendAllowShip{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendForbidShip{},
	)
	// registry.RegisterImplementations((*sdk.Msg)(nil),
	// 	&MsgTraceinfobydic{},
	// )
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendSellDrug{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendAddCustomer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendAllowSell{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCheckdrug{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
