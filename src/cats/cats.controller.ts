/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
        return 'Cat created successfully';
    }
}
