import { Text, TouchableOpacity, View, TouchableOpacityProps, Image } from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

export type PlaceProps = {
    id: string
    name: string
    description: string
    coupons: number
    cover: string
    phone: string
    address: string
    rules: {
        id: string
        description: string
    }[]
}


export default function Place({
    id,
    name,
    description,
    coupons,
    cover,
    address,
    ...props
}: TouchableOpacityProps & PlaceProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...props}    
        >
            <Image style={styles.image} source={{uri: cover}}/>

            <View style={styles.content}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                    {description}
                </Text>

                <View style={styles.footer}>
                    <IconTicket size={16} color={colors.red.base} />

                    <Text style={styles.tickets}>
                        {coupons} Coupons Availables
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
