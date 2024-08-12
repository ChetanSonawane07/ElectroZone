package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.ProductQuantityDTO;

public interface CartService {
    void addProductToCart(CartDTO cartDTO);
    List<ProductQuantityDTO> getProductsInCart(Long userId);
    void updateProductQuantity(CartDTO cartDTO);
    void removeProductFromCart(CartDTO cartDTO);
}
