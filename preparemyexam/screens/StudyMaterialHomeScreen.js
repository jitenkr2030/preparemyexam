import React from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudyMaterialHub() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      {/* Header Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, backgroundColor: '#000' }}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#fff' }}>
          Study Material Hub
        </Text>
      </View>

      {/* Search Bar */}
      <View style={{ padding: 10, backgroundColor: '#fff' }}>
        <TextInput
          style={{
            height: 40,
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 20,
            paddingLeft: 10,
            fontSize: 16,
          }}
          placeholder="Search for study materials, notes, textbooks..."
        />
      </View>

      {/* Categories Section */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Explore by Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          <CategoryTile title="Physics" icon="ios-flask" />
          <CategoryTile title="Mathematics" icon="ios-calculator" />
          <CategoryTile title="Chemistry" icon="ios-analytics" />
          <CategoryTile title="Engineering" icon="ios-cog" />
          <CategoryTile title="Medical" icon="ios-medical" />
        </ScrollView>
      </View>

      {/* Recommendations Section */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Recommended for You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          <RecommendationCard title="Physics Revision Notes" description="Comprehensive notes covering mechanics and thermodynamics." />
          <RecommendationCard title="Maths Practice Book" description="Advanced problems and solutions for IIT preparation." />
        </ScrollView>
      </View>

      {/* Recent Uploads Section */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Recent Uploads</Text>
        <RecentUpload title="Mathematics Notes – Algebra" uploader="Uploaded by ABC Institute" />
        <RecentUpload title="Chemistry Lab Guide" uploader="Uploaded by XYZ University" />
      </View>

      {/* Featured Content Section */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Featured Content</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          <FeaturedContentCard title="Advanced Chemistry – Textbook for NEET" />
          <FeaturedContentCard title="Physics for JEE Main" />
        </ScrollView>
      </View>

      {/* Footer Navigation */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20, backgroundColor: '#000' }}>
        <FooterButton title="Home" icon="ios-home" />
        <FooterButton title="My Library" icon="ios-book" />
        <FooterButton title="Upload" icon="ios-cloud-upload" />
        <FooterButton title="Settings" icon="ios-settings" />
      </View>

    </ScrollView>
  );
}

const CategoryTile = ({ title, icon }) => (
  <TouchableOpacity style={{ marginRight: 20, alignItems: 'center' }}>
    <Ionicons name={icon} size={40} color="#333" />
    <Text style={{ marginTop: 5, fontSize: 14, color: '#333' }}>{title}</Text>
  </TouchableOpacity>
);

const RecommendationCard = ({ title, description }) => (
  <TouchableOpacity style={{ marginRight: 20, width: 200, backgroundColor: '#fff', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
    <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: '100%', height: 100, borderRadius: 10 }} />
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{title}</Text>
    <Text style={{ fontSize: 14, color: '#666', marginTop: 5 }}>{description}</Text>
    <Button title="View" onPress={() => {}} />
  </TouchableOpacity>
);

const RecentUpload = ({ title, uploader }) => (
  <View style={{ marginTop: 10 }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
    <Text style={{ fontSize: 14, color: '#666' }}>{uploader}</Text>
    <Button title="Download" onPress={() => {}} />
  </View>
);

const FeaturedContentCard = ({ title }) => (
  <TouchableOpacity style={{ marginRight: 20, width: 200, backgroundColor: '#fff', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}>
    <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: '100%', height: 100, borderRadius: 10 }} />
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{title}</Text>
    <Button title="Learn More" onPress={() => {}} />
  </TouchableOpacity>
);

const FooterButton = ({ title, icon }) => (
  <TouchableOpacity style={{ alignItems: 'center' }}>
    <Ionicons name={icon} size={30} color="#fff" />
    <Text style={{ fontSize: 12, color: '#fff', marginTop: 5 }}>{title}</Text>
  </TouchableOpacity>
);
