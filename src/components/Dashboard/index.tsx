import { Sumary } from "../Sumary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Sumary />
            <TransactionTable />
        </Container>
    );
}