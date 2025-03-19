import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Picker, Switch } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function UploadMaterialScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [file, setFile] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "image/*"],
    });
    if (result.type === "success") {
      setFile(result);
    }
  };

  const handleSubmit = () => {
    if (!title || !category || !materialType || !file) {
      Alert.alert("Error", "Please fill all required fields!");
      return;
    }
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      Alert.alert("Success", "Material uploaded successfully!");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Upload Material</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Material Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title (e.g., Physics Notes)"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Add a brief description"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Text style={styles.label}>Category</Text>
        <Picker
          selectedValue={category}
          style={styles.input}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Select a category" value="" />
          <Picker.Item label="Physics" value="Physics" />
          <Picker.Item label="Chemistry" value="Chemistry" />
          <Picker.Item label="Math" value="Math" />
        </Picker>

        <Text style={styles.label}>Tags (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter tags (e.g., NEET, JEE)"
          value={tags}
          onChangeText={setTags}
        />

        <Text style={styles.label}>Material Type</Text>
        <Picker
          selectedValue={materialType}
          style={styles.input}
          onValueChange={(itemValue) => setMaterialType(itemValue)}
        >
          <Picker.Item label="Select type of material" value="" />
          <Picker.Item label="PDF" value="PDF" />
          <Picker.Item label="Image" value="Image" />
        </Picker>

        <Text style={styles.label}>Upload File</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
          <Text style={styles.uploadText}>Upload File</Text>
        </TouchableOpacity>
        {file && (
          <View style={styles.filePreview}>
            <Text>{file.name}</Text>
          </View>
        )}

        <View style={styles.permission}>
          <Text style={styles.label}>Allow others to view/download this material</Text>
          <Switch value={isPublic} onValueChange={setIsPublic} />
        </View>

        {uploading && <Text style={styles.uploadingText}>Uploading... Please wait</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Upload Material</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backButton: { marginRight: 10 },
  backText: { fontSize: 18 },
  title: { fontSize: 20, fontWeight: "bold" },
  form: { flex: 1 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 5, padding: 10, marginTop: 5 },
  textArea: { height: 100, textAlignVertical: "top" },
  uploadButton: { backgroundColor: "#007bff", padding: 10, borderRadius: 5, marginTop: 10 },
  uploadText: { color: "#fff", textAlign: "center" },
  filePreview: { marginTop: 10 },
  permission: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 },
  uploadingText: { marginTop: 10, color: "gray" },
  submitButton: { backgroundColor: "#28a745", padding: 15, borderRadius: 5, marginTop: 20 },
  submitText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  cancelButton: { marginTop: 10, padding: 10 },
  cancelText: { color: "red", textAlign: "center" },
});
