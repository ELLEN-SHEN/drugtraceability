package types

// ValidateBasic is used for validating the packet
func (p SellDrugPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p SellDrugPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_SellDrugPacket{&p}

	return modulePacket.Marshal()
}
