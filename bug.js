This bug occurs when using the Expo SDK's `Image` component with a remote image URL that contains special characters, particularly URL-encoded characters.  The image fails to load, and no error is thrown in the console.  The `Image` component renders nothing, or a broken image placeholder, making debugging difficult. This behavior is inconsistent and might depend on the specific character encoding and the image source. 

Example:
```javascript
<Image source={{ uri: 'https://example.com/image%20with%20spaces.jpg' }} /> 
```