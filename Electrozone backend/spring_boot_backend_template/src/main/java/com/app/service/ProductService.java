package com.app.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.app.dto.ApiResponse;
import com.app.dto.BrandDTO;
import com.app.dto.CategoryDTO;
import com.app.dto.ProductDTO;
import com.app.dto.ProductResponseDTO;
import com.app.dto.SellerDTO;




public interface ProductService {



	List<ProductDTO> getAllProducts();

	ApiResponse purchase(Long id, int qty);

	ApiResponse deleteProductById(Long id);

	 List<ProductDTO>getAllProductsBySeller(SellerDTO seller);
	 List<ProductDTO>getAllProductsByBrand(BrandDTO brand);

	 List<ProductDTO> getAllProductsByName(String name);

	 List<ProductResponseDTO> getAllProductsByCategory(CategoryDTO categoryDTO);
	 
	ProductDTO addProduct(ProductDTO productDTO) throws IOException;

	ProductDTO updateProduct(Long productId, ProductDTO dto) throws IOException;

	ProductResponseDTO getProductById(String id);

	


}
