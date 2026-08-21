# Black screen patch

Vercel build completed successfully with no TypeScript, prerender, or runtime errors. The production page rendered a full-page image (`/booth-visual-reference.webp`) over a black background. The deployed image asset was the failure point, so when the browser could not render it the page appeared completely black.

Patch:
- replace the production visual reference asset with a verified WebP generated directly from the approved supplied reference image;
- keep the current image-led visual implementation temporarily so the approved visual can render reliably;
- verify the public asset independently after deployment before converting the visual into responsive native sections.
