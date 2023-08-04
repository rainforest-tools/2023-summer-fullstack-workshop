import { useEffect, useState } from "react"
import { postAiArtPortrait } from "../api"

const Photo = () => {
  const [file, setFile] = useState<File>()
  const [originalSrc, setOriginalSrc] = useState<string>('')
  const [src, setSrc] = useState<string>('')
  const upload = async () => {
    if (!file) return
    const src = await postAiArtPortrait(file)
    setSrc(src)
  }

  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setOriginalSrc(reader.result as string)
      })
      reader.readAsDataURL(file)
    }
  }, [file])

  return <div>
    <h1>Photo</h1>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <input type="file" name="file" onChange={e => setFile(e.target.files?.[0])} />
      <button onClick={upload}>Upload</button>
    </div>
    <img src={originalSrc} alt="" />
    <img src={src} alt="" />
  </div>
}

export default Photo