<h1 align="center">Airtable Shipping Block</h1>

<div align="center">
  :mailbox::package:
</div>
<div align="center">
  <strong>Manage and track your shipping labels directly in Airtable</strong>
</div>
<div align="center">
    All you need to run an ecommerce shop
</div>

<br />

<div align="center">
<object data="https://img.shields.io/github/followers/picsoung?style=social"></object>
  <img alt="GitHub followers" src="https://img.shields.io/github/followers/picsoung?style=social">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/picsoung?style=social">
  <img alt="License" src="https://img.shields.io/badge/License-GPLv3-blue.svg">
</div>

<div align="center">
  <h3>
    <a href="https://devpost.com/software/shipping-block">
      Devpost
    </a>
    <span> | </span>
    <a href="https://blog.airtable.com/airtable-blocks-contest-winners/">
      Blog Post
    </a>
  </h3>
</div>

<div align="center">
  <sub> Built with :tada: by
  <a href="https://twitter.com/picsoung">Nicolas Grenié</a>
</div>

## Table of Contents
- [Requirements](#requirements)
- [Features](#features)
- [Demo](#demo)
- [Support](#support)
- [License](#license)


## Requirements
This block works best with a base setup with the [Product Catalog](https://airtable.com/templates/local-business/expZvMLT9L6c4yeBX/product-catalog) template.

The base should be organized following way:
- A table for `Products` that contain all the items you are selling.
- A table `Clients`, which include a `Shipping address` column
- A table `Order line items` containing  all the details of orders.
- A table `Client orders` that contains orders made by clients, with link to `Clients` table, a lookup column to order line items and a lookup column to client's shipping address. Finally a column for the tracking number.

## Features
- Integrate with your [Shippo](https://goshippo.com/) account
- Works for free with Shippo test mode too.
- Compatible with all the couriers supported by Shippo (USPS, UPS, Fedex, DHL,...)
- Track orders that have a tracking number
- Evaluate prices before generating labels
- After generating label, tracking number is automatically added to the order

## Demo
How to use the shipping block
<iframe width="560" height="315" src="https://www.youtube.com/embed/5BoHy12nxB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Support
Feel free to reach out if you either want to use this block, if you found a bug.

<!-- ## License
GNU General Public License 3 (GPL-3.0) 2020 - Nicolas Grenié. Please have a look at the `LICENSE.md` for more details. -->