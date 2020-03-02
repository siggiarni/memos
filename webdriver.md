# Webdriver

## Python

Install update python

    $ brew install python

Add Python 3.x to path to .zshrc

    alias python=/usr/local/bin/python3
    alias pip=/usr/local/bin/pip3

Check python version

    $ python --version

Check pip version

    $ pip -V

[Homebrew](https://docs.brew.sh/Homebrew-and-Python#setuptools-pip-etc) should install PIP, but if it is missing, see [PIP install instructions](https://pip.pypa.io/en/stable/installing/).

## Selenium

Install Selenium

    $ pip install -U selenium

Check Selenium version

    $ pip freeze | grep selenium

## Webdrivers

Check safaridriver installation

    $ which safaridriver

Check safaridriver version

    $ safaridriver --version

Enable safaridriver

    $ safaridriver --enable

Install Geckodriver

    $ brew install geckodriver

Check Geckodriver location

    $ which geckodriver

Links

<https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari>

<https://webkit.org/blog/6900/webdriver-support-in-safari-10/>

<https://pypi.org/project/selenium/>
