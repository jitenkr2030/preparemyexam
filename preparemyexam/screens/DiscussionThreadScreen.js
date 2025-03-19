import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

const DiscussionThreadScreen = () => {
  const thread = {
    title: "How to Stay Motivated During Exam Season?",
    author: "John Doe",
    avatar: "https://via.placeholder.com/50",
    date: "Posted on Dec 24, 2024",
    category: "Study Tips",
    content: "I'm struggling to stay focused with exams around the corner. Any tips to keep the motivation high?",
    likes: 50,
    media: ["https://via.placeholder.com/300"],
  };

  const comments = [
    {
      id: "1",
      author: "Jane Smith",
      avatar: "https://via.placeholder.com/50",
      text: "Setting small, achievable goals really helps!",
      time: "1 hour ago",
      likes: 10,
    },
    {
      id: "2",
      author: "Alex Johnson",
      avatar: "https://via.placeholder.com/50",
      text: "Try the Pomodoro technique—it works wonders!",
      time: "3 hours ago",
      likes: 8,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Discussion Thread</Text>
      </View>

      {/* Thread Content */}
      <ScrollView style={styles.threadContent}>
        <Text style={styles.threadTitle}>{thread.title}</Text>
        <View style={styles.threadHeader}>
          <Image source={{ uri: thread.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.author}>{thread.author}</Text>
            <Text style={styles.date}>{thread.date}</Text>
            <Text style={styles.category}>{thread.category}</Text>
          </View>
        </View>
        <Text style={styles.content}>{thread.content}</Text>
        {thread.media.map((url, index) => (
          <Image key={index} source={{ uri: url }} style={styles.media} />
        ))}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="hearto" size={18} color="black" />
            <Text style={styles.actionText}>{thread.likes} Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="bookmark-o" size={18} color="black" />
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Comment Section */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.commentContent}>
              <Text style={styles.commentAuthor}>{item.author}</Text>
              <Text style={styles.commentText}>{item.text}</Text>
              <Text style={styles.commentTime}>{item.time}</Text>
              <TouchableOpacity style={styles.likeButton}>
                <AntDesign name="hearto" size={14} color="black" />
                <Text style={styles.likeCount}>{item.likes}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Feather name="message-circle" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: { flex: 1, textAlign: "center", fontSize: 18, fontWeight: "bold" },
  threadContent: { padding: 16 },
  threadTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  threadHeader: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 8 },
  author: { fontSize: 16, fontWeight: "bold" },
  date: { color: "#777" },
  category: { color: "#3498db", fontWeight: "bold" },
  content: { fontSize: 16, marginBottom: 16 },
  media: { width: "100%", height: 200, borderRadius: 8, marginBottom: 16 },
  actions: { flexDirection: "row", justifyContent: "space-between" },
  actionButton: { flexDirection: "row", alignItems: "center" },
  actionText: { marginLeft: 8 },
  comment: { flexDirection: "row", padding: 16, borderBottomWidth: 1, borderBottomColor: "#eee" },
  commentContent: { marginLeft: 8, flex: 1 },
  commentAuthor: { fontWeight: "bold", marginBottom: 4 },
  commentText: { marginBottom: 4 },
  commentTime: { color: "#777" },
  likeButton: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  likeCount: { marginLeft: 4 },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DiscussionThreadScreen;
