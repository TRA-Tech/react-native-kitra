import Layout from "../components/Layout";
import { Chip } from "@tra-tech/react-native-kitra";
import { useState } from "react";
import Divider from "../components/Divider";

const ChipScreen = () => {
    const [status, setStatus] = useState(false);
    console.log(status);
    return (
        <Layout>
            <Chip onChange={setStatus} value={status} label="Press Me!"></Chip>

            <Divider label="Disabled" />
            <Chip disable label="Press Me!"></Chip>

        </Layout>
    )
}

export default ChipScreen;
