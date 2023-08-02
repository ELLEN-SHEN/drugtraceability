package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendAllowSell = "send_allow_sell"

var _ sdk.Msg = &MsgSendAllowSell{}

func NewMsgSendAllowSell(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	dic string,
	drugprof string,
	termofvalidity string,
	pharmacy string,
	manufacturer string,
) *MsgSendAllowSell {
	return &MsgSendAllowSell{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Dic:              dic,
		Drugprof:         drugprof,
		Termofvalidity:   termofvalidity,
		Pharmacy:         pharmacy,
		Manufacturer:     manufacturer,
	}
}

func (msg *MsgSendAllowSell) Route() string {
	return RouterKey
}

func (msg *MsgSendAllowSell) Type() string {
	return TypeMsgSendAllowSell
}

func (msg *MsgSendAllowSell) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendAllowSell) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendAllowSell) ValidateBasic() error {
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
