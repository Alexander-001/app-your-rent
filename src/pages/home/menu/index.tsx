import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useMenu } from "./useMenu";

const Menu = () => {
  const {
    //* Variables
    menuData,
    //* Functions
  } = useMenu();

  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            {item.data.map((option: any, index) => (
              <View key={index}>
                <TouchableOpacity style={styles.item}>
                  {option.isProfile ? (
                    <View style={styles.profileContainer}>
                      <Image
                        source={require("../../../../assets/perfil.jpeg")}
                        style={styles.profileImage}
                      />
                      <View style={styles.profileText}>
                        <Text style={styles.username}>Alexander Ortiz</Text>
                        <Text style={styles.subText}>{option.name}</Text>
                      </View>
                    </View>
                  ) : (
                    <Text style={styles.itemText}>{option.name}</Text>
                  )}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size={16}
                    color="#aaa"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Menu;
