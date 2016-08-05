# rickroll-beacon

> BLE/Bluetooth Smart Beacon for the [Physical Web](https://google.github.io/physical-web/)

## Setup

    $ git clone https://github.com/bencevans/rickroll-beacon
    $ cd rickroll-beacon

    $ npm install

    $ sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)
    $ npm start

