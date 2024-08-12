package com.app.service;

import java.util.List;

import com.app.dto.WishlistDTO;

public interface WishlistService {

    List<WishlistDTO> getWishlistByUserId(Long userId);

    void addProductToWishlist(WishlistDTO wishlistDTO);

    void removeProductFromWishlist(WishlistDTO wishlistDTO);
}
