package com.app.service;

import java.util.List;

import com.app.dto.ProductDTO;
import com.app.dto.ProductResponseDTO;
import com.app.dto.WishlistDTO;

public interface WishlistService {

    List<ProductResponseDTO> getWishlistByUserId(Long userId);

    void addProductToWishlist(WishlistDTO wishlistDTO);

    void removeProductFromWishlist(WishlistDTO wishlistDTO);
}
