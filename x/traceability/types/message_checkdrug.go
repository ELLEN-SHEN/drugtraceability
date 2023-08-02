package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCheckdrug = "checkdrug"

var _ sdk.Msg = &MsgCheckdrug{}

func NewMsgCheckdrug(creator string, dic string) *MsgCheckdrug {
	return &MsgCheckdrug{
		Creator: creator,
		Dic:     dic,
	}
}

func (msg *MsgCheckdrug) Route() string {
	return RouterKey
}

func (msg *MsgCheckdrug) Type() string {
	return TypeMsgCheckdrug
}

func (msg *MsgCheckdrug) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCheckdrug) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCheckdrug) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
