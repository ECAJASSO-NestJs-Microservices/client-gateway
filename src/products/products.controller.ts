import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `This action returns a #${id} product`;
  }

  @Get()
  getAllProducts() {
    return 'This action returns all products';
  }

  @Post()
  crateProduct(@Body() createProductDto: any) {
    return 'This action adds a new product';
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: any) {
    return `This action updates a product #${id}`;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return `This action removes a product #${id}`;
  }
}
