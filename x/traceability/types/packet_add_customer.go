package types

// ValidateBasic is used for validating the packet
func (p AddCustomerPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p AddCustomerPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_AddCustomerPacket{&p}

	return modulePacket.Marshal()
}
