package com.app.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Cart;
import com.app.repository.CartRepository;
import com.app.service.CartCrudServices;

@Service
public class CartCrudServicesImpl implements CartCrudServices{
	
	@Autowired
	private CartRepository repository;

	@Override
	public Cart addCartItem(Cart cart) {
		// TODO Auto-generated method stub
		return repository.save(cart);
	}

	@Override
	public Cart getCartInfo(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id).get();
	}

	@Override
	public void deleteCartItem(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

}
