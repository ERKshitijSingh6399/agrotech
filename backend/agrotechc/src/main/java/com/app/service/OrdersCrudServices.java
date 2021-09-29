package com.app.service;

import java.util.List;

import com.app.model.Farmer;
import com.app.model.Orders;

public interface OrdersCrudServices {
	Orders addOrder(Orders orders);
	//Orders updateOrder(Orders orders);
	List<Orders> getOrdersByFarmerId(Farmer f);
	List<Orders> getAllOrders();
	void deleteOrdersById(int id);
}
