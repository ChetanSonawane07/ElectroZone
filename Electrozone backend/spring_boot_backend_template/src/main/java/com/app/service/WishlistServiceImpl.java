package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ProductDao;
import com.app.dao.UserDao;
import com.app.dao.WishlistDao;
import com.app.entities.Product;
import com.app.entities.User;
import com.app.entities.Wishlist;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ProductResponseDTO;
import com.app.dto.WishlistDTO;

@Service
@Transactional
public class WishlistServiceImpl implements WishlistService {

    @Autowired
    private WishlistDao wishlistDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProductDao productDao;
    
	@Autowired
	private ProductService productService;
	
    
    @Override
    public List<ProductResponseDTO> getWishlistByUserId(Long userId) {
        User user = userDao.findById(userId)
                           .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        List<Wishlist> wishlistItems = wishlistDao.findByUser(user);

        List<ProductResponseDTO> product = new ArrayList<>();
        
        return wishlistItems.stream()
                            .map(wishlist -> {
                            	ProductResponseDTO dto = new ProductResponseDTO();
                               dto = productService.getProductById((wishlist.getProduct().getId()).toString());
                                return dto;
                            })
                            .collect(Collectors.toList());
    }

    @Override
    public void addProductToWishlist(WishlistDTO wishlistDTO) {
    	
    	User user = userDao.findById(wishlistDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

    	Product product = productDao.findById(wishlistDTO.getProductId())
               .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    	
    	if(!wishlistDao.existsByUserAndProduct(user, product))
    	{
		        Wishlist wishlist = new Wishlist();
		        wishlist.setUser(user);
		        wishlist.setProduct(product);
		        wishlistDao.save(wishlist);
		        System.out.println("product added to wishlish");
    	}
    	else{
    		 System.out.println("product alredy exist to wishlish");
    		
    	}
    	
    	
    }

    @Override
    public void removeProductFromWishlist(WishlistDTO wishlistDTO) {
    	
    	
        User user = userDao.findById(wishlistDTO.getUserId())
                           .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Optional<Wishlist> wishlistOpt = wishlistDao.findByUser(user).stream()
                .filter(wishlist -> wishlist.getProduct().getId().equals(wishlistDTO.getProductId()))
                .findFirst();

        if (wishlistOpt.isPresent()) {
            wishlistDao.delete(wishlistOpt.get());
        } else {
            throw new ResourceNotFoundException("Product not found in the user's wishlist");
        }
        
    	
    }
    
    
    
}
