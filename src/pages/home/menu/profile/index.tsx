import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useProfile } from "./useProfile";

const Profile: React.FC<{}> = () => {
  const {
    //* Variables
    user,
    posts,
    reviews,

    //* Functions
    goToAllPosts,
  } = useProfile();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileHeader}>
          <Image
            source={require("../../../../../assets/perfil.jpeg")}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.profileDetails}>{user.location}</Text>
            <Text style={styles.profileDetails}>
              ⭐ {user.reviews} Valoraciones
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon icon={faEdit} size={18} color="white" />
              <Text style={styles.editText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <Slider dataSlider={reviews} /> */}
      <View style={styles.profilePosts}>
        <Text style={styles.sectionTitle}>Publicaciones</Text>
        {posts.slice(0, 3).map((post, idx) => (
          <View style={styles.post} key={idx}>
            <Image source={post.image} style={styles.postImage} />
            <View style={styles.postDetails}>
              <Text style={styles.postTitle}>{post.name}</Text>
              <Text style={styles.postPrice}>${post.price}</Text>
            </View>
            <TouchableOpacity style={styles.soldButton}>
              {post.rent && (
                <Text style={styles.soldButtonText}>Marcar como arrendado</Text>
              )}
              {post.sell && (
                <Text style={styles.soldButtonText}>Marcar como vendido</Text>
              )}
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllButton} onPress={goToAllPosts}>
          <Text style={styles.viewAllText}>Ver todas las publicaciones</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
