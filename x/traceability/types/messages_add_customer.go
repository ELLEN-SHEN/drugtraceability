package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendAddCustomer = "send_add_customer"

var _ sdk.Msg = &MsgSendAddCustomer{}

func NewMsgSendAddCustomer(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	dic string,
	customerid string,
) *MsgSendAddCustomer {
	return &MsgSendAddCustomer{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Dic:              dic,
		Customerid:       customerid,
	}
}

func (msg *MsgSendAddCustomer) Route() string {
	return RouterKey
}

func (msg *MsgSendAddCustomer) Type() string {
	return TypeMsgSendAddCustomer
}

func (msg *MsgSendAddCustomer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendAddCustomer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendAddCustomer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
