# encoding:utf-8
import os.path
import platform
import logging
import os

if platform.node() == "JZLOG": # JZLOG is the name of felinx' dedicated server.
    DEBUG = False
else:
    DEBUG = True
TEMPLATE_DEBUG = DEBUG

SITE_SRC_ROOT = os.path.dirname(__file__)

# Absolute path to the directory that holds media.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = os.path.join(SITE_SRC_ROOT, 'static/')

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = '/static/'

# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = '/static/admin/'

try:
    # Secret settings
    from settings_secret import *
except ImportError:
    # default SECRET_KEY
    SECRET_KEY = '49cg!!96%qg)f@7dyg#7chz=#g88)4qdw%vrnr_@oz7_y@8lk)'

LOGIN_REDIRECT_URL = '/'
LOGIN_URL = "%saccount/signin/" % LOGIN_REDIRECT_URL

ACCOUNT_ACTIVATION_DAYS = 7

LOG_FILENAME = 'django.osqa.log'

logging.basicConfig(
    filename=os.path.join(SITE_SRC_ROOT, 'log', LOG_FILENAME),
    level=logging.ERROR,
    format='%(pathname)s TIME: %(asctime)s MSG: %(filename)s:%(funcName)s:%(lineno)d %(message)s',
)

#ADMINS and MANAGERS
ADMINS = (
    ('Felinx Lee', 'felinx.lee@gmail.com'),
)
MANAGERS = ADMINS

INTERNAL_IPS = ('127.0.0.1',)

DATABASE_NAME = 'zhimaq'             # Or path to database file if using sqlite3.
DATABASE_USER = 'root'               # Not used with sqlite3.
DATABASE_PASSWORD = ''               # Not used with sqlite3.
DATABASE_ENGINE = 'mysql'  #mysql, etc
DATABASE_HOST = ''
DATABASE_PORT = ''

if DEBUG:
    CACHE_BACKEND = 'file://%s' % os.path.join(os.path.dirname(__file__), 'cache').replace('\\', '/')
    SESSION_ENGINE = 'django.contrib.sessions.backends.db'
else:
    CACHE_BACKEND = 'memcached://127.0.0.1:11211'
    SESSION_ENGINE = 'django.contrib.sessions.backends.cache'

# This should be equal to your domain name, plus the web application context.
# This shouldn't be followed by a trailing slash.
# I.e., http://www.yoursite.com or http://www.hostedsite.com/yourhostapp
APP_URL = 'http://www.zhimaq.com'

DJANGO_VERSION = 1.25
OSQA_DEFAULT_SKIN = 'zhimaq'

DISABLED_MODULES = ['books', 'recaptcha', 'project_badges']

## Additional settings
TIME_ZONE = 'Asia/Shanghai'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'zh-CN'

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True


############
# SESSIONS #
############

SESSION_COOKIE_NAME = '_zm'                         # Cookie name. This can be whatever you want.
#SESSION_COOKIE_AGE = 60 * 20                            # Age of cookie, in seconds (default: 2 weeks).
SESSION_COOKIE_DOMAIN = '.zhimaq.com'                   # A string like ".lawrence.com", or None for standard domain cookie.
SESSION_COOKIE_SECURE = False                           # Whether the session cookie should be secure (https:// only).
SESSION_COOKIE_PATH = '/'                               # The path of the session cookie.
SESSION_SAVE_EVERY_REQUEST = False                      # Whether to save the session data on every request.
SESSION_EXPIRE_AT_BROWSER_CLOSE = False                 # Whether a user's session cookie expires when the Web browser is closed.
#SESSION_ENGINE = 'django.contrib.sessions.backends.cache'  # The module to store session data
#SESSION_FILE_PATH = None                                # Directory to store session files if using the file session module. If None, the backend will use a sensible default.

