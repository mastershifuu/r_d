import requests

class Session(requests.Session):

    base_url = 'https://api.clickup.com/api/v2'

    def request(self, method, url, *args, **kwargs):
        if self.base_url:
            url = self.base_url + url
        headers = kwargs.get('header', {})
        headers['Authorization'] = 'pk_152618641_ZFBF6LO5I2TXLFCLFF38544OIOCDSERA'
        kwargs['headers'] = headers
        return super().request(method, url, *args, **kwargs)