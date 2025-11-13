// Helper to load an image from a URL
function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Needed for external images
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
}

export async function blendImages(
    bottomSrc: string,
    topSrc: string,
    maskSrc: string
): Promise<string> {
    const [bottomImage, topImage, maskImage] = await Promise.all([
        loadImage(bottomSrc),
        loadImage(topSrc),
        loadImage(maskSrc),
    ]);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
        throw new Error('Could not get canvas context');
    }

    const width = 512;
    const height = 768;
    canvas.width = width;
    canvas.height = height;

    // 1. Create a temporary canvas for the top image with the mask applied
    const topCanvas = document.createElement('canvas');
    const topCtx = topCanvas.getContext('2d');
    if (!topCtx) throw new Error('Could not get top canvas context');
    topCanvas.width = width;
    topCanvas.height = height;

    // Draw the top image first
    topCtx.drawImage(topImage, 0, 0, width, height);

    // Then, use the mask to "punch out" parts of the top image.
    // 'destination-in' means the existing content (top image) is kept where it overlaps the new shape (mask).
    topCtx.globalCompositeOperation = 'destination-in';
    topCtx.drawImage(maskImage, 0, 0, width, height);
    
    // Reset composite operation for the main canvas
    ctx.globalCompositeOperation = 'source-over';

    // 2. Draw the bottom image on the main canvas
    ctx.drawImage(bottomImage, 0, 0, width, height);

    // 3. Draw the masked top image over the bottom image
    ctx.drawImage(topCanvas, 0, 0);

    // 4. Return the result as a data URL
    return canvas.toDataURL('image/png');
}
