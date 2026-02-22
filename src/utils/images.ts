export async function compressImage(
  file: File,
  maxWidth: number = 1200,
  quality: number = 0.7
): Promise<{ full: Blob; thumbnail: Blob }> {
  const bitmap = await createImageBitmap(file)

  const scale = Math.min(1, maxWidth / bitmap.width)
  const width = Math.round(bitmap.width * scale)
  const height = Math.round(bitmap.height * scale)

  const fullCanvas = new OffscreenCanvas(width, height)
  const fullCtx = fullCanvas.getContext('2d')!
  fullCtx.drawImage(bitmap, 0, 0, width, height)
  const full = await fullCanvas.convertToBlob({
    type: 'image/jpeg',
    quality,
  })

  const thumbScale = 200 / bitmap.width
  const thumbWidth = 200
  const thumbHeight = Math.round(bitmap.height * thumbScale)
  const thumbCanvas = new OffscreenCanvas(thumbWidth, thumbHeight)
  const thumbCtx = thumbCanvas.getContext('2d')!
  thumbCtx.drawImage(bitmap, 0, 0, thumbWidth, thumbHeight)
  const thumbnail = await thumbCanvas.convertToBlob({
    type: 'image/jpeg',
    quality: 0.6,
  })

  bitmap.close()
  return { full, thumbnail }
}
