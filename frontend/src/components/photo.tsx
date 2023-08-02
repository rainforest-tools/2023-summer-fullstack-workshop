import { useEffect, useState } from "react"
import { postAiArtPortrait } from "../api"

const Photo = () => {
  const [file, setFile] = useState<File>()
  const [src, setSrc] = useState<string>()
  const [result, setResult] = useState<string>()

  const upload = async () => {
    if (file) {
      const result = await postAiArtPortrait(file)
      setResult(result)
    }
  }


  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === 'string')
          setSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }, [file])

  return <>
    <input type="file" name="upload-img" id="upload-img" onChange={e => setFile(e.target.files?.[0])} />
    <img src={src} alt="origin-img" style={{ width: '300px' }} />
    <img src={result} alt="modified-img" style={{ width: '300px' }} />
    <button onClick={upload}>upload</button>
  </>
}

export default Photo