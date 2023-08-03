export enum OperatorEnum {
  ADD = "add",
  SUBTRACT = "subtract",
  MULTIPLY = "multiply",
  DIVIDE = "divide",
}

const baseUrl = "http://localhost:8000";

export const getMath = async (operator: OperatorEnum, a: number, b: number): Promise<number> => {
  const searchParams = new URLSearchParams({ operator, a: a.toString(), b: b.toString() });
  const response = await fetch(`${baseUrl}/math?${searchParams.toString()}`);
  const { result } = await response.json() as { result: number };
  return result;
};

export const postMath = async (operator: OperatorEnum, a: number, b: number): Promise<number> => {
  const response = await fetch(`${baseUrl}/math`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ operator, a, b }),
  });
  const { result } = await response.json() as { result: number };
  return result;
}

// upload image file to /ai-art-portrait and get file back
export const postAiArtPortrait = async (
  file: File,
) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`${baseUrl}/ai-art-portrait`, {
    method: "POST",
    body: formData,
  });
  const blob = await response.blob();
  return URL.createObjectURL(blob);
  const base64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64 = reader.result as string;
      resolve(base64);
    };
    reader.onerror = reject;
  });
  return base64;
}