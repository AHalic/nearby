import { Text, useWindowDimensions } from "react-native";
import Place, { PlaceProps } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { styles } from "./styles";



export default function Places({places}: {
    places: PlaceProps[]
}) {
    const dimensions = useWindowDimensions();
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = {
        min: 278,
        max: dimensions.height -128
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            // index={0}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={styles.indicator}
            backgroundStyle={styles.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList 
                data={places}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.content}
                renderItem={({item}) => <Place {...item} />}
                ListHeaderComponent={() => 
                    <Text style={styles.title}>
                        Explore places close to you
                    </Text>
                }
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}
