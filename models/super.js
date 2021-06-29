
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var superItemSchema = Schema( {
  ownerid:ObjectId,
  name: String,
  ability: String,
  age: Number
} );

module.exports = mongoose.model( 'super', superItemSchema );
