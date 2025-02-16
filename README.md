# Expo Image Component Issue: Silent Failure with URL-Encoded Characters

This repository demonstrates a bug in Expo's `Image` component where images with URL-encoded characters in their filenames fail to load silently.  The issue is particularly noticeable when using images with spaces or other special characters in their names that have been URL-encoded.

## Bug Description

The `Image` component does not throw any errors when attempting to load an image with URL-encoded characters in its URI. Instead, it simply fails to load, rendering nothing or a default placeholder. This silent failure makes debugging difficult.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with URL-encoded characters fails to load, while the other image loads correctly.

## Solution

A possible solution involves using a library or function to decode the URL before passing it to the `Image` component. See the `bugSolution.js` file for a possible fix. Note that the effectiveness of this solution might depend on the underlying issue.

## Additional Notes

This issue appears to be related to how Expo handles special characters in image URLs. The behavior is inconsistent, and the underlying cause may need further investigation.