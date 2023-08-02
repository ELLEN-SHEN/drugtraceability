import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendForbidShip } from "./types/traceability/traceability/tx";
import { MsgCheckdrug } from "./types/traceability/traceability/tx";
import { MsgSendAddCustomer } from "./types/traceability/traceability/tx";
import { MsgSendSendDrug } from "./types/traceability/traceability/tx";
import { MsgSendAllowShip } from "./types/traceability/traceability/tx";
import { MsgSendRequestShip } from "./types/traceability/traceability/tx";
import { MsgSendAllowSell } from "./types/traceability/traceability/tx";
import { MsgSendSellDrug } from "./types/traceability/traceability/tx";
import { MsgSendDestroyDrug } from "./types/traceability/traceability/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/traceability.traceability.MsgSendForbidShip", MsgSendForbidShip],
    ["/traceability.traceability.MsgCheckdrug", MsgCheckdrug],
    ["/traceability.traceability.MsgSendAddCustomer", MsgSendAddCustomer],
    ["/traceability.traceability.MsgSendSendDrug", MsgSendSendDrug],
    ["/traceability.traceability.MsgSendAllowShip", MsgSendAllowShip],
    ["/traceability.traceability.MsgSendRequestShip", MsgSendRequestShip],
    ["/traceability.traceability.MsgSendAllowSell", MsgSendAllowSell],
    ["/traceability.traceability.MsgSendSellDrug", MsgSendSellDrug],
    ["/traceability.traceability.MsgSendDestroyDrug", MsgSendDestroyDrug],
    
];

export { msgTypes }