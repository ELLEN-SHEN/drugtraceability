package types

// ValidateBasic is used for validating the packet
func (p AllowSellPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p AllowSellPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_AllowSellPacket{&p}

	return modulePacket.Marshal()
}
