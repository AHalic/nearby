import { Text, View } from "react-native";
import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";

import { PlaceProps } from "@/components/place";

import Info from "../info";

import { styles } from "./styles";


export default function Details({
    name,
    description,
    coupons,
    address,
    phone,
    rules,
}: PlaceProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <View style={styles.group}>
                <Text style={styles.title}>
                    Informations
                </Text>

                <Info icon={IconTicket} description={`${coupons} available coupons`} />

                <Info icon={IconMapPin} description={address} />

                <Info icon={IconPhone} description={phone} />
            </View>

            <View style={styles.group}>
                <Text style={styles.title}>
                    Rules
                </Text>

                {rules.map(( rule ) => (
                    <Text key={rule.id} style={styles.rule}>
                        {/* code for bullet point */}
                        {`\u2022 ${rule.description}`}
                    </Text>
                ))}
            </View>
        </View>
    )
}
