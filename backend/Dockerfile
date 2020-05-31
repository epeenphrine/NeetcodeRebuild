FROM python:3.7

WORKDIR /backend/

COPY ./ ./



RUN pip install pipenv && pip install -r requirements.txt && python manage.py collectstatic --noinput 

## workers = process threads = concurrency. 
##CMD gunicorn --workers=4 threads=4 backend.wsgi:application --bind 0.0.0.0:8000

CMD python manage.py runserver 0.0.0.0:8000