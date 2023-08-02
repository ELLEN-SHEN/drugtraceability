package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	channelutils "github.com/cosmos/ibc-go/v5/modules/core/04-channel/client/utils"
	"github.com/spf13/cobra"
	"traceability/x/traceability/types"
)

var _ = strconv.Itoa(0)

func CmdSendAllowSell() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-allow-sell [src-port] [src-channel] [dic] [drugprof] [termofvalidity] [pharmacy] [manufacturer]",
		Short: "Send a allow-sell over IBC",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			creator := clientCtx.GetFromAddress().String()
			srcPort := args[0]
			srcChannel := args[1]

			argDic := args[2]
			argDrugprof := args[3]
			argTermofvalidity := args[4]
			argPharmacy := args[5]
			argManufacturer := args[6]

			// Get the relative timeout timestamp
			timeoutTimestamp, err := cmd.Flags().GetUint64(flagPacketTimeoutTimestamp)
			if err != nil {
				return err
			}
			consensusState, _, _, err := channelutils.QueryLatestConsensusState(clientCtx, srcPort, srcChannel)
			if err != nil {
				return err
			}
			if timeoutTimestamp != 0 {
				timeoutTimestamp = consensusState.GetTimestamp() + timeoutTimestamp
			}

			msg := types.NewMsgSendAllowSell(creator, srcPort, srcChannel, timeoutTimestamp, argDic, argDrugprof, argTermofvalidity, argPharmacy, argManufacturer)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().Uint64(flagPacketTimeoutTimestamp, DefaultRelativePacketTimeoutTimestamp, "Packet timeout timestamp in nanoseconds. Default is 10 minutes.")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
