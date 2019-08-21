import cv2
from skimage.measure import compare_ssim
from mpeople.models import MissingPerson
import pytesseract
from PIL import Image

def compare_image(img_link):
    img = cv2.imread(img_link)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    for mperson in MissingPerson.objects.all():
        mperson_img = cv2.imread(mperson.person_img)
        mperson_img = cv2.cvtColor(mperson_img, cv2.COLOR_BGR2GRAY)
        (score, diff) = compare_ssim(img, mperson_img, full=True)
        if score > 0.75:
            return mperson.id

    return -1

def extract_text_from_img(img_link):
    img = cv2.imread(img_link)
    image = Image.open(img_link)
    img_text = pytesseract.image_to_string(image, lang='en')
    return img_text
