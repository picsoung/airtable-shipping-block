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
  <a href="https://github.com/picsoung"><img alt="GitHub followers" src="https://img.shields.io/github/followers/picsoung?style=social"></a>
  <a href="https://twitter.com/picsoung"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/picsoung?style=social"></a>
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

[![demo airtable](https://img.youtube.com/vi/5BoHy12nxB0/0.jpg)](https://www.youtube.com/watch?v=5BoHy12nxB0)


## Support
Feel free to reach out if you either want to use this block, if you found a bug.

## How to remix this block

1. Create a new base (or you can use an existing base).

2. Create a new block in your base (see [Create a new block](https://airtable.com/developers/blocks/guides/hello-world-tutorial#create-a-new-block),
   selecting "Remix from Github" as your template.

3. From the root of your new block, run `block run`.
<!-- ## License
GNU General Public License 3 (GPL-3.0) 2020 - Nicolas Grenié. Please have a look at the `LICENSE.md` for more details. -->