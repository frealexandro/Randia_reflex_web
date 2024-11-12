FROM python:3.12

ENV REDIS_URL=redis://redis:6379
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY . .
RUN pip install h2==4.1.0 python-dotenv==1.0.1 supabase==2.7.4 reflex==0.6.1

ENTRYPOINT ["reflex", "run", "--env", "prod", "--backend-only", "--loglevel", "debug"]

