package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.app.dto.ApiResponse;
import com.app.dto.PlaceOrderDTO;
import com.app.entities.OrderItem;
import com.app.service.OrderItemService;
import com.app.service.UserService;

@RestController
@RequestMapping("/order")
@Validated 
public class OrderController {

    @Autowired
    OrderItemService orderItemService;

    @Autowired
    UserService userService;

    @GetMapping("/order/{userId}")
    public ResponseEntity<List<OrderItem>> findAllOrdersByUser(@PathVariable Long userId) {
        List<OrderItem> orderItem = orderItemService.getAllOrderItemsOfUser(userId);
        return ResponseEntity.ok(orderItem);
    }  

    @GetMapping("/{orderId}")
    public ResponseEntity<List<OrderItem>> findAllOrderItemsByOrder(@PathVariable Long orderId) {
        List<OrderItem> orderItem = orderItemService.getOrderItemByOrder(orderId);
        return ResponseEntity.ok(orderItem);
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> placeOrder(@RequestBody PlaceOrderDTO placeOrderDTO) {
        ApiResponse placeOrder = orderItemService.placeOrder(
                placeOrderDTO.getUserId(),
                placeOrderDTO.getAddressId(),
                placeOrderDTO.getPaymentMethod()
        );
        return ResponseEntity.ok(placeOrder);
    }
}
