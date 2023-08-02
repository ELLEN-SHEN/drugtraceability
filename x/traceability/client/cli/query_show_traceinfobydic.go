package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"traceability/x/traceability/types"
)

var _ = strconv.Itoa(0)

func CmdShowTraceinfobydic() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-traceinfobydic [dic]",
		Short: "Query show-traceinfobydic",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqDic := args[0]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryShowTraceinfobydicRequest{

				Dic: reqDic,
			}

			res, err := queryClient.ShowTraceinfobydic(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
