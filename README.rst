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


Electron
=========

Con electron-packager
---------------------

Uninstall nodejs (system node)
Install an updated version of node with::

    rm /yuneta/development/output/bin/curl

    sudo curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

    bash
    nvm install 18.13.0

Install ::

    npm install -g electron
    npm install -g electron-packager

Generate package::

    cd /yuneta/development/projects/^mulesol/mulesol-sistemas/projects/gpu/gui

    npm install
    npm run build
    npm run deploy

Execute in dev mode with ::

    npx electron .
    o
    npm run start

Execute output exe with ::

    out/hannaik-gpu-linux-x64/hannaik-gpu

Execute in production with (after ``npm run deploy``) ::

    /yuneta/gui/hannaik-gpu/hannaik-gpu


License
-------

Licensed under the  `The MIT License <http://www.opensource.org/licenses/mit-license>`_.
See LICENSE.txt in the source distribution for details.
