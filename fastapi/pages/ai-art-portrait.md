# Case Study: AI Art Portrait

```mermaid
graph LR
  Upload[Upload an image] --> GAN
  GAN --> Portrait[AI Art Portrait]
```
```python
@app.post("/ai-art-portrait")
async def ai_art_portrait(file: Annotated[bytes, File()]):
  # read image
  image = Image.open(BytesIO(file))
  image = image.convert("L")
  result = BytesIO()
  # save image
  image.save(result, "jpeg")
  result.seek(0)
  # response with image
  return StreamingResponse(result, media_type="image/jpeg")
```