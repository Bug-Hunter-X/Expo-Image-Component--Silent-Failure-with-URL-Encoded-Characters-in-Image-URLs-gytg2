This solution uses the `decodeURIComponent` function to decode the URL-encoded characters before passing the URI to the `Image` component:

```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const encodedURI = 'https://example.com/image%20with%20spaces.jpg';
  const decodedURI = decodeURIComponent(encodedURI);

  return (
    <>
      <Image source={{ uri: decodedURI }} style={{ width: 200, height: 200 }} />
    </>
  );
};

export default MyComponent;
```

This approach assumes the URL encoding is standard URL encoding.  For more complex encoding situations, a more robust URL parsing library might be needed.