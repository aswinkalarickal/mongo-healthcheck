## Healthcheck for MongoDB

This will create a Healthcheck for MongoDB server running in Docker if running on the same host.

## Install

The default port is set to `80`. You may change it within the code by cloning the project.

```sh
$ docker build -t mongo-healthcheck .
$ docker run -d -p 80:80 mongo-healthcheck
```

## Usage

The healthcheck will be provided at `http://host-domain-or-ip-address`.

## License
[MIT](https://github.com/aswinkalarickal/mongo-healthcheck/blob/master/LICENSE.md)
