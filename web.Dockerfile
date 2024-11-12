FROM python:3.12 AS builder
WORKDIR /app
COPY . .
RUN pip install h2==4.1.0 python-dotenv==1.0.1 supabase==2.7.4 reflex==0.6.1
RUN reflex export --frontend-only --no-zip

FROM nginx
COPY --from=builder /app/.web/_static /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
