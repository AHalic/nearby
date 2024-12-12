import { View, Text } from "react-native";

import { styles } from "./styles";
import Step from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export default function Steps() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                How it works:
            </Text>

            <Step
                title="Find establishments"
                description="Find places near you that are Nearby partners"
                icon={IconMapPin}
            />

            <Step
                title="Activate the coupon with QR Code"
                description="Scan the QR code at the establishment to use the coupon"
                icon={IconQrcode}
            />

            <Step
                title="Enjoy the discount"
                description="Activate coupons wherever you are, in different types of establishments"
                icon={IconTicket}
            />
        </View>
    )
}
