FROM python:3.12 AS builder
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
RUN reflex export --frontend-only --no-zip

FROM nginx
COPY --from=builder /app/.web/_static /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Modificar el puerto a 8080 para Cloud Run
RUN sed -i 's/listen 80/listen 8080/g' /etc/nginx/conf.d/default.conf
