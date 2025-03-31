import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Entry } from "../../pages/home/menu/profile/useProfile";

interface Props {
  item: Entry;
  index: number;
}

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      >
        <Text>{item.description}</Text>
      </LinearGradient>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width,
  },
  background: {
    position: "absolute",
    height: 100,
    width: 100,
  },
});
