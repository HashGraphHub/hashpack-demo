FROM bobbystearman/hedera-py-java

### 1. Set environment variables
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

### 2. Setup GDAL
RUN apt-get update &&\
    apt-get install -y binutils libproj-dev gdal-bin python3-gdal


### 3. Create working directory
RUN mkdir /code
COPY . /code/
WORKDIR /code

### 4. Install packages
RUN set -e; \
    /usr/local/bin/python -m pip install --upgrade pip ;\
    python -m pip install -r /code/requirements/dev.txt ;\
    chmod +x /code/docker/entrypoints/entrypoint.sh ;

### 5. Run entrypoint
EXPOSE 8000
ENTRYPOINT ["/code/docker/entrypoints/entrypoint.sh"]


