#!/usr/bin/env node

const eddystoneBeacon = require('eddystone-beacon')

const options = {
  txPowerLevel: -22,
  tlmCount: 2,
  tlmPeriod: 10
}

const url = 'https://bit.ly/1e1EYJv'

eddystoneBeacon.advertiseUrl(url, options)
