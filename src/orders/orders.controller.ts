import { Controller, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

import { ORDERS_SERVICE } from 'src/config';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDERS_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Get()
  getAllOrders() {
    return this.ordersClient.send('findAllOrders', {}).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.ordersClient.send('findOrder', id).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Post()
  createOrder() {
    return this.ordersClient.send('createOrder', {}).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Patch('/update-status/:id')
  updateOrderStatus(@Param('id') id: string) {
    return this.ordersClient.send('updateOrderStatus', { id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }
}
