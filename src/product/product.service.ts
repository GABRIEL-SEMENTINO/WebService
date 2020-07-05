import { Injectable, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>) {

  }
  save(product: Product) {
    return this.repository.save(product);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);

  }

  update(product: Product) {
  return this.repository.update(product.id, product);
  }
}
