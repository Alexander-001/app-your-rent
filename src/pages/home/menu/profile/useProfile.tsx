import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { ImageSourcePropType } from "react-native";
import { RootStackParamList } from "../../../../interfaces/menu.interfaces";

export interface Entry {
  image: ImageSourcePropType;
  description: string;
  timeAgo: string;
  userName: string;
}

export const useProfile = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [user, setUser] = useState({
    name: "Alexander Ortiz",
    location: "Santiago, Chile 🇨🇱",
    reviews: 5,
  });

  const [posts, setPosts] = useState([
    {
      name: "God Of War Ragnarok PS5",
      price: 35000,
      sell: false,
      rent: true,
      image: require("../../../../../assets/godofwar.webp"),
    },
    {
      name: "Ipad Mini 6 generación",
      price: 400000,
      sell: true,
      rent: false,
      image: require("../../../../../assets/ipad.webp"),
    },
  ]);

  const [reviews, setReviews] = useState<Entry[]>([
    {
      description:
        "Muy bueno el juego, lo arrende por 1 mes sin ningun problema, lo termine y lo devolvi, todo por solo 5 mil pesos, gracias!",
      image: require("../../../../../assets/perfil.jpeg"),
      userName: "Juan Pérez",
      timeAgo: "Hace 1 año",
    },
    {
      description:
        "Excelente estado del producto, todo perfecto, gracias por la rapidez!",
      image: require("../../../../../assets/perfil.jpeg"),
      userName: "María López",
      timeAgo: "Hace 6 meses",
    },
    {
      description: "Muy buena experiencia, todo como esperaba, recomendado!",
      image: require("../../../../../assets/perfil.jpeg"),
      userName: "Carlos Ruiz",
      timeAgo: "Hace 2 meses",
    },
  ]);

  const goToAllPosts = () => {
    navigation.navigate("Profile");
  };

  return {
    //* Variables
    user,
    posts,
    reviews,

    //* Functions
    goToAllPosts,
  };
};
