/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';

@Injectable()
export class CatsService {
    private cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
        console.log(this.cats);
    }
}
