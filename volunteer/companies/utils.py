import os
from django.apps import apps
from django.utils.deconstruct import deconstructible


@deconstructible
class UploadTo:
    def __init__(self, name):
        self.name = name

    def __call__(self, instance, filename):
        upload_to = f'{instance.__class__.__name__}'
        ext = filename.split('.')[-1]
        if instance.pk:
            filename = f'{instance.pk}_{self.name}.{ext}'
        else:
            pass
        return os.path.join(upload_to, filename)