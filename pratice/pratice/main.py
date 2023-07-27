from enum import Enum
from typing import Annotated, Optional
from io import BytesIO
from PIL import Image
from fastapi import FastAPI, HTTPException, File
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from mangum import Mangum

api = FastAPI()
handler = Mangum(api)

from faker import Faker
faker = Faker()

@api.get('/')
def hello_world():
    return {'message': 'Hello World'}

class OperatorEnum(str, Enum):
    add = 'add'
    subtract = 'subtract'
    multiply = 'multiply'
    divide = 'divide'

@api.get('/math')
@api.get('/math/{operator}')
@api.get('/math/{operator}/{num1}/{num2}')
def math_endpoint(operator: OperatorEnum, num1: int, num2: int):
    match operator:
        case OperatorEnum.add:
            return {'result': num1 + num2}
        case OperatorEnum.subtract:
            return {'result': num1 - num2}
        case OperatorEnum.multiply:
            return {'result': num1 * num2}
        case OperatorEnum.divide:
            return {'result': num1 / num2}
        case _:
            raise HTTPException(status_code=400, detail='Invalid operator')
        
class GoogleForm(BaseModel):
    first_name: str
    last_name: str
    email: str
    age: int

class GoogleFormResponse(BaseModel):
    name: str
    email: str
    age: int
    is_valid_email: bool

@api.post('/google-form', response_model=GoogleFormResponse)
def google_form_endpoint(google_form: GoogleForm):
    name = f'{google_form.first_name} {google_form.last_name}'
    is_valid_email = '@' in google_form.email
    return {
        "name": name,
        "email": google_form.email,
        "age": google_form.age,
        "is_valid_email": is_valid_email
    }

def CycleGAN(image: Image):
    # TODO: Implement CycleGAN
    image = image.convert('RGB')
    image = image.convert('L')
    return image
    
@api.post('/faceapp')
def faceapp_endpoint(file: Annotated[bytes, File()]):
    image = Image.open(BytesIO(file))
    image = CycleGAN(image)
    buffer = BytesIO()
    image.save(buffer, format='JPEG')
    buffer.seek(0)
    return StreamingResponse(buffer, media_type='image/jpeg')

class BardRequest(BaseModel):
    message: str

def Bard(message: str):
    return faker.text()

@api.post('/bard')
def bard_endpoint(request: BardRequest):
    message = request.message
    response_message = Bard(message)
    return response_message

class MidjourneyRequest(BaseModel):
    message: str

def Midjourney(message: str, resolution: int) -> BytesIO:
    from randimage import get_random_image
    random_image = get_random_image((resolution, resolution))
    image = Image.fromarray(random_image.astype('uint8') * 255)
    result = BytesIO()
    image.save(result, "jpeg")
    result.seek(0)
    return result


@api.post('/midjourney')
def midjourney_endpoint(request: MidjourneyRequest, resolution: Optional[int] = 16):
    message = request.message
    image = Midjourney(message, resolution)
    return StreamingResponse(image, media_type='image/jpeg')