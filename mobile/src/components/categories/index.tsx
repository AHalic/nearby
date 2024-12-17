import { FlatList } from "react-native";
import Category from "../category";
import { styles } from "./styles";


export type CategoriesProps = {
    id: string
    name: string
}[]

export default function Categories({ categories, selected, onSelect }: {
    categories: CategoriesProps,
    selected: string,
    onSelect: (id: string) => void
}) {
    return (
        <FlatList 
            horizontal
            data={categories}
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Category 
                    iconId={item.id}
                    name={item.name}
                    onPress={() => onSelect(item.id)}
                    isSelected={selected === item.id}
                />
            )}
        />   
    )
}
