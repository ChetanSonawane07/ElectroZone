package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Brand;
import com.app.entities.Category;
import com.app.entities.Product;
import com.app.entities.Seller;

public interface ProductDao extends JpaRepository<Product, Long>{
	    List<Product> findByCategoryAndIsActiveTrue(Category categories);
	    List<Product> findBySeller(Seller seller);
	    List<Product> findByBrandAndIsActiveTrue(Brand brand);
	    Optional<Product> findByName(String name);	
	    List<Product> findBySellerAndIsActiveTrue(Seller seller);
		
		

}
