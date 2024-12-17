import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import { api } from "@/services/api";
import Categories, { CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import Places from "@/components/places";

type MarketProps = PlaceProps & {

}

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [markets, setMarkets] = useState<MarketProps[]>([])

    const fetchCategories = async () => {
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
            setSelectedCategory(data[0].id)

        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred while fetching the categories")
        }
    }

    const fetchMarkets = async () => {
        if (!selectedCategory) {
            return
        }

        try {
            const { data } = await api.get(`/markets/category/${selectedCategory}`)
            setMarkets(data)

        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred while fetching the markets")
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchMarkets()
    }, [selectedCategory])

    return (
        <View style={{ flex: 1 }}>
            <Categories 
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <Places places={markets} />
        </View>
    )
}
