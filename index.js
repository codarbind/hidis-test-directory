import * as jio from './.hidis/index.js';
import express from 'express';
import { asdf } from './another_file.js';
let app = express();
app.listen(3003, () => {
    console.log(`listening atear`);
});