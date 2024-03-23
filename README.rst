gui_yunetas
===========

Built with web-skeleton3


A skeleton based on:

* `html5boilerplate <http://html5boilerplate.com/>`_.
* `Mako <http://docs.makotemplates.org/en/latest/index.html>`_.
* `Webassets <http://webassets.readthedocs.org/en/latest/index.html>`_.
* `Sass <http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html>`_.
* `Compass <http://compass-style.org/reference/compass/>`_.

.. warning:: To use scss remember install::

    sudo apt-get install ruby-dev ruby-rubygems
    sudo gem install compass
    sudo pip3 install scour
    sudo pip3 install cssutils
    sudo pip3 install rjsmin

.. warning:: Java version

    Cordova needs java 11


Electron
=========

Con electron-forge
------------------

Uninstall nodejs (system node)
Install an updated version of node with::

    rm /yuneta/development/output/bin/curl

    sudo curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

    bash
    nvm install 18.13.0

Install ::

    npm install -g electron
    npm install -g @electron-forge/cli

    npm install --save-dev electron
    npm install --save-dev @electron-forge/cli
    npx electron-forge import

Generate package::

    npm install
    npm run make
    npm run deploy

Execute in dev mode with ::

    npx electron .
    o
    npm run start

Execute output exe with ::

    out/gui_yunetas-linux-x64/gui_yunetas

Execute in production with (after ``npm run deploy``) ::

    /yuneta/gui/gui_yunetas/gui_yunetas


Cordova
=======

Install ::

    npm install -g cordova
    cordova platform add android

    curl -s "https://get.sdkman.io" | bash
    sdk uninstall gradle 8.7

Run ::

    cordova run android

License
=======

See LICENSE.txt in the source distribution for details.
