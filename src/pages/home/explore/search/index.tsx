import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, Text, View } from "react-native";
import ProductCard from "../../../../components/ProductCard";
import { styles } from "./styles";
import { useSearch } from "./useSearch";

const SearchView = () => {
  const {
    //* Variables
    groupedProducts,
    screenHeight,
    headerHeight,
    //* Functions
    onClickImage,
  } = useSearch();

  return (
    <ScrollView
      contentContainerStyle={[styles.scrollContainer, { paddingBottom: 250 }]}
      style={{ height: screenHeight - headerHeight }}
    >
      <View style={styles.containerSuggestions}>
        <Text style={styles.suggestionsText}>Sugerencias de hoy</Text>
        <View style={styles.suggestionsContainer}>
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#09f" }} />
          <Text style={styles.locationText}>Santiago de Chile - 5km</Text>
        </View>
      </View>

      <View style={{ width: "100%" }}>
        {groupedProducts.map((pair, idx) => (
          <View key={idx} style={styles.row}>
            {pair.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                idx={index}
                onClickImage={onClickImage}
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchView;
